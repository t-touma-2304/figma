import type { NextPage } from "next";
import { useCallback } from "react";
import FilterForm from "../components/filter-form";
import { useRouter } from "next/router";
import styles from "./buy-food-voucher.module.css";
const BuyFoodVoucher: NextPage = () => {
  const router = useRouter();

  const onGroupButton2Click = useCallback(() => {
    router.push("/menu");
  }, [router]);

  return (
    <div className={styles.buyFoodvoucher}>
      <div className={styles.div}>食券購入</div>
      <FilterForm />
      <div className={styles.buyFoodvoucherInner}>
        <input className={styles.groupChild} type="date" />
      </div>
      <button className={styles.rectangleParent} onClick={onGroupButton2Click}>
        <div className={styles.groupItem} />
        <img className={styles.groupInner} alt="" src="/group-113.svg" />
      </button>
      <div className={styles.div1}>購入方法</div>
      <div className={styles.div2}>購入内容</div>
      <div className={styles.component2}>
        <div className={styles.parent}>
          <div className={styles.div3}>天引</div>
          <img className={styles.test2Icon} alt="" src="/test-2.svg" />
        </div>
        <div className={styles.test2Parent}>
          <img className={styles.test2Icon1} alt="" src="/test-21.svg" />
          <div className={styles.div4}>現金</div>
        </div>
      </div>
      <div className={styles.div5}>
        <div className={styles.groupParent}>
          <div className={styles.groupContainer}>
            <div className={styles.groupDiv}>
              <div className={styles.groupDiv}>
                <img
                  className={styles.ellipseIcon}
                  alt=""
                  src="/ellipse-1.svg"
                />
                <b className={styles.b}>販売枚数</b>
                <b className={styles.b1}>枚</b>
                <input className={styles.rectangleInput} type="text" />
                <b className={styles.b2}>円</b>
                <b className={styles.id}>食券ID</b>
                <input className={styles.groupChild1} type="text" />
                <img
                  className={styles.rectangleIcon}
                  alt=""
                  src="/rectangle-48.svg"
                />
              </div>
              <b className={styles.b3}>～</b>
              <input className={styles.groupChild2} type="text" />
            </div>
            <input className={styles.groupChild3} type="text" />
          </div>
          <div className={styles.div6}>冊子</div>
          <img className={styles.test2Icon2} alt="" src="/test-2.svg" />
        </div>
        <div className={styles.group}>
          <div className={styles.div3}>バラ</div>
          <img className={styles.test2Icon} alt="" src="/test-21.svg" />
        </div>
        <button className={styles.button}>
          <div className={styles.child} />
          <div className={styles.div8}>確定</div>
        </button>
      </div>
    </div>
  );
};

export default BuyFoodVoucher;
