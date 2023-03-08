import React from "react";
import styles from "./styles.module.css";

export default function Loading() {
  return (
    <div className="h-full flex items-center justify-center">
      <div className={styles.loader}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
      </div>
    </div>
  );
}
