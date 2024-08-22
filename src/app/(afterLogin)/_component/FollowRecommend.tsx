"use client";

import mo from "@images/mo.png";
import Image from "next/image";
import style from "./_css/followRecommend.module.css";
export default function FollowRecommend(): React.JSX.Element {
  const onFollow = () => {};

  const user = {
    id: "momonga",
    nickname: "모몽가",
  };

  return (
    <div className={style.container}>
      <div className={style.userLogoSection}>
        <div className={style.userLogo}>
          <Image
            src={mo}
            alt={user.id}
            width={50}
            height={50}
            style={{ width: 50, height: 50 }}
          />
        </div>
      </div>
      <div className={style.userInfo}>
        <div className={style.title}>{user.nickname}</div>
        <div className={style.count}>@{user.id}</div>
      </div>
      <div className={style.followButtonSection}>
        <button onClick={onFollow}>팔로우</button>
      </div>
    </div>
  );
}
