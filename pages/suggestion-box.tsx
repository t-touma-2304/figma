import type { NextPage } from "next";
import { useState, useCallback } from "react";
import "antd/dist/antd.min.css";
import { Input } from "antd";
import PoppUpppFrame from "../components/popp-uppp-frame";
import PortalPopup from "../components/portal-popup";
import RectangleComponent from "../components/rectangle-component";
import { useRouter } from "next/router";
import styles from "./suggestion-box.module.css";
const SuggestionBox: NextPage = () => {
  const [isPoppUpppFrameOpen, setPoppUpppFrameOpen] = useState(false);
  const router = useRouter();

  const openPoppUpppFrame = useCallback(() => {
    setPoppUpppFrameOpen(true);
  }, []);

  const closePoppUpppFrame = useCallback(() => {
    setPoppUpppFrameOpen(false);
  }, []);

  const onGroupContainer3Click = useCallback(() => {
    router.push("/menu");
  }, [router]);

  return (
    <>
      <div className={styles.suggestionBox}>
        <div className={styles.suggBox}>
          <div className={styles.rectangleParent}>
            <RectangleComponent />
            <div className={styles.rectangleGroup}>
              <Input.TextArea
                className={styles.groupChild}
                bordered={false}
                style={{ width: "1107.199951171875px" }}
                size="middle"
                maxLength={150}
              />
              <Input.TextArea
                className={styles.inputtextarea}
                bordered={false}
                style={{ width: "377.6000061035156px" }}
                size="large"
                placeholder="意見を入力してください"
                maxLength={250}
              />
            </div>
            <div
              className={styles.rectangleContainer}
              onClick={openPoppUpppFrame}
            >
              <div className={styles.groupItem} />
              <button className={styles.button}>送信</button>
            </div>
            <div className={styles.div}>意見箱</div>
            <img className={styles.groupInner} alt="" src="/arrow-1.svg" />
          </div>
          <div className={styles.groupDiv} onClick={onGroupContainer3Click}>
            <div className={styles.rectangleDiv} />
            <img className={styles.groupIcon} alt="" src="/group-11.svg" />
          </div>
        </div>
      </div>
      {isPoppUpppFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePoppUpppFrame}
        >
          <PoppUpppFrame onClose={closePoppUpppFrame} />
        </PortalPopup>
      )}
    </>
  );
};

export default SuggestionBox;
