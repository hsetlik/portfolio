import "./App.css";
import ProjectsRoute from "./components/projects/ProjectsRoute";
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';


function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const entered = location.pathname !== "/";
  const handleEnter = () => {
    navigate("/about");
  }
  return (
    <>
      <h1>Main about page</h1>
        <Routes>
          <Route path="/" element={ProjectsRoute}></Route>

        </Routes>
    </>
  );
}

export default App;

