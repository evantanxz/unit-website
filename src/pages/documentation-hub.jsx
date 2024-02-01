import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import DocumentationHubContent from "@site/src/components/DocumentationHub/Content";
import Layout from "@theme/Layout";
import clsx from "clsx";

import Translate from "@docusaurus/Translate";
import Heading from "@theme/Heading";
import { ArrowUpRight } from "lucide-react";
import styles from "./index.module.css";

function DocumentationHubHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner, "documentation-header-style")}>
      <div className="container">
        <Heading as="h1" className="header-title">
          <Translate>Documentation Hub</Translate>
        </Heading>
        <p className="hero__subtitle hero-subtitle">
          <Translate>
            Your comprehensive guide to navigating the Unit Network
          </Translate>
        </p>
        <div className={clsx(styles.buttons, "button-container-style-documentation")}>
          <Link
            className="button button--secondary button--lg button-style-1"
            to="/docs/intro"
          >
            <span>
              <Translate>Get Started</Translate>
            </span>
            <ArrowUpRight />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function DocumentationHub() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <DocumentationHubHeader />
      <main className="padding-bottom--2xl bg-color-infima">
        <DocumentationHubContent />
      </main>
    </Layout>
  );
}
