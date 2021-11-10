import React from "react";
import { useForm } from "react-hook-form";
import style from "./loginForm.module.scss";

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        className={style.input}
        {...register("username", { required: true })}
      />
      <input
        type="password"
        className={style.input}
        {...register("password", { required: true })}
      />
      <input type="submit" />
    </form>
  );
};

export default LoginForm;
