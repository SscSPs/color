import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ColorPickerComponent from "./ColorPickerComponent";
import Navbar from "./Navbar";
import VisitGithub from "./VisitGithub";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
const App = () => {
  return (
    <div className="App">
      <VisitGithub />
      <Navbar />
      <ToastContainer />
      <ColorPickerComponent />
    </div>
  );
};

export default App;
