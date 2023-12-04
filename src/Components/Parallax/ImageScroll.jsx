import React from 'react'
import styles from './Parallax.module.css'
import bg1 from '../../Assets/Images/jj.jpg'
// import bg2 from '../../Assets/Images/bg2.jpg'
import { Parallax } from 'react-parallax'


export const ImageScroll = () => {
  return (
    <div>
      <Parallax strength={400} blur={1} bgImage={bg1}>
        <div className={styles.content}>
          <div className={styles.info}>
            <div className={styles.backgroundColor}></div>
          </div>  
        </div>
      </Parallax>
    </div>
  )
}

