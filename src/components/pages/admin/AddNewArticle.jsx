import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import service from "../../auth/service";
import Input from "./forms/Input";
import "./addNewArticle.css";
import BackButton from "../../icons/BackButton";
import { fields, checkBoxes } from "./forms/articleFields.js";
// import { FormState } from "./type-definitions";

const AddNewArticle = () => {
  const [formData, setFormData] = useState
  // <FormState>
    ({
    title: "",
    city: "",
    publicationDate: "",
    publisher: "publisher",
    other: "",
    link: "",
    // categories
    lifestyle: false,
    guide: false,
    review: false,
    recipe: false,
    seasonal: false,
  });
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = new FormData();
      for (const key in formData) {
        data.append(key, formData[key]);
      }
      data.append("image", file);
      console.log(file);
      await service.post(`/articles/new`, data);
      navigate("/");
    } catch (error) {
      setError(error.response);
    }
  };
  return (
    <>
      <h2 className="adminHeader">new article</h2>
      <BackButton />
      <div id="addNewArticleFormContainer">
        <form onSubmit={handleSubmit} id="addNewArticleForm">
          <h1>new article</h1>
          {fields.map((fieldInfo, key) => {
            return (
              <Input
                key={key}
                id={fieldInfo.fieldName}
                className="newArticleInputField"
                {...fieldInfo}
                formData={formData}
                setFormData={setFormData}
                type={fieldInfo.type}
              />
            );
          })}
          {checkBoxes.map((boxes, key) => {
            return (
              <div key={key}>
                <input
                  type="checkbox"
                  name={boxes.fieldName}
                  formdata={formData}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.checked,
                    })
                  }
                />
                <label htmlFor="scales">{boxes.label}</label>
              </div>
            );
          })}
          <label htmlFor="publisher">Publisher</label>
          <select
            name="publisher"
            id="publisher"
            className="newArticleInputField"
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            required
          >
            <option value="Dishcult">Dishcult</option>
            <option value="HiP PARIS">HiP PARIS</option>
            <option value="Palate">Palate</option>
            <option value="">other</option>
          </select>

          {formData.publisher === "" && (
            <div>
              <label htmlFor="other">other</label>
              <input
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
                value={formData.other}
                type="text"
                id="other"
                name="other"
              />
            </div>
          )}
          <p>article image:</p>
          <input
            onChange={(e) => {
              // setFormData({ ...formData, [e.target.name]: e.target.value });
              setFile(e.target.files[0]);
            }}
            value={formData.image}
            type="file"
            id="image"
            name="image"
            accept="png jpeg"
            required
          />
          <input type="submit" value="post article" id="submitArticleButton" />
          {error && <h5 className="error">{error}</h5>}
        </form>
      </div>
    </>
  );
};

export default AddNewArticle;
