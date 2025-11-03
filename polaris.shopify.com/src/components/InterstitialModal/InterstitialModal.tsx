import React, {useEffect, useState, useCallback} from 'react';
import styles from './InterstitialModal.module.scss';
import Button from '../Button';

const WEB_COMPONENTS_URL =
  'https://shopify.dev/docs/api/app-home/polaris-web-components';

const STORAGE_KEY = 'polaris-migration-modal-shown';

interface ShootingStar {
  id: number;
  x: number;
  y: number;
  speed: number;
  distance: number;
  trailLength: number;
}

function ShootingStarsBackground() {
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);
  const gradientId = React.useId().replace(/:/g, '-');

  useEffect(() => {
    // SSR safety check
    if (typeof window === 'undefined') return;

    let timeoutId: NodeJS.Timeout;
    let isActive = true;

    const createStar = () => {
      if (!isActive) return;

      // Random X position across the bottom half of screen
      const x = Math.random() * window.innerWidth;
      const y = window.innerHeight * (0.5 + Math.random() * 0.5); // Bottom half

      const newStar: ShootingStar = {
        id: Date.now() + Math.random(),
        x,
        y,
        speed: Math.random() * 3 + 2, // 2-5 speed
        distance: 0,
        trailLength: Math.random() * 60 + 40, // 40-100px trail
      };

      setShootingStars((prev) => [...prev, newStar]);

      // Schedule next star
      const delay = Math.random() * 2000 + 1500; // 1.5-3.5s
      timeoutId = setTimeout(createStar, delay);
    };

    createStar();

    return () => {
      isActive = false;
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    // SSR safety check
    if (typeof window === 'undefined') return;

    let animationFrameId: number;

    const animate = () => {
      setShootingStars((prevStars) =>
        prevStars
          .map((star) => {
            const angle = -70; // Steep upward angle
            const newX =
              star.x + star.speed * Math.cos((angle * Math.PI) / 180);
            const newY =
              star.y + star.speed * Math.sin((angle * Math.PI) / 180);
            const newDistance = star.distance + star.speed;

            // Remove if out of bounds
            if (newY < -100 || newX < -100 || newX > window.innerWidth + 100) {
              return null;
            }

            return {
              ...star,
              x: newX,
              y: newY,
              distance: newDistance,
            };
          })
          .filter((star): star is ShootingStar => star !== null),
      );

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <svg className={styles.ShootingStarsSvg}>
      <defs>
        <linearGradient
          id={`shootingStarGradient-${gradientId}`}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
          <stop offset="100%" stopColor="rgba(255, 255, 255, 0.95)" />
        </linearGradient>
      </defs>
      {shootingStars.map((star) => {
        const width = Math.min(
          star.trailLength + star.distance / 3,
          star.trailLength * 1.5,
        );
        const opacity = Math.max(0, 1 - star.distance / 120);
        const blur = Math.min(star.distance / 100, 1);

        return (
          <rect
            key={star.id}
            x={star.x}
            y={star.y}
            width={width}
            height={0.8}
            fill={`url(#shootingStarGradient-${gradientId})`}
            transform={`rotate(-70, ${star.x}, ${star.y})`}
            opacity={opacity}
            style={{filter: `blur(${blur}px)`}}
          />
        );
      })}
    </svg>
  );
}

const PolarisStarIcon = React.memo(() => (
  <svg
    width="120"
    height="120"
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M71.5722 38.6116C72.4275 43.6363 76.3637 47.5725 81.3884 48.4278L115.071 54.161C117.918 54.6455 120 57.1123 120 60C120 62.8877 117.918 65.3544 115.071 65.839L81.3884 71.5722C76.3637 72.4275 72.4275 76.3637 71.5722 81.3884L65.839 115.071C65.3544 117.918 62.8877 120 60 120C57.1123 120 54.6455 117.918 54.161 115.071L48.4278 81.3884C47.5725 76.3637 43.6363 72.4275 38.6116 71.5722L4.9291 65.839C2.08238 65.3544 0 62.8877 0 60C0 57.1123 2.08239 54.6455 4.92911 54.161L38.6116 48.4278C43.6363 47.5725 47.5725 43.6363 48.4278 38.6116L54.161 4.9291C54.6455 2.08238 57.1123 0 60 0C62.8877 0 65.3544 2.08239 65.839 4.92911L71.5722 38.6116Z"
      fill="white"
    />
  </svg>
));

PolarisStarIcon.displayName = 'PolarisStarIcon';

const Polaris12Icon = React.memo(() => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17ZM10 17C10 13.134 13.134 10 17 10C13.134 10 10 6.86599 10 3C10 6.86599 6.86599 10 3 10C6.86599 10 10 13.134 10 17Z"
      fill="white"
    />
  </svg>
));

Polaris12Icon.displayName = 'Polaris12Icon';

export default function InterstitialModal() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = React.useRef<HTMLDivElement>(null);

  // Generate stars once with useMemo
  const stars = React.useMemo(
    () =>
      Array.from({length: 50}, (_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 3 + 1, // 1-4px
        delay: Math.random() * 3, // 0-3s delay
        duration: Math.random() * 2 + 2, // 2-4s duration
      })),
    [],
  );

  const handleDismiss = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleRedirect = useCallback(() => {
    window.location.href = WEB_COMPONENTS_URL;
  }, []);

  useEffect(() => {
    // SSR safety check
    if (typeof window === 'undefined') return;

    // Don't show if inside an iframe
    if (window.self !== window.top) return;

    // Check if already shown this session
    try {
      const hasShown = sessionStorage.getItem(STORAGE_KEY);
      if (hasShown) return;
    } catch {
      // sessionStorage may fail in private browsing - continue anyway
    }

    // Show modal once per session with small delay for smooth page load
    const timeoutId = setTimeout(() => {
      setIsOpen(true);
      try {
        sessionStorage.setItem(STORAGE_KEY, 'true');
      } catch {
        // Fail silently if sessionStorage unavailable
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, []);

  // Keyboard handler for ESC key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleDismiss();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleDismiss]);

  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';

    // Prevent iOS Safari bounce scrolling
    const preventScroll = (e: TouchEvent) => {
      if (e.target instanceof Element && modalRef.current) {
        if (!modalRef.current.contains(e.target)) {
          e.preventDefault();
        }
      }
    };

    document.addEventListener('touchmove', preventScroll, {passive: false});

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener('touchmove', preventScroll);
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={styles.Overlay}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div aria-hidden="true">
        {stars.map((star) => (
          <div
            key={star.id}
            className={styles.Star}
            style={
              {
                '--star-top': star.top,
                '--star-left': star.left,
                '--star-size': `${star.size}px`,
                '--star-delay': `${star.delay}s`,
                '--star-duration': `${star.duration}s`,
              } as React.CSSProperties
            }
          />
        ))}
        <ShootingStarsBackground />
      </div>
      <div ref={modalRef} className={styles.Modal}>
        <div className={styles.Content}>
          <div className={styles.StarIconContainer} aria-hidden="true">
            <div className={styles.BackgroundStarBottom}>
              <Polaris12Icon />
            </div>
            <div className={styles.BackgroundStarTop}>
              <Polaris12Icon />
            </div>
            <div className={styles.MainStar}>
              <PolarisStarIcon />
            </div>
          </div>
          <h1 id="modal-title" className={styles.Title}>
            Polaris for React is deprecated.
          </h1>
          <p className={styles.Description}>
            Polaris Web Components are now the default way to build Shopify
            apps. Built on web standards, they work with React, Vue, vanilla
            JavaScript, or no framework at all.
          </p>
          <div className={styles.Actions}>
            <Button
              primary
              fill
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
