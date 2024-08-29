"use client";

import Image from "next/image";
import style from "./_css/logoutButton.module.css";

export default function LogoutButton(): React.JSX.Element {
  const me = {
    src: "/images/ra.png",
    id: "rakko",
    nickname: "랏코",
  };

  const onLogout = () => {};

  return (
    <button className={style.logOutButton} onClick={onLogout}>
      <div className={style.logOutUserImage}>
        <Image
          src={me.src}
          alt={me.id}
          width={50}
          height={50}
          style={{ width: 50, height: 50 }}
        />
      </div>
      <div className={style.logOutUserName}>
        <div>{me.nickname}</div>
        <div>@{me.id}</div>
      </div>
    </button>
  );
}
