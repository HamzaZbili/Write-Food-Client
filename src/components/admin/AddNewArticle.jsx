import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import service from "../auth/service";
import Input from "./Input";

const fields = [
  {
    label: "Title",
    fieldName: "title",
    type: "text",
  },
  {
    label: "City",
    fieldName: "city",
    type: "text",
  },
  {
    label: "Publish Date",
    fieldName: "publicationDate",
    type: "date",
  },
  {
    label: "Link",
    fieldName: "link",
    type: "text",
  },
  {
    label: "food",
    fieldName: "food",
    type: "checkbox",
  },
  {
    label: "lifestyle",
    fieldName: "lifestyle",
    type: "checkbox",
  },
  {
    label: "guide",
    fieldName: "guide",
    type: "checkbox",
  },
  {
    label: "review",
    fieldName: "review",
    type: "checkbox",
  },
  {
    label: "recipes",
    fieldName: "recipes",
    type: "checkbox",
  },
];

const categories = ["food", "lifestyle", "guide", "review", "recipes"];

// image: String,

const AddNewArticle = () => {
  const [formData, setFormData] = useState({
    title: "",
    city: "",
    publicationDate: "",
    publisher: "publisher",
    other: "",
    food: false,
    lifestyle: false,
    guide: false,
    review: false,
    recipes: false,
    link: "",
  });
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // const data = new FormData();
      // for (const key in formData) {
      //   data.append(key, formData[key]);
      // }
      // data.append("photo", file);
      const newArticle = await service
        .post(`/articles/new`, formData)
        .then(navigate("/new"));
      console.log(newArticle);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} id="postArticleForm">
      {fields.map((fieldInfo, key) => {
        return (
          <div key={key}>
            <Input
              id={fieldInfo.fieldName}
              className={fieldInfo.fieldName}
              {...fieldInfo}
              formData={formData}
              setFormData={setFormData}
              type={fieldInfo.type}
            />
          </div>
        );
      })}
      <label htmlFor="publisher">Publisher</label>
      <select
        name="publisher"
        id="publisher"
        onChange={(e) =>
          setFormData({ ...formData, [e.target.name]: e.target.value })
        }
        required
      >
        <option value="Dishcult">Dishcult</option>
        <option value="HiP PARIS">HiP PARIS</option>
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
      <input type="submit" value="post article" id="submitArticleButton" />
      {error && <h5 className="error">{error}</h5>}
    </form>
  );
};

export default AddNewArticle;
