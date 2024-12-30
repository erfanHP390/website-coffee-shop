import React from 'react';
import styles from './TestimonialItem.module.css';

function TestimonialItem({ id, name, comment, rating, profile }) {
  return (
    <div className={styles.testimonialItem}>
      <div className="d-flex align-items-center mb-3">
        <img className={styles.profileImage} src="./images/user-profile.png" alt={`${name}'s profile`} />
        <div className="ml-3">
          <h4 className={`${styles.name} font_vazir_Medium `}>{name}</h4>
        </div>
      </div>
      <p className={`${styles.comment} font_vazir_Regular `}>{comment}</p>
      <div className={styles.rating}>
        {Array(rating).fill().map((_, i) => (
          <span key={i} className={styles.star}>&#9733;</span>
        ))}
        {Array(5 - rating).fill().map((_, i) => (
          <span key={i} className={styles.starEmpty}>&#9734;</span>
        ))}
      </div>
    </div>
  );
}

export default TestimonialItem;
