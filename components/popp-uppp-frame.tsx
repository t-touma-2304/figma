import type { NextPage } from "next";
import styles from "./popp-uppp-frame.module.css";

type PoppUpppFrameType = {
  onClose?: () => void;
};

const PoppUpppFrame: NextPage<PoppUpppFrameType> = ({ onClose }) => {
  return (
    <div className={styles.poppUpppFrame}>
      <div className={styles.div}>送信を完了しました！</div>
    </div>
  );
};

export default PoppUpppFrame;
