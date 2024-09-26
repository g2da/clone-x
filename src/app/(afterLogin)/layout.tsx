import FollowRecommend from "@/app/(afterLogin)/_component/FollowRecommend";
import LogoutButton from "@/app/(afterLogin)/_component/LogoutButton";
import NavMenu from "@/app/(afterLogin)/_component/NavMenu";
import TrendSection from "@/app/(afterLogin)/_component/TrendSection";
import style from "@/app/(afterLogin)/layout.module.css";
import { auth } from "@/auth";
import chiikawa from "@images/chiikawa.png";
import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren, ReactNode } from "react";
import RightSearchZone from "./_component/RightSearchZone";

interface AfterLoginLayoutProps extends PropsWithChildren {
  modal: ReactNode;
}

export default async function AfterLoginLayout({
  children,
  modal,
}: AfterLoginLayoutProps) {
  const session = await auth();
  return (
    <div className={style.container}>
      <header className={style.leftSectionWrapper}>
        <section className={style.leftSection}>
          <div className={style.leftSectionFixed}>
            <Link
              className={style.logo}
              href={session?.expires ? "/home" : "/"}>
              <div className={style.logoPill}>
                <Image
                  src={chiikawa}
                  alt="치이카와"
                  width={50}
                  height={50}
                  style={{ width: 50, height: 50 }}
                />
              </div>
            </Link>
            {session?.user ? (
              <>
                <nav>
                  <ul>
                    <NavMenu />
                  </ul>
                  <Link href="/compose/tweet" className={style.postButton}>
                    게시하기
                  </Link>
                </nav>
                <LogoutButton />
              </>
            ) : null}
          </div>
        </section>
      </header>
      <div className={style.rightSectionWrapper}>
        <div className={style.rightSectionInner}>
          <main className={style.main}>{children}</main>
          <section className={style.rightSection}>
            <RightSearchZone />
            <TrendSection />
            <div className={style.followRecommend}>
              <h3>팔로우 추천</h3>
              <FollowRecommend />
              <FollowRecommend />
              <FollowRecommend />
            </div>
          </section>
        </div>
      </div>
      {modal}
    </div>
  );
}
