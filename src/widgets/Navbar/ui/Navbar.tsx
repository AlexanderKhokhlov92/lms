import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import * as styles from "./Navbar.module.scss";

import { AppLink, AppLinkTheme } from "shared/ui";

interface NavbarProps {
  className?: string;
}

export const Navbar = () => {
  return (
    <div className={classNames(styles.navbar)}>
      <ul className={styles.linkList}>
        <li className={styles.mainLink}>
          <AppLink theme={AppLinkTheme.SECONDARY} to={"/"}>
            Main
          </AppLink>
        </li>
        <li>
          <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
            About
          </AppLink>
        </li>
      </ul>
    </div>
  );
};
