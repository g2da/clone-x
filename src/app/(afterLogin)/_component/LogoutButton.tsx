"use client";

import { Session } from "@auth/core/types";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import style from "./_css/logoutButton.module.css";

interface LogoutButtonProps {
  me: Session | null;
}

export default function LogoutButton({
  me,
}: LogoutButtonProps): React.JSX.Element | null {
  const router = useRouter();

  const onLogout = () => {
    signOut({ redirect: false }).then(() => {
      router.replace("/");
    });
  };

  if (!me?.user) return null;

  return (
    <button className={style.logOutButton} onClick={onLogout}>
      <div className={style.logOutUserImage}>
        <Image
          src={String(me.user?.image)}
          alt={String(me.user?.id)}
          width={50}
          height={50}
          style={{ width: 50, height: 50 }}
        />
      </div>
      <div className={style.logOutUserName}>
        <div>{me.user?.name}</div>
        <div>@{me.user?.email}</div>
      </div>
    </button>
  );
}
