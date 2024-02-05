import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import clsx from "clsx";

import Translate from "@docusaurus/Translate";
import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner, "header-style")}>
      <div className="container">
        <div>
          <img
            className="unit-hero-logo"
            src="img/unit-logo-color.png"
            width="150px"
          ></img>
        </div>
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle hero-subtitle">
          <Translate>
            Unit Network redefines a new financial system, powered by AI,
            blockchain, and the tokenisation of assets in the real world
          </Translate>
        </p>
        <div className={clsx(styles.buttons, "button-container-style")}>
          <Link
            className="button button--secondary button--lg button-style"
            to="https://app.unit.network/login"
          >
            <Translate>Log In</Translate>
          </Link>
          <Link
            className="button button--secondary button--lg button--outline button-style"
            to="/documentation-hub"
          >
            <Translate>Documentation Hub</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Unit Network redefines a new financial system, powered by AI,
            blockchain, and the tokenisation of assets in the real world"
    >
      <HomepageHeader />
    </Layout>
  );
}
