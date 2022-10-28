import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Button, CircularProgress } from "@mui/material";




const RegForm = ({ formik, err, loading }) => {
  const [types, setType] = useState("password");
  const [icon, setIcon] = useState(<AiOutlineEyeInvisible />);
  /**
   * bu fuction passwordni raqamlarini korsatib korsatmaslik uchun
   */
  const handleToggle = () => {
    if (types === "password") {
      setIcon(<AiOutlineEye />);
      setType("text");
    } else {
      setIcon(<AiOutlineEyeInvisible />);
      setType("password");
    }
  };

  return (
    <form className="reg-form" onSubmit={formik.handleSubmit}>
      <h1>Register</h1>
      <label htmlFor="firstName">First Name</label>
      <input
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
        placeholder="enter name"
        required
      />
      <label htmlFor="email">Email Address</label>
      <input
        name="email"
        type="email"
        placeholder="enter email"
        onChange={formik.handleChange}
        value={formik.values.email}
        required
      />
      <label htmlFor="password">Password</label>
      <div className="password-see">
        <input
          name="password"
          type={types}
          placeholder="enter password"
          onChange={formik.handleChange}
          value={formik.values.password}
          required
        />
        <span onClick={handleToggle}>{icon}</span>
      </div>
      <p style={{ color: "red" }}>{err.error}</p>
      <p>
        Don't have an account yet ? <Link to="/">Sign In</Link>
      </p>
      {loading ? (
        <Button
    className="btn-ant ant-btn-primary"
    startIcon={<CircularProgress color="secondary"/>}
    />
      ) : (
        <button className="btn-ant ant-btn-primary" type="submit">
          Submit
        </button>
      )}
    </form>
  );
};

export default RegForm;
