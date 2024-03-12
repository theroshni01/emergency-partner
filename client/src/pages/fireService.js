import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNumbers } from "../Context/number";

export const FireService =()=>{
    const [numbers, setNumbers] = useNumbers([]);
  const [success, setSuccess] = useState(false);

  //changes
  useEffect(() => {
    fireHelper();
  }, []);

  
  const fireHelper = async () => {
    try {

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            const location = `https://www.google.com/maps?q=/@${latitude},${longitude}`;

            await Promise.all(
              numbers.map(async (phoneNumber) => {
                console.log(phoneNumber);
                try {
                  await axios.post('http://localhost:3000/fireEmergency', {
                    location,
                  
                  });
                  console.log(`Location sent successfully to ${phoneNumber}.`);
                } catch (error) {
                  console.error(`Error sending location to ${phoneNumber}:`, error);
                }
              })
            );
            setSuccess(!success);  //changes
          
          },
          (error) => {
            console.error('Error getting location:', error);
          }
        );
      } else {
        console.error('Geolocation is not supported.');
      }
    } catch (error) {
      console.error('Error sending location:', error);
    }
  };
    return(
        <div>
            {success ? (
                <>
                    <h1>Message send successfully</h1>
                </>
            ):(
                <h1>No message sent</h1>
            )}
        </div>
    );
};