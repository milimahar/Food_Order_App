import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className="footer">
  <div className="socialMedia">
     <TwitterIcon />
     <FacebookIcon/>
     <InstagramIcon />
     <LinkedInIcon />
    <p>&copy; 2023  IndianFood.com</p>
  </div>


    </div>
  )
}

export default Footer
