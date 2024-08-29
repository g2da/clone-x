"use client";

import {
  HomeIcon,
  MessageIcon,
  NavSearchIcon,
  ProfileIcon,
} from "@icons/icons";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import style from "./_css/navMenu.module.css";

export default function NavMenu(): React.JSX.Element {
  const segment = useSelectedLayoutSegment();
  const me = {
    // 임시로 내 정보 있는것처럼
    id: "g2g2",
  };

  return (
    <>
      <li>
        <Link href="/home">
          <div className={style.navPill}>
            {segment === "home" ? (
              <>
                <HomeIcon />
                <div style={{ fontWeight: "bold" }}>홈</div>
              </>
            ) : (
              <>
                <HomeIcon />
                <div>홈</div>
              </>
            )}
          </div>
        </Link>
      </li>
      <li>
        <Link href="/explore">
          <div className={style.navPill}>
            {segment && ["search", "explore"].includes(segment) ? (
              <>
                <NavSearchIcon />
                <div style={{ fontWeight: "bold" }}>탐색하기</div>
              </>
            ) : (
              <>
                <NavSearchIcon />
                <div>탐색하기</div>
              </>
            )}
          </div>
        </Link>
      </li>
      <li>
        <Link href="/messages">
          <div className={style.navPill}>
            {segment === "messages" ? (
              <>
                <MessageIcon />
                <div style={{ fontWeight: "bold" }}>쪽지</div>
              </>
            ) : (
              <>
                <MessageIcon />
                <div>쪽지</div>
              </>
            )}
          </div>
        </Link>
      </li>
      {me?.id && (
        <li>
          <Link href={`/${me?.id}`}>
            <div className={style.navPill}>
              {segment === me.id ? (
                <>
                  <ProfileIcon />
                  <div style={{ fontWeight: "bold" }}>프로필</div>
                </>
              ) : (
                <>
                  <ProfileIcon />
                  <div>프로필</div>
                </>
              )}
            </div>
          </Link>
        </li>
      )}
    </>
  );
}