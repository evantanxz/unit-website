import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className= {clsx('hero', styles.heroBanner, 'header-style')} >
      <div className="container" >
      <div>
        <img className="unit-hero-logo" src="img/unit-logo-color.png"  width="150px" ></img>
      </div>
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle hero-subtitle">{siteConfig.tagline}</p>
        <div className={clsx(styles.buttons, 'button-container-style')}>
          <Link
            className="button button--secondary button--lg button-style"
            to="#">
            Log In
          </Link>
          <Link
            className="button button--secondary button--lg button--outline button-style"
            to="/docs/intro" >
            Documentation Hub
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
