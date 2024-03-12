const express = require('express');
const cors = require('cors');
const Helper = require('./Model/Helper');
const User = require('./Model/User');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const userRouter = require("./route/user");
const location = require("./route/Location");
const Admin =require("./route/admin");
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use("/auth",userRouter);
app.use("/admin",Admin);

mongoose.connect("mongodb://127.0.0.1:27017/Sahayak1", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected successfully');

})
  //User Registration

  app.post('/user', async (req, res) => {
    try {
        const user = new User(req.body);
        const result = await user.save();
        res.status(201).json(result); // Indicate successful creation with status code 201
    } catch (err) {
        console.error('Error saving user:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
  });

   //helper Registration

  app.post('/helper', async (req, res) => {
    try {
        const helper = new Helper(req.body);
        const result = await helper.save();
        res.status(201).json(result); // Indicate successful creation with status code 201
    } catch (err) {
        console.error('Error saving helper:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  app.get('/domesticOption', async (req, res) => {
    try {
      const specializations = await Helper.distinct('specialization');
      // console.log(specializations);
      res.json(specializations);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  app.get('/getPhoneNumbers/:specialization', async (req, res) => {
    const { specialization } = req.params;
    try {
      const phoneNumbers = await Helper.find({specialization}).distinct('phone_no');
      console.log("NUMBER: "+ phoneNumbers);
      res.json(phoneNumbers);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  app.post('/sendMessages', async (req, res) => {
    const { location, phoneNumber, message, userEmail } = req.body;
    console.log("got number: "+ phoneNumber);
    console.log("got email: "+ userEmail);
  
    try {
      // Iterate through phoneNumbers and send location to each number
      await sendLocationToPhoneNumber(location, phoneNumber, message, userEmail);
  
      res.status(200).send('Location sent successfully to all phone numbers.');
    } catch (error) {
      console.error('Error sending location:', error);
      res.status(500).send('Failed to send location to phone numbers.');
    }
  });
  
 // Use distinct function names for each service
  async function sendLocationToPhoneNumber(location, phoneNumber, message, userEmail) {
    try {

    const user = await User.findOne({email : userEmail });
    // console.log("User: "+ user)
        // Access twilio_no from the user object
        const TWILIO_User_Number = user.twilio_no;
        const TWILIO_AUTH_TOKEN  = user.twilio_auth_token;
        const TWILIO_ACCOUNT_SID = user.twilio_sid;


        const helper =await Helper.findOne({ phone_no: phoneNumber });
        // console.log("Helper: "+ helper)
        const TWILIO_Helper_Number = helper.twilio_no;
  
      const twilio = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
  
      await twilio.messages.create({
        body: `${message}\nLocation= ${location}`,
        from: `${TWILIO_User_Number}`,
        to: `${TWILIO_Helper_Number}`,
      });
  
      console.log(`Location sent to ${phoneNumber} successfully.`);
    } catch (error) {
      console.error(`Error sending location to ${phoneNumber}:`, error);
      throw error; // Handle or log the error as needed
    }
  }

  //MedicalService

  app.post('/medicalEmergency', async (req, res) => {
    const { location } = req.body;
    // try {
   const help = await Helper.find({specialization:"Medical"});
   const phoneNumber = help.phone_no;
      console.log(phoneNumber);
     
    try {
    
          await sendLocationToMedicalNumber(location, phoneNumber, userEmail);
  
          res.status(200).send('Location sent successfully to all phone numbers.');
    } catch (error) {
      console.error('Error sending location:', error);
      res.status(500).send('Failed to send location to phone numbers.');
    }
  });


  async function sendLocationToMedicalNumber(location, phoneNumber, userEmail) {
    try {
      const user = await User.findOne({email : userEmail });
    // console.log("User: "+ user)
        // Access twilio_no from the user object
        const TWILIO_User_Number = user.twilio_no;
        const TWILIO_AUTH_TOKEN  = user.twilio_auth_token;
        const TWILIO_ACCOUNT_SID = user.twilio_sid;


        const helper =await Helper.findOne({ phone_no: phoneNumber });
        // console.log("Helper: "+ helper)
        const TWILIO_Helper_Number = helper.twilio_no;
  
      const twilio = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
  
      await twilio.messages.create({
        body: `Medical Emergency needed... \nLocation= ${location}`,
        from: `${TWILIO_User_Number}`,
        to: `${TWILIO_Helper_Number}`,
      });
  
      console.log(`Location sent to ${phoneNumber} successfully.`);
    } catch (error) {
      console.error(`Error sending location to ${phoneNumber}:`, error);
      throw error; // Handle or log the error as needed
    }
  }

  //FireService
  app.post('/fireEmergency', async (req, res) => {
    const { location } = req.body;
    // try {
      const helper = await Helper.find({specialization:"fire Service"});
      const phoneNumber = helper.phone_no;

      console.log(phoneNumber);
     
    try {
    
          await sendLocationToFireNumber(location, phoneNumber, userEmail);
  
          res.status(200).send('Location sent successfully to all phone numbers.');
    } catch (error) {
      console.error('Error sending location:', error);
      res.status(500).send('Failed to send location to phone numbers.');
    }
  });


  async function sendLocationToFireNumber(location, phoneNumber, userEmail) {
    try {
      const user = await User.findOne({email : userEmail });
    // console.log("User: "+ user)
        // Access twilio_no from the user object
        const TWILIO_User_Number = user.twilio_no;
        const TWILIO_AUTH_TOKEN  = user.twilio_auth_token;
        const TWILIO_ACCOUNT_SID = user.twilio_sid;


        const helper =await Helper.findOne({ phone_no: phoneNumber });
        // console.log("Helper: "+ helper)
        const TWILIO_Helper_Number = helper.twilio_no;
  
      const twilio = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
  
      await twilio.messages.create({
        body: `Fire Emergency needed... \nLocation= ${location}`,
        from: `${TWILIO_User_Number}`,
        to: `${TWILIO_Helper_Number}`,
      });
  
      console.log(`Location sent to ${phoneNumber} successfully.`);
    } catch (error) {
      console.error(`Error sending location to ${phoneNumber}:`, error);
      throw error; // Handle or log the error as needed
    }
  }

  //PoliceService
  app.post('/policeEmergency', async (req, res) => {
    const { location } = req.body;
    // try {
      const phoneNumber = await Helper.find({specialization:"policeService"}).distinct('phone_no');
      console.log(phoneNumber);
     
    try {
    
          await sendLocationToPoliceNumber(location, phoneNumber, userEmail);
  
          res.status(200).send('Location sent successfully to all phone numbers.');
    } catch (error) {
      console.error('Error sending location:', error);
      res.status(500).send('Failed to send location to phone numbers.');
    }
  });


  async function sendLocationToPoliceNumber(location, phoneNumber, userEmail) {
    try {
      const user = await User.findOne({email : userEmail });
    // console.log("User: "+ user)
        // Access twilio_no from the user object
        const TWILIO_User_Number = user.twilio_no;
        const TWILIO_AUTH_TOKEN  = user.twilio_auth_token;
        const TWILIO_ACCOUNT_SID = user.twilio_sid;


        const helper =await Helper.findOne({ phone_no: phoneNumber });
        // console.log("Helper: "+ helper)
        const TWILIO_Helper_Number = helper.twilio_no;
  
      const twilio = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
  
      await twilio.messages.create({
        body: `Police Emergency needed... \nLocation= ${location}`,
        from: `${TWILIO_User_Number}`,
        to: `${TWILIO_Helper_Number}`,
      });
  
      console.log(`Location sent to ${phoneNumber} successfully.`);
    } catch (error) {
      console.error(`Error sending location to ${phoneNumber}:`, error);
      throw error; // Handle or log the error as needed
    }
  }
 

  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });



