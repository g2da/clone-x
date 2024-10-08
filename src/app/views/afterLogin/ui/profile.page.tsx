import Image from "next/image";
import style from "@/app/(afterLogin)/[username]/profile.module.css";
import BackButton from "@/app/(afterLogin)/_component/BackButton";
import Post from "@/app/(afterLogin)/_component/post";

export function ProfilePage() {
  const user = {
    src: "/images/ra.png",
    id: "rakko",
    nickname: "랏코",
  };

  return (
    <main className={style.main}>
      <div className={style.header}>
        <BackButton />
        <h3 className={style.headerTitle}>{user.nickname}</h3>
      </div>
      <div className={style.userZone}>
        <div className={style.userImage}>
          <Image
            src={user.src}
            alt={user.id}
            width={132}
            height={132}
            style={{ width: 132, height: 132 }}
          />
        </div>
        <div className={style.userName}>
          <div>{user.nickname}</div>
          <div>@{user.id}</div>
        </div>
        <button className={style.followButton}>팔로우</button>
      </div>
      <div>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </main>
  );
}
