import "./App.scss";
import NavigationBar from "./components/common/NavigationBar";
import ModalContainer from "./components/projects/ModalContainer";
import SectionDiv from "./components/common/SectionDiv";

function App() {
  return (
  <>
    <ModalContainer />
    <>
    <div className="container-fluid vh-100">
      <NavigationBar />
      <div className="container-fluid ">
        <SectionDiv />
      </div>
    </div>
    </>
  </>
  );
}

export default App;

