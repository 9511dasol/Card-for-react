import React from "react";
import "./App.css";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Homepage from "./components/Homepage";
import Usermain from "./components/userPage/Usermain";
import Findcard from "./components/userPage/Findcard";
import Recommand from "./components/userPage/Recommand";
import Faq from "./components/userPage/Faq";
import Famouscard from "./components/userPage/Famouscard";
import Contact from "./components/managerPage/Contact";
import Mfaq from "./components/managerPage/Mfaq";
import Main from "./components/managerPage/Main";
function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Homepage />}>
        {/* 유저 모드 */}
          <Route index element={<Usermain />} />
          <Route path="/findcard" element={<Findcard />} />
          <Route path="/recommnad" element={<Recommand />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/famouscard" element={<Famouscard />} />
          {/* 관리잠 모드 */}
          <Route path="/recommnad" element={<Main />} />
          <Route path="/recommnad" element={<Contact />} />
          <Route path="/recommnad" element={<Mfaq />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
// basename={process.env.PUBLIC_URL}
