import axios from 'axios';
import React from 'react';
import { MapComponent } from "../pages/GoogleMap";

export const ShareLocation = (props) => {

  // const[address,setAddress]=useState('');

  const shareLocation = async () => {
    try {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            latitude = `${latitude}`;
            longitude = `${longitude}`;
            const phoneNumbers = props.phoneNumber;// Fetch from your database

            //Convert coordinates to address using Google Maps Geocoding API
            const addressResponse=await axios.get(
              `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=YOUR_GOOGLE_MAPS_API_KEY`
            );

            if(addressResponse.data.results.length>0){
              const formattedAddress =addressResponse.data.results[0].formatted_address;
              setAddress(formattedAddress);
            }else{
              setAddress('No address found for the given coordinates.');
            }
            // Iterate through phoneNumbers and send location to each number
            for (const phoneNumber of phoneNumbers) {
              await axios.post('http://localhost:3000/send-location', {
                location,
                phoneNumber,
              });
            }

            console.log('Location sent successfully.');
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

  return (
    <div>
      {/* <button onClick={shareLocation}>Share Location</button> */}
      {/* <p>Address:{address}</p> */}

      <MapComponent latitude={latitude} longitude={longitude} />
    </div>
  );
};

