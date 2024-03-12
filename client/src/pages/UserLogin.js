import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import "../Styles/UserLogin.css";
import "../Styles/register.css";

export const User=()=> {
    const [username, setUsername] = useState("");
    const [age, setAge] = useState("");
    const [phone_no, setPhone_no] = useState("");
    const [twilio_no, setTwilio_no] =useState("");
    const [twilio_sid, setTwilio_sid] =useState("");
    const [twilio_auth_token, setTwilio_auth_token] =useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const collectData = async (e)=>
    {
        e.preventDefault();
        let result = await fetch("http://localhost:3000/user",
        {
            method: "POST",
            body: JSON.stringify({username, age, phone_no, twilio_no, twilio_sid, twilio_auth_token, address, email, password}),
            headers: {'Content-Type': 'application/json'},
        })
        // result = await result.json;
        alert("Registration Successfull")
        // localStorage.setItem("users", JSON.stringify(result));
        navigate("/");
    }

    return(
            <div class='wrapper'>
                <form onSubmit={collectData} method="post">
                    <h2>User Registration</h2>
                    <div class="input-box">
                        <input type="username" name="username" placeholder="Username" required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} />
                        <i class='bx bxs-user'></i>
                    </div>
                    <div class="input-box">
                        <input type="number" name="age" placeholder="Age" required
                         value={age}
                         onChange={(e) => setAge(e.target.value)}/>
                        <i class='bx bxs-user'></i>
                    </div>
                    <div class="input-box">
                        <input type="number" name="phone_no" placeholder="Phone" required
                         value={phone_no}
                         onChange={(e) => setPhone_no(e.target.value)}/>
                        <i class="bi bi-telephone-plus"></i>
                    </div>
                    <div class="input-box">
                        <input type="number" name="twilio_no" placeholder="Twilio Number" required
                         value={twilio_no}
                         onChange={(e) => setTwilio_no(e.target.value)}/>
                         <p className="text">Don't have an account?<a href="https://www.twilio.com/login?iss=https%3A%2F%2Flogin.twilio.com%2F">Create an account.</a></p>
                        <i class="bi bi-telephone-plus"></i>
                    </div>
                    <div class="input-box">
                        <input type="text" name="twilio_sid" placeholder="Twilio Account SID" required
                         value={twilio_sid}
                         onChange={(e) => setTwilio_sid(e.target.value)}/>
                        <i class="bi bi-telephone-plus"></i>
                    </div>
                    <div class="input-box">
                        <input type="text" name="twilio_auth_token" placeholder="Twilio Auth Token" required
                         value={twilio_auth_token}
                         onChange={(e) => setTwilio_auth_token(e.target.value)}/>
                        <i class="bi bi-telephone-plus"></i>
                    </div>
                    <div class="input-box">
                        <input type="Address" name="address" placeholder="Address" required
                         value={address}
                         onChange={(e) => setAddress(e.target.value)}/>
                        <i class="bi bi-geo-alt-fill"></i>
                    </div>
                    <div class="input-box">
                        <input type="email" name="email" placeholder="Email" required
                         value={email}
                         onChange={(e) => setEmail(e.target.value)}/>
                        <i class="bi bi-envelope-at-fill"></i>
                    </div>
                    <div class="input-box">
                        <input type="password" name="password" placeholder="Password" required
                         value={password}
                         onChange={(e) => setPassword(e.target.value)}/>
                        <i class='bx bx-lock'></i>
                    </div>
                
                    <button type="submit" class="btn">Register</button>
                
                </form>
            </div>
    
    )
  }