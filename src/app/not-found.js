"use client"
import Link from 'next/link';
import styles from './Error.module.css';

export default function Custom404() {
  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorContent}>
        <div className={styles.errorIllustration}>
          <div className={styles.spilledCoffee}></div>
          <div className={styles.brokenCup}>
            <div className={styles.crack}></div>
          </div>
        </div>
        
        <div className={styles.coffeeBeans}>
          <div className={`${styles.bean} ${styles.bean1}`}></div>
          <div className={`${styles.bean} ${styles.bean2}`}></div>
          <div className={`${styles.bean} ${styles.bean3}`}></div>
          <div className={`${styles.bean} ${styles.bean4}`}></div>
        </div>
        
        <h1 className={styles.errorCode}>404</h1>
        <h2 className={styles.errorTitle}>صفحه مورد نظر پیدا نشد!</h2>
        <p className={styles.errorDescription}>
          متأسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد. 
          ممکن است آدرس را اشتباه وارد کرده‌اید یا صفحه منتقل شده است.
        </p>
        
        <div className={styles.errorActions}>
          <Link href="/" className={styles.homeButton}>
            بازگشت به صفحه اصلی
          </Link>
          <button 
            className={styles.retryButton}
            onClick={() => window.location.reload()}
          >
            تلاش مجدد
          </button>
        </div>
      </div>
    </div>
  );
}