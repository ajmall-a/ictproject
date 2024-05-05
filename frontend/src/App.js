import logo from './logo.svg';
import './App.css';
import AdminDashboard from './components/AdminDashboard';
import NavbarAdmin from './components/NavbarAdmin';
import { Route, Routes } from 'react-router-dom';

import SideBarAdmin from './components/SideBarAdmin';
import AddMentorForm from './components/AddMentorForm';
import AddProjectForm from './components/AddProjectForm';
import Login from './components/Login';
import Mentordash from './components/Mentordash';
import { Home } from '@mui/icons-material';
import Home from './Pages/Home';

function App() {
  return (
   

   <div>
{/* <NavbarAdmin/> */}
{/* <SideBarAdmin/>  */}
      <Routes>
      <Route path={'/Home'} element={<Home/>}/>
      <Route path={'/login'} element={<Login/>}/>
        <Route path={'/admindashboard'} element={<AdminDashboard/>}/>
        <Route path={'/mentordashboard'} element={<Mentordash/>}/>
        <Route path={'/projectform'} element={<AddProjectForm method="post" data={{topic:'',description:'',image:'',mentor:''}}/>}/>
        <Route path={'/mentorform'} element={<AddMentorForm method="post" data={{name:'',email:'',phoneNumbe:'',password:'',projectTopics:['']}}/>}/>
      </Routes>
   
    </div>
  );
}

export default App;
