"use client"
import { useEffect, useState } from 'react';
import styles from './loading.module.css';

export default function Loading() {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
          }, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingContent}>
        <div className={styles.coffeeCup}>
          <div className={styles.steam + ' ' + styles.steam1}></div>
          <div className={styles.steam + ' ' + styles.steam2}></div>
          <div className={styles.steam + ' ' + styles.steam3}></div>
          <div className={styles.cup}></div>
          <div className={styles.handle}></div>
        </div>
        
        <div className={styles.loadingText}>در حال آماده‌سازی قهوه شما...</div>
        
        <div className={styles.progressBar}>
          <div 
            className={styles.progress} 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <div className={styles.welcomeText}>به کافی شاپ ما خوش آمدید</div>
      </div>
    </div>
  );
}