import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import LogIn from './Components/LogIn/LogIn';
import Register from './Components/Register/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LogIn></LogIn>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/register' element={<Register></Register>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
