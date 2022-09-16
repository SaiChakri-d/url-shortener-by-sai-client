import React from "react";
import { Link } from "react-router-dom";

export function Welcome() {
  return (
    <>
      <h1 style={{ textAlign: "center", color: "green", fontSize: "50px" }}>
        Successful Login!!
      </h1>
      <br />
      <br />
      <h1 style={{ textAlign: "center", color: "green", fontSize: "50px" }}>
        Welcome to App
      </h1>

      <br />
      <br />
      <div style={{ textAlign: "center", color: "blue" }}>
        <Link to="/Register">Create Account!</Link>
        <br />
        <br />
        <Link to="/ForgetPassword">Forget Password?</Link>
        <br />
        <br />
        <Link to="/">Login</Link>
      </div>
    </>
  );
}
