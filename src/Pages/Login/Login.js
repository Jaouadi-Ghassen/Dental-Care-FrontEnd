import React from "react";
import loginS from "./Login.module.css";
import { Link } from "react-router-dom";
export const Login = () => {
  return (
    <div className={loginS.auth}>
      <div className={loginS.layout}>
        {/* <img src={loginImage} alt="" className={loginS.image} /> */}
        {/* <div className={loginS.vl}></div> */}
        <form className={loginS.form}>
          <h1 className={loginS.title}>Login</h1>
          <input
            type="email"
            placeholder="Enter your email address"
            className={loginS.input}
          />
          <input
            type="password"
            placeholder="Enter your password"
            className={loginS.input}
          />
          <button className={loginS.log_btn}>Login</button>
          <p className={loginS.signin}>
            You Don't have an account ?<span> </span>
            <Link to="/Register" className={loginS.link}>
            Register here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
