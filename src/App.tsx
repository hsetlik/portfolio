import "./App.css";
import "./styles/color.css";
import { Route, Routes } from 'react-router-dom';
import LandingRoute from './components/landing/LandingRoute';
import WebProjectsRoute from './components/web-projects/WebProjectsRoute';
import CppRoute from './components/cpp-projects/CppRoute';
import SkillsRoute from './components/skills/SkillsRoute';
import ContactRoute from './components/contact/ContactRoute';
import NavigationHeader from './components/common/NavigationHeader';

function App() {
  return (
    <>
      <NavigationHeader />
        <Routes>
          <Route path='/' element={<LandingRoute />} />
          <Route path='/web-projects' element={<WebProjectsRoute />} />
          <Route path='/cpp-projects' element={<CppRoute />} />
          <Route path='/skills' element={<SkillsRoute />} />
          <Route path='/contact' element={<ContactRoute />} />
        </Routes>
    </>
  );
}

export default App;


/*
 <Container style={{margin: '7em'}}>
        
    </Container>
*/
