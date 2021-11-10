import React from "react";
import Meta from "../../components/seo/Meta";
import style from "./login.module.scss";
import LoginForm from "./LoginForm/LoginForm";

const index = () => {
  return (
    <>
      <Meta
        title="Sonahang Rai - Personal Site"
        description="I am Sonang Rai"
        image=""
        twitterType="summary"
      />
      <div className={style.pg__login}>
        <div className={style.login__illus}></div>
        <div className={style.login__form}>
          <div className={style.logn__title}>
            <span>Hello Boss</span>
            <span>Welcome Back</span>
          </div>
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default index;
