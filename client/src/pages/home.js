import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useNumbers } from "../Context/number";
import { Link } from "react-router-dom";
import "../Styles/Home.css";

export const Home = () => {
  const [numbers, setNumbers] = useNumbers([]);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const fireHelper = async () => {
    try {
      // setSuccess(!success);

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            const location = `Latitude: ${latitude}, Longitude: ${longitude}`;

            await Promise.all(
              numbers.map(async (phoneNumber) => {
                console.log(phoneNumber);
                try {
                  await axios.post("http://localhost:3000/fireService", {
                    location,
                    phoneNumber,
                  });
                  console.log(`Location sent successfully to ${phoneNumber}.`);
                } catch (error) {
                  console.error(
                    `Error sending location to ${phoneNumber}:`,
                    error
                  );
                }
              })
            );

            navigate("/");
          },
          (error) => {
            console.error("Error getting location:", error);
          }
        );
      } else {
        console.error("Geolocation is not supported.");
      }
    } catch (error) {
      console.error("Error sending location:", error);
    }
  };

  return (
    <div>
      <div className="titletext">
        <h1 className="title">Welcome to Sahayak - Your Personal Emergency Assistance Companion</h1>
        <p className="title-des">
        Sahayak is here to redefine the way we respond to emergencies.
              Sahayak is more than just an app; it's your reliable companion
              during challenging times, ensuring help is just a tap away.
        </p>
        <p className="login">
        <Link to="/Auth" className="btn btn-primary my-2">
            Login
        </Link>
        </p>
      </div>

      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
        <Link to="/medicalEmergency">
          <div class="card">
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.FNeK_zoJtYk_bg0IOiyJLAHaHa&pid=Api&P=0&h=180"
              class="card-img-top"
              alt="Medical emergency"
            />
            <div class="card-body">
              <h5 class="card-title">Medical Emergency</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div></Link>
        </div>
        <div class="col">
        <Link to="/fireEmergency">
          <div class="card">
            <img
              src="https://www.compliancesigns.com/media/NH/fire-emergency/1000/Emergency-Contact-911-Sign-NHE-13836_1000.gif"
              class="card-img-top"
              alt="Fire Emergency"
            />
            <div class="card-body">
              <h5 class="card-title">Fire Emergency</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div></Link>
        </div>
        <div class="col">
        <Link to="/policeEmergency">
          <div class="card">
            <img
              src="https://cdn0.iconfinder.com/data/icons/man-fighting-resisting-and-obstructing-police-duty/358/policeman-fight-criminal-018-1024.png"
              class="card-img-top"
              alt="Police Emergency"
            />
            <div class="card-body">
              <h5 class="card-title">Police Emergency</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </p>
            </div>
          </div></Link>
        </div>

        <div class="col">
        <Link to="/domesticOption">
          <div class="card">
          
            <img
              src="https://www.pngall.com/wp-content/uploads/5/Helping-Hands-PNG-Clipart.png"
              class="card-img-top"
              alt="Domestic"
            />
            <div class="card-body">
              <h5 class="card-title">Domestic Emergency</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
