import axios from "axios";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { useUser} from "../Context/UserEmail";
import '../Styles/auth.css';

export const Auth = () => {
  return (
    <div className="auth">
      <UserLogin />
      <HelperLogin />
    </div>
  );
};


const UserLogin = () => {

  const [email, setEmail] =  useState(''); 
  const [password, setPassword] = useState(""); 
  const [_, setCookies] = useCookies(["access_token"]);

  const { userEmail, setUserEmail } = useUser() || {};

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const result = await axios.post("http://localhost:3000/auth/userlogin", 
      {
        email,
        password,
      });

      setCookies("access_token", result.data.token);
      var ans= window.localStorage.setItem("userID", result.data.userID);
      console.log("User Email: "+ email)
      alert("Login Successfull")
      navigate("/");
      setUserEmail(email);
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
        <h2>UserLogin</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
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
        <button className="Login" type="submit">Login</button>
        <div className="register">
          <p>Do you have account?
            <Link to="/User" className="account">
            Create an account.
            </Link>
          </p>
        </div>
      </form>
    </div>
    </div>
    </div>
  );
};

const HelperLogin = () => {

  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [_, setCookies] = useCookies(["access_token"]);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const result = await axios.post("http://localhost:3000/auth/helperlogin", 
      {
        email,
        password,
      });

      setCookies("access_token", result.data.token);
      window.localStorage.setItem("userID", result.data.userID);
      alert("Login Successfull")
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
        <h2>HelperLogin</h2>
        <div className="form-group">
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
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
        <button className="Login" type="submit">Login</button>
        <div className="register">
          <p>Do you have account?
            <Link to="/Helper" className="account">
            Create an account.
          </Link>
          </p>
        </div>
      </form>
    </div>
    </div>
    </div>
  );
};

