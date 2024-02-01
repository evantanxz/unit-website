import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import DocumentationHubContent from "@site/src/components/DocumentationHub/Content";
import Layout from "@theme/Layout";
import clsx from "clsx";

import Heading from "@theme/Heading";
import { ArrowUpRight } from "lucide-react";
import styles from "./index.module.css";

function DocumentationHubHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner, "header-style")}>
      <div className="container">
        <Heading as="h1" className="header-title">
          Explore and learn
        </Heading>
        <p className="header-subtitle">{siteConfig.tagline}</p>
        <div className={clsx(styles.buttons, "button-container-style")}>
          <Link
            className="button button-style-radius button--primary"
            to="/docs/intro"
          >
            <span>Get Started</span>
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
