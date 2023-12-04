import React from 'react'
// import footerS from './Footer.module.css'
import styles from './Footer.module.css'
import { Facebook, Twitter, Instagram } from '@mui/icons-material';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import TwitterIcon from '@mui/icons-material/Twitter';

export const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
      <hr/>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            {/* Your logo or any content for the logo */}
            <span>Logo</span>
          </div>
          <div className={styles.footerLinks}>
            {/* Add your footer links here */}
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
          <div className={styles.footerContact}>
            {/* Add contact information */}
            <span>Email: contact@example.com</span>
            <span>Phone: +1 234-567-8900</span>
          </div>
        </div>
        <div className={styles.footerSocial}>
          {/* Use Material-UI icons for social media */}
          <a
            href="https://www.facebook.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook fontSize="large" />
          </a>
          <a
            href="https://www.twitter.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter fontSize="large" />
          </a>
          <a
            href="https://www.instagram.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram fontSize="large" />
          </a>
        </div>
        {/* <hr/> */}
        <div className={styles.footerBottom}>
          <span>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</span>
        </div>
      </footer>
    </>
  )
}
