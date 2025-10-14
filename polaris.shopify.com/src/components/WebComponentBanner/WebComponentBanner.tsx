import Link from 'next/link';
import styles from './WebComponentBanner.module.scss';

interface Props {
  componentName: string;
  webComponentName: string;
  webComponentUrl?: string;
  type?: 'polaris' | 'pattern' | 'app-bridge';
}

const PolarisStarIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M71.5722 38.6116C72.4275 43.6363 76.3637 47.5725 81.3884 48.4278L115.071 54.161C117.918 54.6455 120 57.1123 120 60C120 62.8877 117.918 65.3544 115.071 65.839L81.3884 71.5722C76.3637 72.4275 72.4275 76.3637 71.5722 81.3884L65.839 115.071C65.3544 117.918 62.8877 120 60 120C57.1123 120 54.6455 117.918 54.161 115.071L48.4278 81.3884C47.5725 76.3637 43.6363 72.4275 38.6116 71.5722L4.9291 65.839C2.08238 65.3544 0 62.8877 0 60C0 57.1123 2.08239 54.6455 4.92911 54.161L38.6116 48.4278C43.6363 47.5725 47.5725 43.6363 48.4278 38.6116L54.161 4.9291C54.6455 2.08238 57.1123 0 60 0C62.8877 0 65.3544 2.08239 65.839 4.92911L71.5722 38.6116Z"
      fill="white"
    />
  </svg>
);

const AppsIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      className="appIconTopLeft"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.5 5.75C3.5 4.50736 4.50736 3.5 5.75 3.5H8.5C9.05228 3.5 9.5 3.94771 9.5 4.5V8.5C9.5 9.05228 9.05229 9.5 8.5 9.5H4.5C3.94772 9.5 3.5 9.05229 3.5 8.5V5.75ZM5.75 5C5.33579 5 5 5.33579 5 5.75V8H8V5H5.75Z"
      fill="white"
    />
    <path
      className="appIconBottomLeft"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.5 14.25C3.5 15.4926 4.50736 16.5 5.75 16.5H8.5C9.05228 16.5 9.5 16.0523 9.5 15.5V11.5C9.5 10.9477 9.05229 10.5 8.5 10.5H4.5C3.94772 10.5 3.5 10.9477 3.5 11.5V14.25ZM5.75 15C5.33579 15 5 14.6642 5 14.25V12H8V15H5.75Z"
      fill="white"
    />
    <path
      className="appIconBottomRight"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.25 16.5C15.4926 16.5 16.5 15.4926 16.5 14.25V11.5C16.5 10.9477 16.0523 10.5 15.5 10.5H11.5C10.9477 10.5 10.5 10.9477 10.5 11.5V15.5C10.5 16.0523 10.9477 16.5 11.5 16.5H14.25ZM15 14.25C15 14.6642 14.6642 15 14.25 15H12V12H15V14.25Z"
      fill="white"
    />
    <path
      className="appIconPlus"
      d="M13.5 3.5C13.9142 3.5 14.25 3.83579 14.25 4.25V5.75H15.75C16.1642 5.75 16.5 6.08579 16.5 6.5C16.5 6.91421 16.1642 7.25 15.75 7.25H14.25V8.75C14.25 9.16421 13.9142 9.5 13.5 9.5C13.0858 9.5 12.75 9.16421 12.75 8.75V7.25H11.25C10.8358 7.25 10.5 6.91421 10.5 6.5C10.5 6.08579 10.8358 5.75 11.25 5.75H12.75V4.25C12.75 3.83579 13.0858 3.5 13.5 3.5Z"
      fill="white"
    />
  </svg>
);

