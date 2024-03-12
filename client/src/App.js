import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar";
import DomesticOption from "./pages/DomesticOption";
import { Helper } from "./pages/HelperLogin";
import { Messages } from "./pages/Message";
import { User } from "./pages/UserLogin";
import { Admin } from "./pages/admin";
import { Auth } from "./pages/auth";
import { FireService } from "./pages/fireService";
import { PoliceService } from "./pages/policeService";
import { MedicalService } from "./pages/medicalService";
import { Home } from "./pages/home";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/Helper" element={<Helper/>} />
          <Route path="/User" element={<User/>} />
          <Route path="/domesticOption" element={<DomesticOption/>}/>
          <Route path="/Messages" element={<Messages/>}/>
          <Route path="/fireEmergency" element={<FireService/>}/>
          <Route path="/policeEmergency" element={<PoliceService />}/>
          <Route path="/medicalEmergency" element={<MedicalService />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
