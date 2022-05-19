import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Addcourse from './Component/Addcourse';
import Header from './Component/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Viewcourse from './Component/Viewcourse';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Addcourse/>}/>
       <Route path='/' exact element={<Viewcourse/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
