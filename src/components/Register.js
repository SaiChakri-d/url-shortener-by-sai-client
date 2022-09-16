import { Typography, Button } from "@mui/material";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import TextField from "@mui/material/TextField";
// import { useNavigate } from 'react-router-dom'
import { API } from "../global.js";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Register() {
  // const navigate=useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  // const login=()=>navigate("/Login");

  const regUser = (newUser) => {
    fetch(`${API}/signup`, {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((data1) => {
        if (data1.message === "successful Signup") {
          // login();
          window.alert("Activate acount by click URL sent to your mail");
        } else {
          setErrorMsg(data1.message);
        }
      });
  };
  const initialValues = {
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
  };
  const userValidationSchema = Yup.object({
    FirstName: Yup.string().required("Required"),
    LastName: Yup.string().required("Required"),
    Email: Yup.string().email("Must be a valid email").required("Required"),
    Password: Yup.string().required("Required").min(8),
  });

  const { handleBlur, handleChange, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: userValidationSchema,
      onSubmit: (newUser) => {
        console.log("onSubmit", newUser);
        setErrorMsg("");
        regUser(newUser);
      },
    });

  return (
    <div className="add-user-container">
      <form onSubmit={handleSubmit} className="add-user-form">
        <Typography
          variant="h4"
          pb={2}
          sx={{
            textAlign: "center",
          }}
        >
          Register User
        </Typography>

        <TextField
          className="add-user-name"
          label="First Name"
          type="text"
          value={values.FirstName}
          name="FirstName"
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.FirstName && errors.FirstName ? true : false}
          helperText={
            touched.FirstName && errors.FirstName ? errors.FirstName : ""
          }
        />
        <TextField
          className="add-user-name"
          label="Last Name"
          type="text"
          value={values.LastName}
          name="LastName"
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.LastName && errors.LastName ? true : false}
          helperText={
            touched.LastName && errors.LastName ? errors.LastName : ""
          }
        />
        <TextField
          className="add-user-name"
          label="User Name: Email"
          type="Email"
          value={values.Email}
          name="Email"
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.Email && errors.Email ? true : false}
          helperText={touched.Email && errors.Email ? errors.Email : ""}
        />
        <TextField
          className="add-user-name"
          label="Password"
          type="password"
          value={values.Password}
          name="Password"
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.Password && errors.Password ? true : false}
          helperText={
            touched.Password && errors.Password ? errors.Password : ""
          }
        />
        <Button
          className="add-user-btn"
          color="primary"
          type="submit"
          variant="contained"
        >
          SignUp
        </Button>
        <div className="text-center" style={{ color: "red" }}>
          {errorMsg}
        </div>
        <div className="text-center" style={{ color: "blue" }}>
          <Link to="/Login">Login!</Link>
          <br />
          <br />
          <Link to="/ForgetPassword">Forget Password?</Link>
        </div>
      </form>
    </div>
  );
}
