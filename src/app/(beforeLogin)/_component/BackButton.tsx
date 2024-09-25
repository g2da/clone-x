"use client";

import { BackIcon } from "@icons/icons";
import { useRouter } from "next/navigation";
import style from "./_css/backButton.module.css";

export default function BackButton() {
  const router = useRouter();
  const onClickClose = () => {
    router.back();
    // TODO: 뒤로가기가 /home이 아니면 /home으로 보내기
  };

  return (
    <button className={style.backButton} onClick={onClickClose}>
      <BackIcon />
    </button>
  );
}
