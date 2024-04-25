
import './App.css';
import { Routes,Route} from 'react-router-dom';
import Main from './components/Main';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Admindash from './components/Admindash';
import Mentordash from './components/Mentordash';



function App() {
  return (
    <div>
      <Routes>
      <Route path={'/'} element={<Login/>}/>
      <Route path={'/home'} element={<Main child={<Home/>}/>}/>
      <Route path={'/navbar'} element={<Main child={<Navbar/>}/>}/>
      <Route path={'/admindash'} element={<Main child={<Admindash/>}/>}/>
      <Route path={'/mentordash'} element={<Main child={<Mentordash/>}/>}/>
     
      
      </Routes>
      
    </div>
  );
}

export default App;
