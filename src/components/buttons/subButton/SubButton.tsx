import React from "react";
import styles from "./SubButton.module.css";
import { FormattedMessage } from "react-intl";

export default function SubButton() {
  return (
    <div className={styles.containerInner}>
      <ul className={styles.teaserList}>
        <li className={styles.teaserPlate}>
          <div className={styles.teaserTile}>
            <div className={styles.bgImage}></div>
            <div className={styles.content}>
              <img
                className={styles.picture}
                src="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/lightning.svg"
              />
              <div className={styles.caption}>
                {" "}
                <FormattedMessage id="subscribe" />
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
