import { translate } from "@docusaurus/Translate";
import { useNavbarMobileSidebar } from "@docusaurus/theme-common/internal";
import React from "react";
import { useMobileNavbarStore } from "../../../../store/useMobileNavbarStore";
import clsx from "clsx";
export default function MobileSidebarToggle() {
  const { toggle, shown } = useNavbarMobileSidebar();
  const { isOpened, setIsOpened } = useMobileNavbarStore();

  return (
    <div
      aria-label={translate({
        id: "theme.docs.sidebar.toggleSidebarButtonAriaLabel",
        message: "Toggle navigation bar",
        description:
          "The ARIA label for hamburger menu button of mobile navigation",
      })}
      aria-expanded={shown}
      className="mobile-navbar-hamburger-container"
      onClick={() => {
        toggle();
        setIsOpened(!isOpened);
      }}
    >
      <div
        className={clsx(
          "mobile-navbar-hamburger-lines",
          isOpened && "mobile-navbar-hamburger-lines--active-top"
        )}
      ></div>
      <div
        className={clsx(
          "mobile-navbar-hamburger-lines",
          isOpened && "mobile-navbar-hamburger-lines--active-bottom"
        )}
      ></div>
    </div>
  );
}
