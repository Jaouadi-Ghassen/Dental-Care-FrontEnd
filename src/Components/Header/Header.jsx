import React from 'react'
import styles from './Header.module.css'
import headerVideo from '../../Assets/Videos/Dental.mp4'

export const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <video src={headerVideo} 
         className={styles.video}
         autoPlay loop muted/>
        <div className={styles.overlay}>
          <h1>DentalCare</h1>
          <h2>Soins dentaires en Tunisie au meilleur prix</h2>
        </div>
      </div>
    </>
  )
}
