import "./App.css";
import "./styles/color.css";
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import AboutRoute from './components/about/AboutRoute';
import WebProjectsRoute from './components/web-projects/WebProjectsRoute';
import CppRoute from './components/cpp-projects/CppRoute';
import SkillsRoute from './components/skills/SkillsRoute';
import ContactRoute from './components/contact/ContactRoute';
import NavigationHeader from './components/common/NavigationHeader';
import { useState } from "react";
import LandingPage from "./components/landing/LandingRoute";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const entered = location.pathname !== "/";
  const handleEnter = () => {
    navigate("/about");
  }
  return (
    <>
        {entered && <NavigationHeader />}
        <Routes>
          <Route path='/' element={<LandingPage handleEnter={handleEnter} />} />
          <Route path='/about' element={<AboutRoute />} />
          <Route path='/web-projects' element={<WebProjectsRoute />} />
          <Route path='/cpp-projects' element={<CppRoute />} />
          <Route path='/skills' element={<SkillsRoute />} />
          <Route path='/contact' element={<ContactRoute />} />
        </Routes>
    </>
  );
}

export default App;

