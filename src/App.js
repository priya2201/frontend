import logo from './logo.svg';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import {LoginPage} from './Routes.js'
function App() {
  return (
    <BrowserRouter>
    <Routes>
<Route path='/login' element={<LoginPage/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
