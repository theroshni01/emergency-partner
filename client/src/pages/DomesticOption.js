import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNumbers } from "../Context/number";
import { Messages } from "./Message";

export const DomesticOption = () => {
  const [specializations, setSpecializations] = useState([]);
  const [numbers,setNumbers]=useNumbers([]); 

  useEffect(() => {
    fetchSpecializations();
  }, []);

  const fetchSpecializations = async () => {
    try {
      const response = await axios.get('http://localhost:3000/domesticOption');
      setSpecializations(response.data);
    } catch (error) {
      console.error('Error fetching specializations:', error);
    }
  };

  const getPhoneNumbers = async (spec) => {
    try {
      const response = await axios.get(`http://localhost:3000/getPhoneNumbers/${spec}`);
      // <ShareLocation phoneNumber = {response.data}/>
      console.log("RESPONCE: "+ response.data);
      setNumbers(response.data); // Contains the phone numbers for the specialization
       
    } catch (error) {
      console.error('Error fetching phone numbers:', error);
    }
  };

  return (
    <div>
      <h1>Choose a Types of Specialization</h1>
      <div>
        {specializations.map((spec, index) => (
          <div key={index}>
            <Link to="/Messages"
            element={<Messages/>} key={index}>
            <Card style={{ margin: '10px', width: '300px' }}>
              <Card.Body>
                  <Card.Text className="spec" value={specializations} onClick={() => getPhoneNumbers(spec)}>
                    {spec}
                  </Card.Text>
              </Card.Body>
            </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DomesticOption;
