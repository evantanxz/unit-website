import { useThemeConfig } from "@docusaurus/theme-common";
import { useNavbarMobileSidebar } from "@docusaurus/theme-common/internal";
import NavbarItem from "@theme/NavbarItem";
import { useMobileNavbarStore } from "../../../../store/useMobileNavbarStore";
import React from "react";

import clsx from "clsx";

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
      <li class="menu__list-item">
        <a
          href="https://app.unit.network/login"
          target="_blank"
          rel="noopener noreferrer"
          class="menu__link mt-8"
        >
          Log In
        </a>
      </li>
      {items
        .filter((item) => item.type !== "localeDropdown")
        .map((item, i) => (
          <NavbarItem
            mobile
            {...item}
            key={i}
            className={clsx(i === 0 && "mt-8")}
          />
        ))}
    </ul>
  );
}
