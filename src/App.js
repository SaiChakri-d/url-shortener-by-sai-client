import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { NotFound } from "./components/NotFound";
import { ForgetPassword } from "./components/ForgetPassword";
import { ChangePassword } from "./components/ChangePassword";
import { Welcome } from "./components/Welcome";
import { PasswordUpdated } from "./components/PasswordUpdated";
import { CreateUrl } from "./components/CreateUrl";
import { Application } from "./components/Application";
import { ShowTable } from "./components/ShowTable";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Welcome" element={<Welcome />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
        <Route path="/PasswordUpdated" element={<PasswordUpdated />} />
        <Route path="/" element={<Navigate replace to="/Login" />} />
        <Route path="/404-Page" element={<NotFound />} />
        <Route path="*" element={<Navigate replace to="/404-Page" />} />
        <Route path="/home" element={<Navigate replace to="/application" />} />
        <Route path="/reset-password/:id/:token" element={<ChangePassword />} />
        <Route path="/createurl" element={<CreateUrl />} />
        <Route path="/application" element={<Application />} />
        <Route path="/showtable" element={<ShowTable />} />
      </Routes>
    </div>
  );
}

export default App;
