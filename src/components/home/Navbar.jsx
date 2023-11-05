import React, { useState } from 'react'
import "./Navbar.css"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
// import CloseIcon from '@mui/icons-material/Close';

function Navbar(props) {

  const [navbar, setNavbar] = useState(false);

  const navigate = useNavigate();

  const toggleNavbar = () => {
    // console.log("clicked")
    setNavbar(!navbar);
  }

  const sendToHome = () => {
    const element = document.getElementById('home');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if(navbar)
    setNavbar(!navbar);
  };
  const sendToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if(navbar)
    setNavbar(!navbar);
   
  };
  const sendToProgram = () => {
    const element = document.getElementById('program');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if(navbar)
    setNavbar(!navbar);
   
  };
  const sendToTherepist = () => {
    navigate("/therepist");
    if(navbar)
    setNavbar(!navbar);
   
  };
  const sendToPatient = () => {
    navigate("/patient");
    if(navbar)
    setNavbar(!navbar);
   
  };


 
  
  

  return (
    <nav className='home-nav'>
    <img className='logo-img' src={require("../../assets/logo.png")} alt='logo'/>
      <div className='hamburger'>
        {navbar ?<p></p>: <MenuIcon   style={{fill:"#fff", fontSize:"200%"}} onClick={toggleNavbar} />}
      </div>
      <ul id="nav-bar" className={navbar ? 'active' : 'act'} >
      {navbar && <CloseIcon className='close-icon' style={{fill:"#fff", fontSize:"300%"}} onClick={toggleNavbar} /> }
       <li>
          <p  onClick={sendToHome}>Home</p>
        </li>
        <li>
          <p  onClick={sendToAbout}>About</p>
        </li>
        <li>
          <p  onClick={sendToProgram}>Program Structure</p>
        </li>
        <li className='dropdown'>
        <button  className='talk-btn btn'>Register / Login</button>
          <div className="dropdown-content">
            <h5 onClick={sendToPatient}>Patient</h5>
            <h5 onClick={sendToTherepist}>Therepist</h5>
          </div>
        </li>
       
      </ul>
    </nav>
  )
}

export default Navbar
