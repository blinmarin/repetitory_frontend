import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import RegistrationPage from './Registration/RegistrationPage';
import HomePage from './Home/HomePage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<HomePage />} /> 
        <Route path='/registration' element={<RegistrationPage />} />
      </Routes>

    </BrowserRouter>


  );
}

export default App;
