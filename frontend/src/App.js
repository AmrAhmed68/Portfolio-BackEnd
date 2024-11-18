import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Admin/Login';
import { MainContent } from "./components/MainContent";    
import { Pages } from './components/pages/details'; 


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<MainContent />} /> 
      <Route path="/Login" element={<Login />} /> 
      <Route path="/details/:id" element={<Pages />} />
    </Routes>
</div>
  );
}

export default App;
