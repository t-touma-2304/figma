import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./filter-form.module.css";
const FilterForm: NextPage = () => {
  const router = useRouter();

  const onGroupButton1Click = useCallback(() => {
    router.push("/buy-reception");
  }, [router]);

  return (
    <div className={styles.rectangleParent}>
      <input className={styles.groupChild} type="text" />
      <div className={styles.rectangleGroup}>
        <div className={styles.groupItem} />
        <div className={styles.occ}>
          <p className={styles.p}>株式会社OCC</p>
        </div>
        <div className={styles.div}>沖縄 太郎</div>
      </div>
      <button className={styles.rectangleContainer}>
        <div className={styles.groupInner} />
        <div className={styles.div1}>検索</div>
      </button>
      <button className={styles.groupButton} onClick={onGroupButton1Click}>
        <div className={styles.rectangleDiv} />
        <b className={styles.b}>
          <span className={styles.txt}>
            <p className={styles.p}>外注・接待</p>
            <p className={styles.p}>購入分</p>
            <p className={styles.p}>入力画面</p>
          </span>
        </b>
      </button>
    </div>
  );
};

export default FilterForm;
