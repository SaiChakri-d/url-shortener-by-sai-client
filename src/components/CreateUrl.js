import React from "react";
import { Paper, Button } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Navbar } from "./Navbar";
import { API } from "../global.js";
import { useNavigate } from "react-router-dom";

export const CreateUrl = () => {
  const navigate = useNavigate();

  const paperStyle = {
    padding: 50,
    height: "40vh",
    width: "50vw",
    margin: "100px auto",
  };

  const btnstyle = {
    margin: "auto",
    backgroundColor: "#51459E",
    border: "1px solid var(--yellow-theme-background-color:#1d1d1d)",
    color: "white",
    fontSize: "14px",
  };

  // const [long, setLong] = useState("");

  const createprocess = (long) => {
    console.log(long);
    fetch(`${API}/createshorturl`, {
      method: "POST",
      body: JSON.stringify(long),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          navigate("/showtable");
        } else {
          window.alert("url already exist kindly refer show Table");
          navigate("/showtable");
        }
      })
      .catch((e) => console.log("ERROR"));
  };
  const initialValues = {
    long: "",
  };
  const urlValidationSchema = Yup.object({
    long: Yup.string().required("Required").min(8, "URL is already shorter"),
  });

  const { handleBlur, handleChange, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: urlValidationSchema,
      onSubmit: (longurl) => {
        console.log("onSubmit", longurl);
        createprocess(longurl);
      },
    });

  return (
    <div>
      <Paper elevation={4} style={{ minHeight: "100vh", borderRadius: "0px" }}>
        <div>
          <Navbar />
        </div>
        <form onSubmit={handleSubmit}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Paper elevation={10} style={paperStyle} className="paper-style">
              <h3 className="h3-tag" style={{ fontSize: "24px" }}>
                Create Shorten URL
              </h3>
              <TextField
                className="add-user-name"
                label="Long URL"
                type="text"
                value={values.long}
                fullWidth
                name="long"
                style={{ fontSize: "20px", margin: "20px 0px" }}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.long && errors.long ? true : false}
                helperText={touched.long && errors.long ? errors.long : ""}
              />
              <Button
                className="add-user-btn"
                color="primary"
                fullWidth
                type="submit"
                style={btnstyle}
                variant="contained"
              >
                Generate
              </Button>
            </Paper>
          </div>
        </form>
      </Paper>
    </div>
  );
};
