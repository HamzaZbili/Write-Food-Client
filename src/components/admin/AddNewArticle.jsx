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
];

// image: String,
// publisher: String,
// category: [String],

const AddNewArticle = () => {
  const [formData, setFormData] = useState({
    title: "",
    city: "",
    publicationDate: "",
    content: "",
    publisher: "",
    category: [],
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
      data.append("photo", file);
      const newEatery = await service
        .post(`/eateries/my/new`, data)
        .then(navigate("/eateries/my"));
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <form>
      {fields.map((fieldInfo, key) => {
        return (
          <div key={key}>
            <Input
              className={fieldInfo.fieldName}
              {...fieldInfo}
              key={key}
              formData={formData}
              setFormData={setFormData}
            />
          </div>
        );
      })}
      {error && <h5 className="error">{error}</h5>}
    </form>
  );
};

export default AddNewArticle;
