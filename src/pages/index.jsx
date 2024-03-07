import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import clsx from "clsx";

import Translate from "@docusaurus/Translate";
import { useColorMode } from "@docusaurus/theme-common";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Heading from "@theme/Heading";
import SEO from "../components/Seo";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const { colorMode } = useColorMode();
  return (
    <header className={clsx("hero", styles.heroBanner, "header-style")}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">
          <Translate>
            Unit Network redefines a new financial system, powered by AI,
            blockchain, and the tokenisation of assets in the real world
          </Translate>
        </p>
        <div className={clsx(styles.buttons, "button-container-style")}>
          <Link
            className="button button--secondary button--lg button-style"
            to="/documentation-hub"
          >
            <Translate>Documentation Hub</Translate>
          </Link>
          <Link
            className="button button--primary button--black button--lg button-style"
            to="https://app.unit.network/login"
          >
            <Translate>Log In</Translate>
          </Link>
        </div>
        <div className="flex-center flex-col mt-2">
          <div className="flex-center gap-1">
            <span className="font-poppins">Have an invite?</span>
            <a
              className="font-poppins"
              href="https://app.unit.network/register"
            >
              Sign Up
            </a>
          </div>
        </div>

        <div className="hero-logo-container">
          <img
            className="unit-hero-logo"
            src={useBaseUrl("/img/logo-3d.png")}
            width="750px"
          ></img>
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
      <SEO
        title="Index"
        description="Unit Network redefines a new financial system, powered by AI,
            blockchain, and the tokenisation of assets in the real world"
      />
      <HomepageHeader />
    </Layout>
  );
}
