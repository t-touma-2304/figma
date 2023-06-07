import type { NextPage } from "next";
import { memo } from "react";
import styles from "./rectangle-component.module.css";
const RectangleComponent: NextPage = memo(() => {
  return <div className={styles.groupChild} />;
});

export default RectangleComponent;
