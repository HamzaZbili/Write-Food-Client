import React, { useEffect, useRef } from 'react'
import { useState } from 'react';
import Cross from '../global/Cross';
import {fields, checkBoxes} from "./articleFields.js"
import Input from './Input';
import "./updateArticle.css";

const UpdateArticle = ({article, updateListedArticles}) => {
   const [updatePopUp, setUpdatePopup] = useState(false)
   const popUpForm = useRef();
   const [error, setError] = useState(null);
   const [formData, setFormData] = useState({
    article
  });
   
   function handleClick() {
    if(!updatePopUp) {
        setUpdatePopup(true)
    }else {
        setUpdatePopup(false)
    }
   }

   useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (!popUpForm.current?.contains(event.target)) {
        setUpdatePopup(false)
      }
    })
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
    } catch (error) {
    
    }
  };

  return (<>
   <div className="updateArticleButton" onClick={handleClick}>Update</div>
   {updatePopUp&& <div className="updateForm" ref={popUpForm}>
    <div className="updateFormCloseButton" onClick={handleClick}>
    <Cross />
    </div>
    <h4>update article: {article.title}</h4>
    <div id="addNewArticleFormContainer">
      <form onSubmit={handleSubmit} id="addNewArticleForm">
        {fields.map((fieldInfo, key) => {
          return (
            <Input
              key={key}
              id={fieldInfo.fieldName}
              className="newArticleInputField"
              {...fieldInfo}
              formData={formData}
              // placeholder={formData.entries(formData.keys())}
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
        <input type="submit" value="update article" id="submitArticleButton" />
        {error && <h5 className="error">{error}</h5>}
      </form>
    </div>
   </div>}
  </>
   
  )
}

export default UpdateArticle