import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import OtpScreen from "./pages/OtpScreen";
import ForgetPassword from "./pages/ForgetPassword";
import NewPassword from "./pages/NewPassword";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/otp" element={<OtpScreen />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/new-password" element={<NewPassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
