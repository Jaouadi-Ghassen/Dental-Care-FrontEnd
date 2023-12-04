// Card.js
import React from 'react';
import styles from './Card.module.css';

const Card = ({ title, content, imageUrl }) => {
  return (
    <>
      <div className={styles.card}>
        <img src={imageUrl} alt={title} />
        <div className={styles['card-content']}>
          <h2>{title}</h2>
          <p>{content}</p>
          <button className={styles['learn-more-btn']}>Learn More</button>
        </div>
      </div>
    </>
  );
};

export default Card;
