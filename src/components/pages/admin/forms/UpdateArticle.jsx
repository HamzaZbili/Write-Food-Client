import React, { useRef } from "react";
import { useState } from "react";
import Cross from "../../../icons/Cross";
import { fields, categoryCheckBoxes } from "./articleFields.js";
import edit from "../../../icons/edit.svg";
import Input from "./Input";
import service from "../../../auth/service";
import "./updateArticle.css";

const UpdateArticle = ({ article, updateListedArticles }) => {
  const [updatePopUp, setUpdatePopup] = useState(false);
  const popUpForm = useRef();
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    title: article.title,
    city: article.city,
    publicationDate: article.publicationDate,
    publisher: article.publisher,
    other: article.other,
    link: article.link,
    // categories
    lifestyle: article.category?.lifestyle,
    guide: article.category?.guide,
    review: article.category?.review,
    recipe: article.category?.recipe,
    seasonal: article.category?.seasonal,
  });

  function handleClick() {
    setUpdatePopup(!updatePopUp);
    if (!updatePopUp) {
      setUpdatePopup(true);
    } else {
      setUpdatePopup(false);
    }
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await service.patch(`/articles/update/${article._id}`, formData);
      updateListedArticles();
      setUpdatePopup(false);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <img src={edit} alt="edit" onClick={handleClick} className="editButton" />
      {updatePopUp && (
        <div className="updateForm" ref={popUpForm}>
          <div className="updateFormCloseButton" onClick={handleClick}>
            <Cross />
          </div>
          <h4 className="updateArticleTitle">{article.title}</h4>
          <div id="addNewArticleFormContainer">
            <form onSubmit={handleSubmit} id="addNewArticleForm">
              {fields.map((fieldInfo, key) => {
                return (
                  <Input
                    key={key}
                    id={fieldInfo.fieldName}
                    className="newArticleInputField"
                    // defaultValue={article[fieldInfo.fieldName]}
                    placeholder={article[fieldInfo.fieldName]}
                    {...fieldInfo}
                    type={fieldInfo.type}
                    formData={formData}
                    setFormData={setFormData}
                  />
                );
              })}
              {categoryCheckBoxes.map((box, key) => {
                return (
                  <div key={key}>
                    <input
                      type="checkbox"
                      name={box}
                      formdata={formData}
                      defaultChecked={article.category[box]}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          [e.target.name]: e.target.checked,
                        })
                      }
                    />
                    <label htmlFor="scales">{box}</label>
                  </div>
                );
              })}
              <label htmlFor="publisher">Publisher</label>
              <select
                name="publisher"
                id="publisher"
                className="newArticleInputField"
                defaultValue={formData.publisher}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
                required
              >
                <option value="Dishcult">Dishcult</option>
                <option value="HiP PARIS">HiP PARIS</option>
                <option value="Palate">Palate</option>
                <option value="Palate">Paris Unlocked</option>
                <option value="">other</option>
              </select>
              {formData.publisher === "" && (
                <div>
                  <label htmlFor="other">other</label>
                  <input
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        [e.target.name]: e.target.value,
                      })
                    }
                    defaultValue={formData.other}
                    type="text"
                    id="other"
                    name="other"
                  />
                </div>
              )}
              <input
                type="submit"
                value="update article"
                id="submitArticleButton"
              />
              {error && <h5 className="error">{error}</h5>}
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default UpdateArticle;
