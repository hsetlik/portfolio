import "./App.scss";
import ProjectsRoute from "./components/projects/ProjectsRoute";
import { Route, Routes } from 'react-router-dom';
import NavigationBar from "./components/common/NavigationBar";
import SkillsRoute from "./components/skills/SkillsRoute";
import ContactRoute from "./components/contact/ContactRoute";
import ModalContainer from "./components/projects/ModalContainer";


function App() {
  
  return (
  <>
    <ModalContainer />
    <>
    <div className="container-fluid vh-100">
      <NavigationBar />
      <div className="container-fluid ">
        <Routes >
          <Route path="/" element={<ProjectsRoute />}></Route>
          <Route path="skills" element={<SkillsRoute />}/>
          <Route path="contact" element={<ContactRoute />}/>
        </Routes>
      </div>
    </div>
    </>
  </>
  );
}

export default App;

