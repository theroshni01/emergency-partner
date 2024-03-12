// import axios from "axios";

// export const AdminPage = (number,message) => {
   
//         try {
        
//         // const [numbers,setNumbers]=useNumbers([]); 
//         console.log("this is message"+ message);
//           if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(
//               async (position) => {
//                 const { latitude, longitude } = position.coords;
//                 const location = `Latitude: ${latitude}, Longitude: ${longitude}`;
//                 // const message=props.message;
//                 // setPhoneNumber(props.phoneNumber);
//                 console.log(number);
//                 // for (const phoneNumber of numbers) {
//                   // try {
//                     await axios.post('http://localhost:3000/sendMessages', {
//                       location,
//                       number,
//                       message,
//                     });
//                     console.log(`Location sent successfully to ${number}.`);
                    
//                   // } catch (error) {
//                   //   console.error(`Error sending location to ${phoneNumber}:`, error);
//                   // }
//                 // }
               
//               },
//               (error) => {
//                 console.error('Error getting location:', error);
//               }
//             );
            
//           } else {
//             console.error('Geolocation is not supported.');
//           }
//         } catch (error) {
//           console.error('Error sending location:', error);
//         }
//       };
