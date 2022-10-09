import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ColorPickerComponent from './ColorPickerComponent'
import Navbar from './Navbar';


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <ColorPickerComponent />
    </div>
  )
}

export default App;
