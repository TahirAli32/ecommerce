import React from 'react'
import styles from '../styles/Footer.module.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedinIcon from '@mui/icons-material/Linkedin'
import YoutubeIcon from '@mui/icons-material/Youtube'
import RoomIcon from '@mui/icons-material/Room';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.top}>
            <h3>Company Name Here</h3>
            <ul className={styles.socialLogo}>
                <li><FacebookIcon /></li>
                <li><TwitterIcon /></li>
                <li><LinkedinIcon /></li>
                <li><InstagramIcon /></li>
                <li><YoutubeIcon /></li>
            </ul>
        </div>
        <div className={styles.bottom}>
          <div className={styles.about}>
            <h4>About</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium optio rem reiciendis numquam aliquid. Consectetur eius debitis delectus? Nostrum, facere!
            </p>
          </div>
          <div className={styles.menus}>
            <h4>Menus</h4>
            <ul>
              <li><ArrowForwardIosIcon /><a href="#">Home</a></li>
              <li><ArrowForwardIosIcon /><a href="#">About</a></li>
              <li><ArrowForwardIosIcon /><a href="#">Services</a></li>
              <li><ArrowForwardIosIcon /><a href="#">Pricing</a></li>
              <li><ArrowForwardIosIcon /><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className={styles.usefulLinks}>
            <h4>Useful Links</h4>
            <ul>
              <li><ArrowForwardIosIcon /><a href="#">Link 1</a></li>
              <li><ArrowForwardIosIcon /><a href="#">Link 2</a></li>
              <li><ArrowForwardIosIcon /><a href="#">Link 3</a></li>
              <li><ArrowForwardIosIcon /><a href="#">Link 4</a></li>
              <li><ArrowForwardIosIcon /><a href="#">Link 5</a></li>
            </ul>
          </div>
          <div className={styles.contact}>
            <h4>Contact Us</h4>
            <ul>
              <li><RoomIcon /><span>Lorem ipsum dolor sit amet consectetur.</span></li>
              <li><LocalPhoneIcon /><span>+92 123 4567891</span></li>
              <li><EmailIcon /><span>example@shopdomainhere.com</span></li>
            </ul>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>Copyright 2022 - All Right Reserved </p>
        </div>
    </div>
  )
}

export default Footer