import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
import { useColorMode } from "@docusaurus/theme-common";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";
import clsx from "clsx";
import { ArrowUpRight } from "lucide-react";
import * as React from "react";
import styles from "./index.module.css";

function Ecosystem() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main className="padding-bottom--2xl bg-color-infima">
        <header
          className={clsx(
            "hero",
            styles.heroBanner,
            "documentation-header-style"
          )}
        >
          <div className="container">
            <Heading as="h1" className="header-title">
              <Translate>Unit Ecosystem</Translate>
            </Heading>
            <p className="hero__subtitle hero-subtitle">
              <Translate>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </Translate>
            </p>
          </div>
        </header>
        <EcosystemPage />
      </main>
    </Layout>
  );
}

function EcosystemPage() {
  const { colorMode } = useColorMode();
  return (
    <>
      <div className="ecosystem-grid-cards container">
        <div className="ecosystem-card">
          <div className="ecosystem-card-content">
            <img
              src={
                colorMode === "dark"
                  ? useBaseUrl("/icons/dark/chart.svg")
                  : useBaseUrl("/icons/chart.svg")
              }
              className="ecosystem-card-icon"
            />
            <div className="ecosystem-card-title">Unit Conference</div>
            <div>Lorem ipsum dolor sit amet consectetur. Et facilistis</div>
            <div className="ecosystem-card-link">
              Visit Website <ArrowUpRight />
            </div>
          </div>
          <img
            className="ecosystem-card-image"
            src={useBaseUrl("/img/unit-conference.svg")}
          />
        </div>
        <div className="ecosystem-card">
          <div className="ecosystem-card-content">
            <img
              src={
                colorMode === "dark"
                  ? useBaseUrl("/icons/dark/menu-board.svg")
                  : useBaseUrl("/icons/menu-board.svg")
              }
              className="ecosystem-card-icon"
            />
            <div className="ecosystem-card-title">Unit Events</div>
            <div>Lorem ipsum dolor sit amet consectetur. Et facilistis</div>
            <div className="ecosystem-card-link">
              Visit Website <ArrowUpRight />
            </div>
          </div>
          <img
            className="ecosystem-card-image"
            src={useBaseUrl("/img/unit-ventures.svg")}
            style={{ marginLeft: "auto", height: "300px" }}
          />
        </div>
        <div className="ecosystem-card">
          <div className="ecosystem-card-content">
            <img
              src={
                colorMode === "dark"
                  ? useBaseUrl("/icons/dark/teacher.svg")
                  : useBaseUrl("/icons/teacher.svg")
              }
              className="ecosystem-card-icon"
            />
            <div className="ecosystem-card-title">Unit Masters</div>
            <div>Lorem ipsum dolor sit amet consectetur. Et facilistis</div>
            <div className="ecosystem-card-link">
              Visit Website <ArrowUpRight />
            </div>
          </div>
          <img
            className="ecosystem-card-image"
            src={useBaseUrl("/img/unit-conference.svg")}
          />
        </div>
        <div className="ecosystem-card">
          <div className="ecosystem-card-content">
            <img
              src={
                colorMode === "dark"
                  ? useBaseUrl("/icons/dark/money-receive.svg")
                  : useBaseUrl("/icons/money-receive.svg")
              }
              className="ecosystem-card-icon"
            />
            <div className="ecosystem-card-title">Unit Ventures</div>
            <div>Lorem ipsum dolor sit amet consectetur. Et facilistis</div>
            <div className="ecosystem-card-link">
              Visit Website <ArrowUpRight />
            </div>
          </div>
          <img
            className="ecosystem-card-image"
            src={useBaseUrl("/img/unit-ventures.svg")}
          />
        </div>
      </div>
      <div className="container">
        <h1 className="ecosystem-subheader">
          Learn more about the Unit Ecosystem DAO
        </h1>
        <p className="ecosystem-subtitle">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <div
          className={clsx(
            styles.buttons,
            "button-container-style-documentation"
          )}
        >
          <Link
            className="button button--secondary button--lg button-style-1"
            to="/docs/ecosystem-dao"
          >
            <span>
              <Translate>Get Started</Translate>
            </span>
            <ArrowUpRight />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Ecosystem;
