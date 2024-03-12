import React, { useState } from "react";
import "../Styles/HelperLogin.css";
import "../Styles/UserLogin.css";
import '../Styles/auth.css';
import "../Styles/register.css";

export const Register = () => {
  return (
    <div className="auth">
      <button onClick={<User/>}>User</button>
      <button onClick={<Helper/>}>Helper</button>
    </div>
  );
};

const User=()=> {
    const [username, setUsername] = useState("");
    const [age, setAge] = useState("");
    const [phone_no, setPhone_no] = useState("");
    const [twilio_no, setTwilio_no] =useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const collectData = async (e)=>
    {
        e.preventDefault();
        let result = await fetch("http://localhost:3000/user",
        {
            method: "POST",
            body: JSON.stringify({username, age, phone_no, address, email, password}),
            headers: {'Content-Type': 'application/json'},
        })
        // result = await result.json;

        // localStorage.setItem("users", JSON.stringify(result));
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
                         onChange={(e) => setPhone_no(e.target.value)}/>
                         <p className="text">Don't have an account?<a href="https://www.twilio.com/login?iss=https%3A%2F%2Flogin.twilio.com%2F">Create an account.</a></p>
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

  //Helper

  

const Helper=()=> {

    const [username, setUsername] = useState(""); 
    const [specialization, setSpecialization] = useState("");
    const [phone_no, setPhone_no] = useState("");
    const [twilio_no, setTwilio_no] =useState("");
    const [address, setAddress] = useState("");
    const[gender,setGender]=useState("");
    // const[location,setLocation]=useState("");
    const[qualification,setQualification]=useState("");
    const[experience,setExperience]=useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const[certificate,setCertificate]=useState("");


    const collectData = async (e)=>
    {
        e.preventDefault();
        const result=await fetch("http://localhost:3000/helper",
        {
        
            method: "post",
            body: JSON.stringify({username, specialization, phone_no, address, gender, qualification, experience, email, password, certificate}),
            headers: {'Content-Type': 'application/json'},
        })
       
    }

  return(
    <div class='wrapper'>
        <form onSubmit={collectData} method="post">
            <h2>Helper Registration</h2>
            <div class="input-box">
                <input type="username" name="username" placeholder="Username" required
                value={username}
                onChange={(e) => setUsername(e.target.value)}/>
                <i class='bx bxs-user'></i>
            </div>
 
            <div class="input-box">
                <input type="specialization" name="Specialization" placeholder="Specialization"
                value={specialization}
                onChange={(e) => setSpecialization(e.target.value)}/>       
            </div> 
            <div class="input-box">
                <input type="number" name="phone_no" placeholder="Phone_no" required
                 value={phone_no}
                 onChange={(e) => setPhone_no(e.target.value)}/>
                <i class="bi bi-telephone-plus"></i>
            </div>
            <div class="input-box">
                        <input type="number" name="twilio_no" placeholder="Twilio Number" required
                         value={twilio_no}
                         onChange={(e) => setPhone_no(e.target.value)}/>
                          <i class="bi bi-telephone-plus"></i>
                         
                    </div>
                    <p className="text">Don't have an account?<a href="https://www.twilio.com/login?iss=https%3A%2F%2Flogin.twilio.com%2F">Create an account.</a></p>
                       
            <div class="input-box">
            <input type="Address" name="address" placeholder="Address" required
                value={address}
                onChange={(e) => setAddress(e.target.value)}/>
                <i class="bi bi-geo-alt-fill"></i>
            </div>
            <div class="input-box">
                <input type="gender" name="gender" placeholder="Gender" required
                value={gender}
                onChange={(e) => setGender(e.target.value)}/>
                <i class="bi bi-geo-alt-fill"></i>
            </div> 
            <div class="input-box">
                <input type="qualification" name="qualification" placeholder="Qualification" required
                value={qualification}
                onChange={(e) => setQualification(e.target.value)}/>
                <i class="bi bi-envelope-at-fill"></i>
            </div> 
            <div class="input-box">
                <input type="experience" name="experience" placeholder="Experience" required
                value={experience}
                onChange={(e) => setExperience(e.target.value)}/>
                <i class='bx bx-lock'></i>
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
            <div class="input-box">
                <label>Certificate</label>
                <input type="file" name="certificate" 
                value={certificate}
                onChange={(e) => setCertificate(e.target.value)}/>
                <i class='bx bx-lock'></i>
            </div> 
        
            <button type="submit" class="btn">Register</button>
            
        </form>
    </div>
    )
}
