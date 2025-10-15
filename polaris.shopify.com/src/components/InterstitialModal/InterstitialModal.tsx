import React, {useEffect, useState} from 'react';
import styles from './InterstitialModal.module.scss';
import Button from '../Button';

const WEB_COMPONENTS_URL = 'https://polaris.shopify.com'; // Update this to the actual web components URL

// Generate stars with random positions and sizes
const stars = Array.from({length: 50}, (_, i) => ({
  id: i,
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  size: Math.random() * 3 + 1, // 1-4px
  delay: Math.random() * 3, // 0-3s delay
  duration: Math.random() * 2 + 2, // 2-4s duration
}));

export default function InterstitialModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show the interstitial on every page load/reload
    // Small delay to ensure smooth page load
    setTimeout(() => {
      setIsOpen(true);
    }, 500);
  }, []);

  const handleDismiss = () => {
    setIsOpen(false);
  };

  const handleRedirect = () => {
    window.location.href = WEB_COMPONENTS_URL;
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.Overlay}>
      {stars.map((star) => (
        <div
          key={star.id}
          className={styles.Star}
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
      <div className={styles.Modal}>
        <div className={styles.Content}>
          <h1 className={styles.Title}>
            We&apos;re sunsetting Polaris Design System for React
          </h1>
          <p className={styles.Description}>
            Built on web components, Polaris now works with React, Vue, vanilla
            JavaScript, or no framework at all.
          </p>
          <div className={styles.Actions}>
            <Button
              primary
              onClick={handleRedirect}
              className={styles.PrimaryButton}
            >
              Go to Polaris Web Components
            </Button>
            <button onClick={handleDismiss} className={styles.SecondaryLink}>
              Continue to Polaris React
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
