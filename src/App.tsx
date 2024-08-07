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
function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Homepage />}>
          <Route index element={<Usermain />} />
          <Route path="/findcard" element={<Findcard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
// basename={process.env.PUBLIC_URL}
