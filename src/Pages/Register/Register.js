import React from "react";
import { Link } from "react-router-dom";
import registerS from "./Register.module.css";
import axios from "axios";
import { useState } from "react";

export const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    password: "",
    confirmPassword: "",
    tel:""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios.post("/api/Register", formData)
      .then(response => {
        console.log(response.data);
        alert("Registration successful!");
      })
      .catch(error => {
        console.error(error);
        alert("Registration failed. Please try again later.");
      });
  };
  return (
    <>
      <div className={registerS.auth}>
        <div className={registerS.layout}>
          <form className={registerS.form} onSubmit={handleSubmit}>
            <h1 className={registerS.title}>Register</h1>
            <div className={registerS.flex}>
              <input
                placeholder="First name"
                type="text"
                className={registerS.input}
                value={formData.firstName}
                onChange={handleInputChange}
              />
              <input
                placeholder="Last name"
                type="text"
                className={registerS.input}
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
            <input
              type="text"
              placeholder="Address"
              className={registerS.input}
              value={formData.address}
              onChange={handleInputChange}
            />
            <input
              type="email"
              placeholder="Email address"
              className={registerS.input}
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              type="password"
              placeholder="Password"
              className={registerS.input}
              value={formData.password}
              onChange={handleInputChange}
            />
            <input
              type="password"
              placeholder="Confirm password"
              className={registerS.input}
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
            <input
              type="tel"
              placeholder="phone number"
              className={registerS.input}
              value={formData.tel}
              onChange={handleInputChange}
            />
            {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
            <button className={registerS.log_btn}>Register</button>
            <p className={registerS.signin}>
              Already have an account ?<span> </span>
              <Link to="/Login" className={registerS.link}>
                Sign in here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
