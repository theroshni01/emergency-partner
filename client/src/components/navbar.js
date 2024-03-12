import React from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import '../Styles/navbar.css';
import logo from '../images/helping-hand.png';

export const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    navigate("/register");
  };
  return (
    <div className="navbar" >
        <ul className="nav">
          <li className="nav-item">
          <img className= "image" src={logo} alt="Proj logo"/>
          </li>
          <li className="nav-item">
          <Link to="/" className="text">Sahayak</Link>
          </li>
        </ul>
    </div>
  );
};