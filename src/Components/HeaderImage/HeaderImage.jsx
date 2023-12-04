import React from 'react'
import style from './HeaderImage.module.css'

export const HeaderImage = ({Image,header,content}) => {
  return (
    <div className={style.image_container}>
      <img src={Image} alt="" className={style.image1} />
      <div className={style.overlay}>
        <h2 className={style.image_text}>{header}</h2>
        <p>{content}</p>
      </div>
    </div>
  )
}

