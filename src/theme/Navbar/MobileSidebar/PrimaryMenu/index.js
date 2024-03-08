import { useThemeConfig } from "@docusaurus/theme-common";
import { useNavbarMobileSidebar } from "@docusaurus/theme-common/internal";
import NavbarItem from "@theme/NavbarItem";
import React from "react";

import clsx from "clsx";
import styles from "./styles.module.css";

function useNavbarItems() {
  // TODO temporary casting until ThemeConfig type is improved
  return useThemeConfig().navbar.items;
}
// The primary menu displays the navbar items
export default function NavbarMobilePrimaryMenu() {
  const mobileSidebar = useNavbarMobileSidebar();
  // TODO how can the order be defined for mobile?
  // Should we allow providing a different list of items?
  const items = useNavbarItems();
  const dropdownItem = items.find((item) => item.type === "localeDropdown");

  return (
    <ul className="menu__list">
      {dropdownItem && <NavbarItem mobile {...dropdownItem} />}
      {items
        .filter((item) => item.type !== "localeDropdown")
        .map((item, i) => (
          <NavbarItem
            mobile
            {...item}
            // onClick={() => mobileSidebar.toggle()}
            key={i}
            className={clsx(i === 0 && styles.margin_top_md)}
          />
        ))}
    </ul>
  );
}
