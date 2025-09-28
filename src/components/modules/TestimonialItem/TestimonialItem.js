import React from 'react';
import styles from './TestimonialItem.module.css';

function TestimonialItem({ _id , username , email , score , content }) {


  const validRating = typeof score === 'number' && !isNaN(score) ? Math.min(Math.max(score, 0), 5) : 0;

  return (
    <div className={styles.testimonialItem}>
      <div className="d-flex align-items-center mb-3">
        <img className={styles.profileImage} src={"/images/user-profile.png"} alt={`${username}'s profile`} />
        <div className="ml-3">
          <h4 className={`${styles.name} font_vazir_Medium `}>{username}</h4>
        </div>
      </div>
      <p className={`${styles.comment} font_vazir_Regular `}>{content}</p>
      <div className={styles.rating}>
        {Array(validRating).fill().map((_, i) => (
          <span key={i} className={styles.star}>&#9733;</span>
        ))}
        {Array(5 - validRating).fill().map((_, i) => (
          <span key={i} className={styles.starEmpty}>&#9734;</span>
        ))}
      </div>
    </div>
  );
}

export default TestimonialItem;
