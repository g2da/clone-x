"use client";

import { BackIcon } from "@icons/icons";
import style from "./_css/backButton.module.css";

export default function BackButton() {
  return (
    <button className={style.backButton}>
      <BackIcon />
    </button>
  );
}
