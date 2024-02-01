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
    <header className={clsx("hero", styles.heroBanner, "header-style")}>
      <div className="container">
        <Heading as="h1" className="header-title">
          <Translate>Explore and learn</Translate>
        </Heading>
        <p className="header-subtitle">
          <Translate>
            Unit Network redefines a new financial system, powered by AI,
            blockchain, and the tokenisation of assets in the real world
          </Translate>
        </p>
        <div className={clsx(styles.buttons, "button-container-style")}>
          <Link
            className="button button-style-radius button--primary"
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
