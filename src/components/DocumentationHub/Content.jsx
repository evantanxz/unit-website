import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
import Heading from "@theme/Heading";
import clsx from "clsx";
import {
  ActivitySquare,
  BookUser,
  Boxes,
  Coins,
  GraduationCap,
  Image,
  LibraryBig,
  MessageCircleQuestion,
  Newspaper,
  TrendingUp,
  UsersRound,
  Workflow,
} from "lucide-react";
import * as React from "react";

export default function DocumentationHubContent() {
  return (
    <section className=" bg-color-infima">
      <div className="container">
        <div className="docs-grid">
          <Link href="/docs/what-is-unit-network" className="docs-card-link">
            <div className={clsx("docs-card")}>
              <div className="text--left">
                <Coins />
              </div>
              <div className="text--left">
                <Heading as="h3">
                  <Translate>What is Unit Network</Translate>
                </Heading>
                <p>
                  <Translate>Lorem ipsum</Translate>
                </p>
              </div>
            </div>
          </Link>
          <Link href="/docs/ecosystem-dao" className="docs-card-link">
            <div className={clsx("docs-card")}>
              <div className="text--left">
                <Workflow />
              </div>
              <div className="text--left">
                <Heading as="h3">
                  <Translate>Ecosystem DAO</Translate>
                </Heading>
                <p>
                  <Translate>Lorem ipsum</Translate>
                </p>
              </div>
            </div>
          </Link>
          <Link href="/docs/architecture" className="docs-card-link">
            <div className={clsx("docs-card")}>
              <div className="text--left">
                <Boxes />
              </div>
              <div className="text--left">
                <Heading as="h3">
                  <Translate>Architecture</Translate>
                </Heading>
                <p>
                  <Translate>Lorem ipsum</Translate>
                </p>
              </div>
            </div>
          </Link>
          <Link href="/docs/community" className="docs-card-link">
            <div className={clsx("docs-card")}>
              <div className="text--left">
                <UsersRound />
              </div>
              <div className="text--left">
                <Heading as="h3">
                  <Translate>Community</Translate>
                </Heading>
                <p>
                  <Translate>Lorem ipsum</Translate>
                </p>
              </div>
            </div>
          </Link>
          <Link href="/docs/user-guide" className="docs-card-link">
            <div className={clsx("docs-card")}>
              <div className="text--left">
                <BookUser />
              </div>
              <div className="text--left">
                <Heading as="h3">
                  <Translate>User Guide</Translate>
                </Heading>
                <p>
                  <Translate>Lorem ipsum</Translate>
                </p>
              </div>
            </div>
          </Link>
          <Link href="/docs/learning-hub" className="docs-card-link">
            <div className={clsx("docs-card")}>
              <div className="text--left">
                <GraduationCap />
              </div>
              <div className="text--left">
                <Heading as="h3">
                  <Translate>Learning Hub</Translate>
                </Heading>
                <p>
                  <Translate>Lorem ipsum</Translate>
                </p>
              </div>
            </div>
          </Link>
          <Link href="/docs/case-studies" className="docs-card-link">
            <div className={clsx("docs-card")}>
              <div className="text--left">
                <ActivitySquare />
              </div>
              <div className="text--left">
                <Heading as="h3">
                  <Translate>Case Studies</Translate>
                </Heading>
                <p>
                  <Translate>Lorem ipsum</Translate>
                </p>
              </div>
            </div>
          </Link>
          <Link href="/docs/key-trends" className="docs-card-link">
            <div className={clsx("docs-card")}>
              <div className="text--left">
                <TrendingUp />
              </div>
              <div className="text--left">
                <Heading as="h3">
                  <Translate>Key Trends</Translate>
                </Heading>
                <p>
                  <Translate>Lorem ipsum</Translate>
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="/docs/frequently-asked-questions"
            className="docs-card-link"
          >
            <div className={clsx("docs-card")}>
              <div className="text--left">
                <MessageCircleQuestion />
              </div>
              <div className="text--left">
                <Heading as="h3">
                  <Translate>FAQ</Translate>
                </Heading>
                <p>
                  <Translate>Lorem ipsum</Translate>
                </p>
              </div>
            </div>
          </Link>
          <Link href="/docs/glossary" className="docs-card-link">
            <div className={clsx("docs-card")}>
              <div className="text--left">
                <LibraryBig />
              </div>
              <div className="text--left">
                <Heading as="h3">
                  <Translate>Glossary</Translate>
                </Heading>
                <p>
                  <Translate>Lorem ipsum</Translate>
                </p>
              </div>
            </div>
          </Link>
          <Link href="/docs/media" className="docs-card-link">
            <div className={clsx("docs-card")}>
              <div className="text--left">
                <Image />
              </div>
              <div className="text--left">
                <Heading as="h3">
                  <Translate>Media / Brand Resources</Translate>
                </Heading>
                <p>
                  <Translate>Lorem ipsum</Translate>
                </p>
              </div>
            </div>
          </Link>
          <Link href="/docs/terms-of-services" className="docs-card-link">
            <div className={clsx("docs-card")}>
              <div className="text--left">
                <Newspaper />
              </div>
              <div className="text--left">
                <Heading as="h3">
                  <Translate>Terms of Services</Translate>
                </Heading>
                <p>
                  <Translate>Lorem ipsum</Translate>
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
