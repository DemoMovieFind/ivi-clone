import clsx from "clsx";
import React from "react";
import styles from "./MobilMenu.module.css";
import { Link } from "react-router-dom";

export default function MobilMenu() {
  return (
    <div className={styles.tabBarPlate}>
      <div className={styles.tabBar}>
        <Link to="/" className={clsx(styles.item, styles.item_selected)}>
          <div
            className={styles.itemGlowImage}
            style={document.location.pathname === "/" ? {} : { opacity: 0 }}
          ></div>
          <div className={styles.itemIcon}>
            <div
              className={clsx(styles.itemIconGlyph_home, styles.itemIconGlyph)}
            ></div>
          </div>
          <div className={styles.itemCaption}>Мой Иви</div>
        </Link>
        <Link to="/movies" className={styles.item}>
          <div
            className={styles.itemGlowImage}
            style={
              document.location.pathname === "/movies" ? {} : { opacity: 0 }
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
          <div className={styles.itemCaption}>Каталог</div>
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
          <div className={styles.itemCaption}>Поиск</div>
        </div>
        <Link to="/profile" className={styles.item}>
          <div
            className={styles.itemGlowImage}
            style={
              document.location.pathname === "/profile" ? {} : { opacity: 0 }
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
          <div className={styles.itemCaption}>Профиль</div>
        </Link>
        <div className={styles.item}>
          <div className={styles.itemGlowImage} style={{ opacity: 0 }}></div>
          <div className={styles.itemIcon}>
            <div
              className={clsx(styles.itemIconGlyph, styles.itemIconGlyph_more)}
            ></div>
          </div>
          <div className={styles.itemCaption}>Ещё</div>
        </div>
      </div>
    </div>
  );
}
