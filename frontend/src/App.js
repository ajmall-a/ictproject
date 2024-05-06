import logo from './logo.svg';
import './App.css';
import AdminDashboard from './Admin/AdminDashboard';
import NavbarAdmin from './Admin/NavbarAdmin';
import { Route, Routes } from 'react-router-dom';
import MentorDashboard from './Mentor/MentorDashboard';
import SideBarAdmin from './Admin/SideBarAdmin';
import AddMentorForm from './Admin/AddMentorForm';
import AddProjectForm from './Admin/AddProjectForm';
import Login from './Pages/Login';
import Courses from './Pages/Courses';
import Carrers from './Pages/Carrers';
import Contact from './Pages/Contact';
import About from './Pages/About';


// import { Home } from '@mui/icons-material';
import Home from './Pages/Home';

function App() {
  return (
   

   <div>
{/* <NavbarAdmin/> */}
{/* <SideBarAdmin/>  */}
      <Routes>
      <Route path={'/'} element={<Home/>}/>
      <Route path={'/login'} element={<Login/>}/>
      <Route path='/about' element={<About/>} />
        <Route path='/courses' element={<Courses/>} />
        <Route path='/carrers' element={<Carrers />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path={'/admindashboard'} element={<AdminDashboard/>}/>
        <Route path={'/mentordashboard'} element={<MentorDashboard/>}/>
        <Route path={'/projectform'} element={<AddProjectForm method="post" data={{topic:'',description:'',image:'',mentor:''}}/>}/>
        <Route path={'/mentorform'} element={<AddMentorForm method="post" data={{name:'',email:'',phoneNumbe:'',password:'',projectTopics:['']}}/>}/>
      </Routes>
   
    </div>
  );
}

export default App;
