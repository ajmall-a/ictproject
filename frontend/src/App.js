import logo from './logo.svg';
import './App.css';
import AdminDashboard from './components/AdminDashboard';
import NavbarAdmin from './components/NavbarAdmin';
import { Route, Routes } from 'react-router-dom';

import SideBarAdmin from './components/SideBarAdmin';
import AddMentorForm from './components/AddMentorForm';
import AddProjectForm from './components/AddProjectForm';
// import HomePage from './components/HomePage'
import Login from './components/Login';
import Mentordash from './components/Mentordash';

function App() {
  return (
   

   <div>
{/* <NavbarAdmin/> */}
{/* <SideBarAdmin/>  */}
      <Routes>
      {/* <Route path={'/'} element={<HomePage/>}/> */}
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
