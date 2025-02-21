import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({
    name: '',
    age: '',
    file: ''
  });
  const handleFileChange = (e) => {
    setUser((prevData) => ({
      ...prevData,
      file: e.target.files[0]
    }));
  };
  useEffect(() => {
    // Fetch the current user details
    axios.get(`http://localhost:5000/get/user/${id}`)
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error("Error fetching user:", error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', user.name);
    formData.append('age', user.age);
    if (user.file) {
      formData.append('file', user.file);
    }
  
    axios.post(`http://localhost:5000/update/user/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(response => {
        console.log("User updated:", response.data);
      })
      .catch(error => {
        console.error("Error updating user:", error);
      });
  };

  return (
    <div className="container">
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            className="form-control"
            id="age"
            name="age"
            value={user.age}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
                <label htmlFor="file">File</label>
                <input
                  type="file"
                  id="file"
                  onChange={handleFileChange}
                />
              </div>
        <button type="submit" className="btn btn-primary">Update User</button>
      </form>
    </div>
  );
};

export default EditUser;