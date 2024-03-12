import axios from "axios";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import '../Styles/auth.css';
import { AdminPage } from './adminPage';

export const Admin = () => {
  return (
    <div className="auth">
        <AdminRegistration/>
        <AdminLogin/>
    </div>
  );
};

const AdminRegistration = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const [_, setCookies] = useCookies(["access_token"]);
    const navigate = useNavigate();
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const result = await axios.post("http://localhost:3000/admin/adminregisteration", {
          username,
          password,
        });
        
        setCookies("access_token", result.data.token);
        alert("Registration Completed! Now login.");
        navigate("/");
      } catch (error) {
        console.error(error);
        alert("Admin is already registered")
      }
    };
  
    return (
      <div>
        <div className="auth-container">
        <form onSubmit={handleSubmit}>
          <h2>Admin Register</h2>
          <div className="form-group">
            <label htmlFor="username">Email:</label>
            <input
              type="email"
              id="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          {/* <button type="submit">Register</button> */}
          <button className="Login" type="submit" onClick={<AdminPage/>}>Register</button>
        </form>
      </div>
      </div>
    )
};

const AdminLogin = () => {

  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [_, setCookies] = useCookies(["access_token"]);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const result = await axios.post("http://localhost:3000/admin/adminlogin", 
      {
        username,
        password,
      });

      setCookies("access_token", result.data.token);
      window.localStorage.setItem("userID", result.data.userID);
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Username or password is incorrect")
    }
  };


  return (
    <div className="auth-container">
    <div>
      <div className="auth-container">
      <form onSubmit={handleSubmit}>
        <h2>AdminLogin</h2>
        <div className="form-group">
          <label htmlFor="username">Email :</label>
          <input
            type="email"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button className="Login" type="submit" onClick={<AdminPage/>}>Login</button>
      </form>
    </div>
    </div>
    </div>
  );
};