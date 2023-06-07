import type { NextPage } from "next";
import { useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { useRouter } from "next/router";
import styles from "./index.module.css";
const LogIn: NextPage = () => {
  const router = useRouter();

  const onRectangleClick = useCallback(() => {
    router.push("/menu");
  }, [router]);

  return (
    <div className={styles.logIn}>
      <TextField
        className={styles.logInChild}
        sx={{ width: 475 }}
        color="primary"
        variant="outlined"
        type="email"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton aria-label="toggle password visibility">
                <Icon>visibility</Icon>
              </IconButton>
            </InputAdornment>
          ),
        }}
        label="Email"
        placeholder="メール"
        size="medium"
        margin="none"
      />
      <div className={styles.div}>ログイン画面</div>
      <TextField
        className={styles.logInItem}
        sx={{ width: 475 }}
        color="primary"
        variant="outlined"
        type="password"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton aria-label="toggle password visibility">
                <Icon>visibility</Icon>
              </IconButton>
            </InputAdornment>
          ),
        }}
        label="Password"
        placeholder="パスワード"
        size="medium"
        margin="none"
      />
      <div className={styles.logInInner} onClick={onRectangleClick} />
      <div className={styles.div1}>
        <p className={styles.p}>ログイン</p>
      </div>
      <div className={styles.div2}>
        <p className={styles.p}>パスワード</p>
      </div>
      <div className={styles.div3}>
        <p className={styles.p}>メール</p>
      </div>
      <div className={styles.rectangleDiv} />
      <div className={styles.div4}>ログインに失敗しました</div>
      <div className={styles.div5}>ｘ</div>
    </div>
  );
};

export default LogIn;
