import "./App.css";
import ProjectsRoute from "./components/projects/ProjectsRoute";
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import NavigationBar from "./components/common/NavigationBar";
import SkillsRoute from "./components/skills/SkillsRoute";
import ContactRoute from "./components/contact/ContactRoute";


function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const entered = location.pathname !== "/";
  const handleEnter = () => {
    navigate("/about");
  }
  return (
    <>
      <h1 className="text-center">Main about page</h1>
      <NavigationBar />
        <Routes>
          <Route path="/" element={<ProjectsRoute />}></Route>
          <Route path="/skills" element={<SkillsRoute />}/>
          <Route path="/contact" element={<ContactRoute />}/>

        </Routes>
    </>
  );
}

export default App;

