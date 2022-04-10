import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import LogIn from './Components/LogIn/LogIn';
import Navbar from './Components/Navbar/Navbar';
import Register from './Components/Register/Register';
import RequireAuth from './Components/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<LogIn></LogIn>} ></Route>
        <Route path='/home' element={<RequireAuth>
          <Home></Home>
        </RequireAuth>} ></Route>
        <Route path='/register' element={<Register></Register>} ></Route>
        <Route path='/about' element={<RequireAuth><About></About></RequireAuth>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
