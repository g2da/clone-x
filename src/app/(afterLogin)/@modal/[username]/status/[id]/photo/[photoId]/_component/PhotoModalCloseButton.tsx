"use client";

import style from "../photoModal.module.css";
import React from "react";
import { useRouter } from "next/navigation";
import { CancelIcon } from "@icons/icons";

export default function PhotoModalCloseButton() {
  const router = useRouter();
  const onClick = () => {
    router.back();
  };
  return (
    <button className={style.closeButton} onClick={onClick}>
      <CancelIcon />
    </button>
  );
}
