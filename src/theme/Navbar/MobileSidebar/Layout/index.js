import { useNavbarSecondaryMenu } from "@docusaurus/theme-common/internal";
import clsx from "clsx";
import React from "react";
import styles from "./styles.module.css";
export default function NavbarMobileSidebarLayout({
  header,
  primaryMenu,
  secondaryMenu,
}) {
  const { shown: secondaryMenuShown } = useNavbarSecondaryMenu();
  return (
    <div className={clsx("navbar-sidebar", styles.navbarSidebarCustom)}>
      {header}
      <div
        className={clsx("navbar-sidebar__items", {
          "navbar-sidebar__items--show-secondary": secondaryMenuShown,
        })}
      >
        <div className="navbar-sidebar__item menu">{primaryMenu}</div>
        <div className="navbar-sidebar__item menu">{secondaryMenu}</div>
      </div>
    </div>
  );
}
