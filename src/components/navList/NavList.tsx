import clsx from "clsx";
import styles from "./NavList.module.css";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

export type NavListPropsType = {
  links: Array<{
    href: string;
    translationId: string;
    marked?: boolean;
  }>;
  vertical?: boolean;
  headerTranslationId?: string;
  className?: string;
  ulClassName?: string;
};

const NavList = ({
  links,
  vertical = false,
  headerTranslationId = "",
  className,
  ulClassName,
}: NavListPropsType) => {
  const headerId =
    headerTranslationId === "" ? "empty_string" : headerTranslationId;

  const items = links.map((link, index) => {
    const { href, translationId, marked } = link;
    return (
      <li
        className={clsx(
          styles.link,
          link.marked && styles["item-marked"],
          className
        )}
        key={index}
        id={translationId}
      >
        <Link className={marked ? styles["link-marked"] : ""} to={href}>
          {<FormattedMessage id={translationId} />}
        </Link>
      </li>
    );
  });
  return (
    <nav className={styles["nav-list"]}>
      <ul
        className={clsx(
          styles.links,
          ulClassName,
          vertical ? styles["links-vertical"] : styles["links-horizontal"]
        )}
      >
        <span className={styles.headerId}>
          {<FormattedMessage id={headerId} />}{" "}
        </span>

        {items}
      </ul>
    </nav>
  );
};

export default NavList;
