import React from 'react'
import { useState } from 'react';
import "./updateArticle.css";

const UpdateArticle = ({article, updateListedArticles}) => {
   const [updatePopUp, setUpdatePopup] = useState(false)
   function handleClick() {
    if(!updatePopUp) {
        setUpdatePopup(true)
        console.log(updatePopUp)
    }else {
        setUpdatePopup(false)
        console.log(updatePopUp)
    }
   }
  return (<>
   <div className="updateArticleButton" onClick={handleClick}>Update</div>
   {updatePopUp&& <div className="updateForm">popupform
   <div onClick={handleClick}>X</div>
   </div>}
  </>
   
  )
}

export default UpdateArticle