const HandIcon = () => (
  <svg
    width="1090"
    height="828"
    viewBox="0 0 1090 828"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <path
        d="M336.786 226.714L280.612 156.09L268.352 143.055C259.779 133.936 247.383 129.45 234.663 130.854L303.33 237.761L336.786 226.714Z"
        fill="#272727"
        stroke="#323232"
        strokeWidth="3.71028"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M339.263 254.143L253.277 156.108L244.784 147.625C230.669 133.529 214.529 121.586 194.323 124.682L191.141 125.165L302.82 261.611L339.26 254.126L339.263 254.143Z"
        fill="#272727"
        stroke="#323232"
        strokeWidth="3.71028"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M124.733 222.914C122.196 225.574 122.932 229.855 126.17 231.234L219.064 270.87L327.364 315.824C331.509 317.547 336.022 318.34 340.596 318.146L465.133 312.224L500.899 277.183L260.885 246.984L173.028 211.665C156.652 205.075 137.468 209.546 124.733 222.914Z"
        fill="#272727"
      />
      <path
        d="M146.244 147.637L188.503 181.116L255.643 245.731L303.061 238.936C303.061 238.936 217.202 163.666 186.431 141.376C174.41 132.667 159.046 131.427 146.558 140.673C144.204 142.418 144.05 145.895 146.234 147.632L146.244 147.637Z"
        fill="#272727"
        stroke="#323232"
        strokeWidth="3.71028"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M537.759 230.276C540.063 219.845 534.055 209.797 524.012 207.227C475.479 194.805 423.698 196.423 374.499 212.1L340.616 222.895L257.464 220.927C242.709 220.577 229.385 231.117 226.016 245.794C224.113 254.083 229.606 261.897 237.875 262.665L345.569 272.724L396.406 285.558L517.583 321.609L537.777 230.289L537.759 230.276Z"
        fill="#272727"
      />
      <path
        d="M173.354 208.231C156.965 201.744 137.672 206.455 124.786 220.082C122.218 222.794 122.925 227.109 126.165 228.468L219.117 267.537"
        fill="#272727"
      />
      <path
        d="M173.371 208.199C164.053 203.931 152.924 203.473 142.766 206.954C135.453 209.402 128.554 213.785 123.22 219.625C120.536 222.93 121.526 228.132 125.154 229.82C130.418 232.162 138.459 235.482 143.818 237.788C168.405 248.028 194.037 258.51 219.112 267.474C207.001 261.569 194.743 255.989 182.427 250.53C171.805 245.78 156.215 239.129 145.32 234.513L126.732 226.788C124.338 225.68 124.228 222.34 126.369 220.583C138.477 207.568 157.591 202.813 173.361 208.193L173.371 208.199Z"
        fill="#323232"
      />
      <path
        d="M606.833 247.238C592.067 223.66 566.649 209.2 538.482 208.382L495.917 207.137L468.941 318.364L495.146 322.028C512.518 324.46 527.922 333.776 537.983 347.951L746.88 714.633L922.158 644.005L606.833 247.238Z"
        fill="#272727"
      />
      <path
        className="finger1"
        d="M233.4 130.704C246.18 129.289 258.634 133.809 267.248 142.997L279.566 156.13L330.832 220.766"
        stroke="url(#paint0_linear_10_486)"
        strokeWidth="3.71028"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        className="finger2"
        d="M189.648 125.03L192.842 124.543C213.126 121.427 229.329 133.449 243.499 147.639L252.025 156.178L307.692 219.819"
        stroke="url(#paint1_linear_10_486)"
        strokeWidth="3.71028"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        className="finger3"
        d="M123.953 219.698C136.683 206.336 155.861 201.867 172.232 208.454L231.097 232.115"
        stroke="url(#paint2_linear_10_486)"
        strokeWidth="3.71028"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        className="finger4"
        d="M144.833 147.726L144.822 147.721C142.631 145.968 142.785 142.46 145.147 140.699C157.675 131.368 173.092 132.617 185.156 141.404C205.383 156.134 249.327 193.797 277.243 218.032"
        stroke="url(#paint3_linear_10_486)"
        strokeWidth="3.71028"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        className="finger5"
        d="M522.545 206.774C474.095 194.378 422.402 195.994 373.286 211.639L339.461 222.413L265.573 220.671C252.136 220.353 239.566 226.706 231.387 236.944"
        stroke="url(#paint4_linear_10_486)"
        strokeWidth="3.71028"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M537.486 233.933C539.554 223.645 533.313 213.529 523.203 210.729C474.355 197.195 422.576 197.505 373.701 211.821L340.043 221.681L256.789 217.648C242.017 216.932 228.925 227.052 225.888 241.524C224.172 249.697 229.848 257.585 238.139 258.554L346.136 271.224L397.3 285.225L519.38 324.012L537.505 233.946L537.486 233.933Z"
        fill="url(#paint5_radial_10_486)"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_10_486"
        x1="244.26"
        y1="123.982"
        x2="346.67"
        y2="224.234"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" stopOpacity="0" />
        <stop offset="0.348958" stopColor="white" />
        <stop offset="0.692708" stopColor="white" />
        <stop offset="0.9999" stopColor="#6A6A6A" stopOpacity="0" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_10_486"
        x1="198.909"
        y1="122.398"
        x2="320.408"
        y2="222.992"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" stopOpacity="0" />
        <stop offset="0.348958" stopColor="white" />
        <stop offset="0.692708" stopColor="white" />
        <stop offset="0.9999" stopColor="#6A6A6A" stopOpacity="0" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_10_486"
        x1="226.356"
        y1="233.638"
        x2="129.768"
        y2="207.371"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" stopOpacity="0" />
        <stop offset="0.348958" stopColor="white" />
        <stop offset="0.751456" stopColor="white" />
        <stop offset="0.9999" stopColor="#6A6A6A" stopOpacity="0" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_10_486"
        x1="158.324"
        y1="126.895"
        x2="277.498"
        y2="212.787"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" stopOpacity="0" />
        <stop offset="0.348958" stopColor="white" />
        <stop offset="0.692708" stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
        <stop offset="1" stopColor="#6A6A6A" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint4_linear_10_486"
        x1="523.258"
        y1="210.616"
        x2="208.752"
        y2="232.494"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" stopOpacity="0" />
        <stop offset="0.348958" stopColor="white" />
        <stop offset="0.692708" stopColor="white" />
        <stop offset="0.9999" stopColor="#6A6A6A" stopOpacity="0" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <radialGradient
        id="paint5_radial_10_486"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(320.677 271.967) rotate(-80.3933) scale(140.488 197.339)"
      >
        <stop stopColor="#1A1A1A" />
        <stop offset="0.0001" stopColor="#1A1A1A" />
        <stop offset="1" stopColor="#272727" stopOpacity="0" />
      </radialGradient>
    </defs>
  </svg>
);

