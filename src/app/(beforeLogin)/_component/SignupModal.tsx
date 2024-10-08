"use client";
/* eslint-disable no-unused-vars -- 나중에 사용 예정 */

import style from "@/app/(beforeLogin)/_component/_css/signup.module.css";
import { useFormState, useFormStatus } from "react-dom";
import { onSubmit } from "../_lib/signup";
import BackButton from "./BackButton";

export default function SignupModal(): React.JSX.Element {
  const [state, formAction] = useFormState(onSubmit, { message: null });
  const { pending } = useFormStatus();
  return (
    <div className={style.modalBackground}>
      <div className={style.modal}>
        <div className={style.modalHeader}>
          <BackButton />
          <div>계정을 생성하세요.</div>
        </div>
        <form action={formAction}>
          <div className={style.modalBody}>
            <div className={style.inputDiv}>
              <label className={style.inputLabel} htmlFor="id">
                아이디
              </label>
              <input
                id="id"
                name="id"
                className={style.input}
                type="text"
                placeholder="id"
                required
              />
            </div>
            <div className={style.inputDiv}>
              <label className={style.inputLabel} htmlFor="name">
                닉네임
              </label>
              <input
                id="name"
                name="name"
                className={style.input}
                type="text"
                placeholder="name"
                required
              />
            </div>
            <div className={style.inputDiv}>
              <label className={style.inputLabel} htmlFor="password">
                비밀번호
              </label>
              <input
                id="password"
                name="password"
                className={style.input}
                type="password"
                placeholder="password"
                required
              />
            </div>
            <div className={style.inputDiv}>
              <label className={style.inputLabel} htmlFor="image">
                프로필
              </label>
              <input
                id="image"
                name="image"
                className={style.input}
                type="file"
                accept="image/*"
                required
              />
            </div>
          </div>
          <div className={style.modalFooter}>
            <button
              type="submit"
              className={style.actionButton}
              disabled={pending}>
              가입하기
            </button>
            <div className={style.error}>{showMessage(state?.message)}</div>{" "}
          </div>
        </form>
      </div>
    </div>
  );
}

function showMessage(message: string | null | undefined) {
  if (message === "no_id") {
    return "아이디가 없습니다.";
  }
  if (message === "no_name") {
    return "닉네임가 없습니다.";
  }
  if (message === "no_password") {
    return "비밀번호가 없습니다.";
  }
  if (message === "no_image") {
    return "이미지를 업로드해주세요.";
  }
  if (message === "user_exists") {
    return "이미 사용 중인 아이디입니다.";
  }
  return "";
}
