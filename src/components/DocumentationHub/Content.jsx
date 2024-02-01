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

const DocsList = [
  {
    icon: <Coins />,
    title: "What is Unit Network",
    description: "Lorem ipsum",
    link: "/docs/what-is-unit-network",
  },
  {
    icon: <Workflow />,
    title: "Ecosystem DAO",
    description: "Lorem ipsum",
    link: "/docs/ecosystem-dao",
  },
  {
    icon: <Boxes />,
    title: "Architecture",
    description: "Lorem ipsum",
    link: "/docs/architecture",
  },
  {
    icon: <UsersRound />,
    title: "Community",
    description: "Lorem ipsum",
    link: "/docs/community",
  },
  {
    icon: <BookUser />,
    title: "User Guide",
    description: "Lorem ipsum",
    link: "/docs/user-guide",
  },
  {
    icon: <GraduationCap />,
    title: "Learning Hub",
    description: "Lorem ipsum",
    link: "/docs/learning-hub",
  },
  {
    icon: <ActivitySquare />,
    title: "Case Studies",
    description: "Lorem ipsum",
    link: "/docs/case-studies",
  },
  {
    icon: <TrendingUp />,
    title: "Key Trends",
    description: "Lorem ipsum",
    link: "/docs/key-trends",
  },
  {
    icon: <MessageCircleQuestion />,
    title: "FAQ",
    description: "Lorem ipsum",
    link: "/docs/frequently-asked-questions",
  },
  {
    icon: <LibraryBig />,
    title: "Glossary",
    description: "Lorem ipsum",
    link: "/docs/glossary",
  },
  {
    icon: <Image />,
    title: "Media / Brand Resources",
    description: "Lorem ipsum",
    link: "/docs/media",
  },
  {
    icon: <Newspaper />,
    title: "Terms of Services",
    description: "Lorem ipsum",
    link: "/docs/terms-of-services",
  },
];

function DocsCard({ icon, title, description, link }) {
  return (
    <a href={link} className="docs-card-link">
      <div className={clsx("docs-card")}>
        <div className="text--left">{icon}</div>
        <div className="text--left">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </div>
    </a>
  );
}

export default function DocumentationHubContent() {
  return (
    <section className=" bg-color-infima">
      <div className="container">
        <div className="docs-grid">
          {DocsList.map((docs) => (
            <DocsCard key={docs.title} {...docs} />
          ))}
        </div>
      </div>
    </section>
  );
}