function WebComponentBanner({
  componentName,
  webComponentName,
  webComponentUrl = 'https://shopify.dev/docs/api/app-home/polaris-web-components',
  type = 'polaris',
}: Props) {
  const config = {
    polaris: {
      title: 'Upgrade to Polaris Web Components',
      description: `${componentName} is now available as a framework-agnostic web component.`,
      ctaText: `Start using <${webComponentName}>`,
    },
    pattern: {
      title: 'Upgrade to Polaris Web Components',
      description: `${componentName} is now available as a composition pattern using web components.`,
      ctaText: `Explore ${webComponentName}`,
    },
    'app-bridge': {
      title: 'Upgrade to App Bridge Web Components',
      description: `${componentName} is now available as an App Bridge web component.`,
      ctaText: `Start using <${webComponentName}>`,
    },
  };

  const {title, description, ctaText} = config[type];

  const bannerClassName = `${styles.WebComponentBanner} ${
    type === 'pattern'
      ? styles.PatternBanner
      : type === 'app-bridge'
      ? styles.AppBridgeBanner
      : styles.PolarisBanner
  }`;

  const FloatingIcon = type === 'app-bridge' ? AppsIcon : PolarisStarIcon;

  return (
    <div className={bannerClassName}>
      <div className={styles.Stars}>
        <span className={styles.Star1}></span>
        <span className={styles.Star2}></span>
        <span className={styles.Star3}></span>
        <span className={styles.Star4}></span>
        <span className={styles.Star5}></span>
        <span className={styles.Star6}></span>
        <span className={styles.Star7}></span>
        <span className={styles.Star8}></span>
        <span className={styles.Star9}></span>
        <span className={styles.Star10}></span>
        <span className={styles.Star11}></span>
        <span className={styles.Star12}></span>
        <span className={styles.Star13}></span>
        <span className={styles.Star14}></span>
        <span className={styles.Star15}></span>
        <span className={styles.Star16}></span>
        <span className={styles.Star17}></span>
        <span className={styles.Star18}></span>
      </div>
      <div className={styles.FloatingStarMobile}>
        <FloatingIcon />
      </div>
      <div className={styles.Content}>
        <div className={styles.Text}>
          <h3 className={styles.Title}>{title}</h3>
          <p className={styles.Description}>{description}</p>
          <Link href={webComponentUrl} className={styles.CTA}>
            {ctaText}
          </Link>
        </div>
      </div>
      <div className={styles.HandDecoration}>
        <HandIcon />
      </div>
      <div className={styles.FloatingStar}>
        <FloatingIcon />
      </div>
    </div>
  );
}

export default WebComponentBanner;
