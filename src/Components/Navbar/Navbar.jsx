// Navbar.js
import React, { useState } from "react";
import styles from './Navbar.module.css'
import logo from '../../Assets/Images/logo3.png'

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbarBrand}>
          <div className={styles.logo}>
            <div className={styles.round}></div>
            <img src={logo} alt="" className={styles.image} />
          </div>
        </div>
        <div className={isMenuOpen ? `${styles.navItems} ${styles.active}` : styles.navItems}>
          <a href="/">Home</a>
          <a href="/About">A propos</a>
          <a href="/Clinics">Clinics</a>
          <a href="/Service">Service</a>
          {/* Adding a dropdown subnav */}
          {/* <div className={styles.dropdown}>
          <button className={styles.dropbtn}>Services</button>
          <div className={styles.dropdownContent}>
            <a href="/services/service1">Service 1</a>
            <a href="/services/service2">Service 2</a>
            <a href="/services/service3">Service 3</a>
          </div>
        </div> */}
          <a href="/contact">Contact</a>
        </div>
        <div className={styles.menuIcon} onClick={toggleMenu}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
        <div className={styles.ClientSpace}>
          <a href="/Login">Espace Client</a>
        </div>
      </nav>
    </>
  )
}
