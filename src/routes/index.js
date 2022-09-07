import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Missions from "../components/Missions/Missions";
import Rocket from "../components/Rocket/Rocket";

const Routing = () => (
  <Router>
    <div className='general'>
      <Routes>
        <Route path='/' element={<Missions />} />

        <Route path='/rocket/:id' element={<Rocket />} />
      </Routes>
    </div>
  </Router>
);

export default Routing;
