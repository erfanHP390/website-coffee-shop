import React from 'react';
import styles from './TestimonialItem.module.css';

function TestimonialItem({ id, name, comment, rating, profile }) {
  // لاگ کردن مقدار rating
  console.log('Rating:', rating);

  // اگر rating عدد نباشد یا مقدار معتبر نداشته باشد، به مقدار 0 یا 1 تغییر می‌دهیم
  const validRating = typeof rating === 'number' && !isNaN(rating) ? Math.min(Math.max(rating, 0), 5) : 0;

  return (
    <div className={styles.testimonialItem}>
      <div className="d-flex align-items-center mb-3">
        <img className={styles.profileImage} src={profile} alt={`${name}'s profile`} />
        <div className="ml-3">
          <h4 className={`${styles.name} font_vazir_Medium `}>{name}</h4>
        </div>
      </div>
      <p className={`${styles.comment} font_vazir_Regular `}>{comment}</p>
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
