
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Destinations from './pages/Destinations';
import Home from './pages/Home';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Register/>} />
      <Route path="/" exact  element={<Home/>} />
    </Routes>
  </Router>
  );
}

export default App;
