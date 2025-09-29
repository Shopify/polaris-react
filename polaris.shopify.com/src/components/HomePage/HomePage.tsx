import Link from 'next/link';
import PageMeta from '../PageMeta';
import styles from './HomePage.module.scss';
import Page from '../Page';

interface Props {}

function HomePage({}: Props) {
  return (
    <Page>
      <div className={styles.HomePage}>
        <PageMeta description="A starter kit for reimagining commerce." />

        <div className={styles.EntryPoints}>
          <Link href="/foundations" className={styles.EntryPoint}>
            <h3>Foundations</h3>
            <p>
              Fundamental design guidance for creating quality admin experiences
            </p>
          </Link>

          <Link href="/components" className={styles.EntryPoint}>
            <h3>Components</h3>
            <p>
              Reusable elements and styles, packaged through code, for building
              admin interfaces
            </p>
          </Link>

          <Link href="/tokens/color" className={styles.EntryPoint}>
            <h3>Tokens</h3>
            <p>
              Coded names that represent design decisions for color, spacing,
              typography, and more
            </p>
          </Link>

          <Link href="/icons" className={styles.EntryPoint}>
            <h3>Icons</h3>
            <p>
              Over 400 carefully designed icons focused on commerce and
              entrepreneurship
            </p>
          </Link>
        </div>
      </div>
    </Page>
  );
}

export default HomePage;
