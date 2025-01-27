// components/Home.js
import React, { useState } from "react";
import Header from "../Header";
import axios from "axios";

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    file: null
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      file: e.target.files[0]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', formData.name);
    data.append('age', formData.age);
    data.append('file', formData.file);
    axios.post('http://localhost:3000/create/user', data)
  .then(response => {
    setErrors({});
  })
  .catch(error => {
    if (error.response && error.response.data && error.response.data.errors) {
      const backendErrors = {};
      error.response.data.errors.forEach(err => {
        backendErrors[err.path] = err.msg;
      });
      setErrors(backendErrors);
    } else {
      console.error("Error submitting form:", error);
    }
  });
  };

  return (
    <Header>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-xl-6 mx-auto mb-4">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter name"
                />
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
              </div>
              <div className="form-group">
                <label htmlFor="age">Age</label>
                <input
                  type="text"
                  className={`form-control ${errors.age ? 'is-invalid' : ''}`}
                  id="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="Enter age"
                />
                {errors.age && <div className="invalid-feedback">{errors.age}</div>}
              </div>
              <div className="form-group">
                <label htmlFor="file">File</label>
                <input
                  type="file"
                  className={`form-control ${errors.file ? 'is-invalid' : ''}`}
                  id="file"
                  onChange={handleFileChange}
                />
                {errors.file && <div className="invalid-feedback">{errors.file}</div>}
              </div>
              <button type="submit" className="btn btn-primary mt-5">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default Home;