import "./App.css";
import "./styles/color.css";
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import AboutRoute from './components/about/AboutRoute';
import SkillsRoute from './components/skills/SkillsRoute';
import ContactRoute from './components/contact/ContactRoute';
import NavigationHeader from './components/common/NavigationHeader';
import LandingPage from "./components/landing/LandingRoute";
import ProjectsRoute from "./components/projects/ProjectsRoute";

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
          <Route path='/projects' element={<ProjectsRoute />} />
          <Route path='/skills' element={<SkillsRoute />} />
          <Route path='/contact' element={<ContactRoute />} />
        </Routes>
    </>
  );
}

export default App;

