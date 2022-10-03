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
    label: "content",
    fieldName: "content",
    type: "textarea",
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
    publisher: "publisher",
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
        console.log(fieldInfo.type);
        return (
          <div key={key}>
            <Input
              id={fieldInfo.fieldName}
              className={fieldInfo.fieldName}
              {...fieldInfo}
              key={key}
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
            value={formData.password}
            type="text"
            id="publisher"
            name="publisher"
          />
        </div>
      )}
      {error && <h5 className="error">{error}</h5>}
    </form>
  );
};

export default AddNewArticle;
