import clsx from "clsx";
import React from "react";
import styles from "./MobilMenu.module.css";
import { Link } from "react-router-dom";
import { useIntl } from "react-intl";

interface MobilMenuProps {
  className?: string;
}

const MobilMenu = ({ className }: MobilMenuProps) => {
  const intl = useIntl();
  return (
    <div className={clsx(styles.tabBarPlate, className)}>
      <div className={styles.tabBar}>
        <Link to="/" className={clsx(styles.item, styles.item_selected)}>
          <div
            className={styles.itemGlowImage}
            style={
              document.location.pathname === "/"
                ? { opacity: 1 }
                : { opacity: 0 }
            }
          ></div>
          <div className={styles.itemIcon}>
            <div
              className={clsx(styles.itemIconGlyph_home, styles.itemIconGlyph)}
            ></div>
          </div>
          <div className={styles.itemCaption}>{intl.formatMessage({id:'nav_list_myIvi'})}</div>
        </Link>
        <Link to="/movies" className={styles.item}>
          <div
            className={styles.itemGlowImage}
            style={
              document.location.pathname === "/movies"
                ? { opacity: 1 }
                : { opacity: 0 }
            }
          ></div>
          <div className={styles.itemIcon}>
            <div
              className={clsx(
                styles.itemIconGlyph_catalog,
                styles.itemIconGlyph
              )}
            ></div>
          </div>
          <div className={styles.itemCaption}>{intl.formatMessage({id:'nav_list_catalog'})}</div>
        </Link>
        <div className={styles.item}>
          <div className={styles.itemGlowImage} style={{ opacity: 0 }}></div>
          <div className={styles.itemIcon}>
            <div
              className={clsx(
                styles.itemIconGlyph_search,
                styles.itemIconGlyph
              )}
            ></div>
          </div>
          <div className={styles.itemCaption}>{intl.formatMessage({id:'nav_list_search'})}</div>
        </div>
        <Link to="/profile" className={styles.item}>
          <div
            className={styles.itemGlowImage}
            style={
              document.location.pathname === "/profile"
                ? { opacity: 1 }
                : { opacity: 0 }
            }
          ></div>
          <div className={styles.itemIcon}>
            <div
              className={clsx(
                styles.itemIconGlyph_avatar,
                styles.itemIconGlyph
              )}
            ></div>
          </div>
          <div className={styles.itemCaption}>{intl.formatMessage({id:'nav_list_profile'})}</div>
        </Link>
        <div className={styles.item}>
          <div className={styles.itemGlowImage} style={{ opacity: 0 }}></div>
          <div className={styles.itemIcon}>
            <div
              className={clsx(styles.itemIconGlyph, styles.itemIconGlyph_more)}
            ></div>
          </div>
          <div className={styles.itemCaption}>{intl.formatMessage({id:'nav_list_more'})}</div>
        </div>
      </div>
    </div>
  );
}

export default MobilMenu;
