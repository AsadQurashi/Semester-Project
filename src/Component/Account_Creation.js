import React, { useState, memo } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Style/Regestration.css"
import { CreateAccountApplicant } from "../Service/Api";

const RegistrationPage = memo(() => {
  const [Register, setRegister] = useState({
    Name: "",
    Email: "",
    Password: "",
    Confirm_Password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setRegister({ ...Register, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { Name, Email, Password, Confirm_Password } = Register;
    try {
      if (Password !== Confirm_Password) {
        setRegister({ ...Register, ErrorMessage: "Passwords do not match" });
        return;
      }

      const response = await CreateAccountApplicant({
        action: "register",
        name: Name,
        email: Email,
        password: Password,
        confirm_password: Confirm_Password,
      });

      if (response.message === "Account created successfully") {
        // Store the JWT token in local storage
        const { user, token } = response;

        // Set the token and user data in local storage
        setTokenAndUser(token, user);

        setRegister({
          Name: "",
          Email: "",
          Password: "",
          Confirm_Password: "",
        });
        navigate("/Component/Login_Page");
      } else {
        alert("Account creation failed");
      }
    } catch (error) {
      console.log("Error:", error);
      alert("Email is already taken");
    }
  };

  return (
    <div className="registration-page">
      <h1 className="h1">Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label id="lbl">Name:</label>
          <input
            className="input-filed"
            type="text"
            name="Name"
            value={Register.Name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label id="lbl">Email:</label>
          <input
            className="input-filed"
            type="email"
            name="Email"
            value={Register.Email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label id="lbl">Password:</label>
          <input
            className="input-filed"
            type="password"
            name="Password"
            value={Register.Password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label id="lbl">Confirm Password:</label>
          <input
            className="input-filed"
            type="password"
            name="Confirm_Password"
            value={Register.Confirm_Password}
            onChange={handleChange}
            required
          />
        </div>
        <button id="btn" type="submit">Register</button>
      </form>
      <p className="link">
        Already have an account? <Link to="/Component/Login_Page">Login</Link>
      </p>
      {Register.errorMessage && <p>{Register.errorMessage}</p>}
    </div>
  );
});

export default RegistrationPage;
