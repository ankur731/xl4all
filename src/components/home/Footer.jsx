import React from 'react'
import "./Footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';


function Footer() {

    // const navigate = useNavigate();
    const sendToHome = () => {
      const element = document.getElementById('home');
      if (element) {
        // 👇 Will scroll smoothly to the top of the next section
        element.scrollIntoView({ behavior: 'smooth' });
      }
     
    };
    const sendToAbout = () => {
      const element = document.getElementById('about');
      if (element) {
        // 👇 Will scroll smoothly to the top of the next section
        element.scrollIntoView({ behavior: 'smooth' });
      }
     
    };

    const sendToProgram = () => {
      const element = document.getElementById('program');
      if (element) {
        // 👇 Will scroll smoothly to the top of the next section
        element.scrollIntoView({ behavior: 'smooth' });
      }
     
    };
   

    return (  <>
  
  <footer
          className="text-center text-lg-start text-white"
          style={{backgroundColor:"#11112b"}}
  
          >
   
  
    <section className="">
      <div className="container py-4 text-center text-md-start ">
        <div className="row mt-3">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h3 className="text-uppercase fw-bold">CODEIFY IT SERVICES PVT LTD</h3>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width:"60px", backgroundColor:"#38b6ff", height:"2px"}}
                />
            <p>
            Ensure high quality services to empower each and every individual by bringing out their innate ability to speak and communicate by providing the right stimulus at the right time without any geographical constraints.
            </p>
          </div>
  
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h4 className="text-uppercase fw-bold">Links</h4>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width:"60px", backgroundColor:"#38b6ff", height:"2px"}}
                />
            <p className='links' onClick={sendToHome}> Home</p>
            <p className='links' onClick={sendToAbout}>About</p>
            <p className='links' onClick={sendToProgram}>Program</p>
            {/* <p className='links'>Let's Talk</p> */}
          </div>
  
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
          <h4 className="text-uppercase fw-bold">LINKS</h4>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width:"60px", backgroundColor:"#38b6ff", height:"2px"}}
                />
            <p className='links'>Terms & Condition </p>
            <p className='links'>Privacy Policy </p>
           
          </div>
  
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h4 className="text-uppercase fw-bold">Contact</h4>
  
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width:"60px", backgroundColor:"#38b6ff",height:"2px"}}
                />
            {/* <p> <LocationOnIcon fontSize='large'/> &Work Coworking Plot No. 5B, Sector 15A Neelam Chowk Ajronda Metro Near Crown Plaza, Faridabad, Haryana 121007</p> */}
            <p> <EmailIcon fontSize='large' /> Info@codeify.co.in</p>
            <p> <LocalPhoneIcon fontSize='large' /> +91 9717570933</p>
            <p> <LocalPhoneIcon fontSize='large' /> +91 7982288933</p>
          </div>
        </div>
      </div>
    </section>
  
    <div
         className="text-center p-3"
         style={{backgroundColor:"rgba(0, 0, 0, 0.2)"}}
         >
     <p> © 2023 Copyright : XL4ALL</p>
    </div>
  </footer>
  
  </>
    )
}

export default Footer
