import React from "react";
import { Link } from "react-router-dom";

export function PasswordUpdated() {
  return (
    <>
      <br />
      <br />
      <h1 style={{ textAlign: "center", color: "green", fontSize: "50px" }}>
        Password updated successfully
      </h1>
      <br />
      <br />
      ""
      <div style={{ textAlign: "center", color: "blue", fontSize: "30px" }}>
        <Link to="/">Login</Link>
      </div>
    </>
  );
}
