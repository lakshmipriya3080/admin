import React from 'react';
import './Sidebar.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BadgeIcon from '@mui/icons-material/Badge';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';

const Sidebar = () => {
  return (
    <div className="sidebar">
        <ul>
        <a href='/home'><li><HomeIcon fontSize='small'/> HOME</li></a>
       </ul>
       
       <ul>
        <a href='/student'><li><AccountCircleIcon fontSize='small'/> My Profile</li></a>
        <a href='/certificate'><li><BadgeIcon fontSize='small'/> Employee Details</li></a>
        <a href="/studentview"><li><HowToRegIcon fontSize='small'/> Training</li></a>
       <a href="/certificateview"><li><PeopleAltIcon fontSize='small'/> Guest User Details</li></a>
       <a href="/certificateview"><li><WorkIcon fontSize='small'/>Recruitment</li></a>
       </ul>
       
      
      
      
      
    </div>
  );
};

export default Sidebar;