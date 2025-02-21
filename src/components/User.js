// components/Home.js
import React, { useContext,useState } from 'react';
import Header from '../Header';
import { CounterContext } from './CounterContext';  // Import the context
import axios from 'axios';
const Contact = () => {
  const { user, setUser } = useContext(CounterContext);
  const [errors,setErrors] = useState({});
  const [formData,setFormData] = useState({
    name:'',
    age:''
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/create/user', formData).then((response)=>{
        
    }).catch((error)=>
    {
        if (error.response.data.errors) {
            const backendErrors = {};
            error.response.data.errors.forEach(err => {
              backendErrors[err.path] = err.msg;
            });
            // console.log(backendErrors)
            setErrors(backendErrors);
          } 
    }
)

  }
  return (
    <div>
         <Header>
         <form onSubmit={handleSubmit}>
              <div className="form-group">
                {/* {errors} */}
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                //   className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter name"
                />
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
              </div>
              <div className="form-group">
                <label htmlFor="age">Age</label>
                <input
                  type="text"
                //   className={`form-control ${errors.age ? 'is-invalid' : ''}`}
                  id="age"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}

                  placeholder="Enter age"
                />
                {errors.age && <div className="invalid-feedback">{errors.age}</div>}
              </div>
              <button type="submit" className="btn btn-primary mt-5">
                Submit
              </button>
            </form>
         </Header>
    </div>
  );
};

export default Contact;