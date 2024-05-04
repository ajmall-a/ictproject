
import './App.css';
import { Routes,Route} from 'react-router-dom';
import Main from './components/Main';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Mentordash from './components/Mentordash';
import { AddMentorForm } from './components/AddMentorForm';
import AdminDashboard from './components/AdminDashboard';



function App() {
  return (
    <div>
      <Routes>
      <Route path={'/'} element={<Login/>}/>
      {/* <Route path={'/home'} element={<Main child={<Home/>}/>}/>
      <Route path={'/navbar'} element={<Main child={<Navbar/>}/>}/> */}
      <Route path={'/admindashboard'} element={<Main child={<AdminDashboard/>}/>}/>
      <Route path={'/mentorform'} element={<Main child={<AddMentorForm/>}/>}/>
      
      {/* <Route path={'/mentordash'} element={<Main child={<Mentordash/>}/>}/> */}
     
      
      </Routes>
      
    </div>
  )
}

export default App
