import FollowRecommend from "@/app/(afterLogin)/_component/FollowRecommend";
import LogoutButton from "@/app/(afterLogin)/_component/LogoutButton";
import NavMenu from "@/app/(afterLogin)/_component/NavMenu";
import TrendSection from "@/app/(afterLogin)/_component/TrendSection";
import style from "@/app/(afterLogin)/layout.module.css";
import { SearchIcon } from "@icons/icons";
import chiikawa from "@images/chiikawa.png";
import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren } from "react";

export default function AfterLoginLayout({ children }: PropsWithChildren) {
  return (
    <div className={style.container}>
      <header className={style.leftSectionWrapper}>
        <section className={style.leftSection}>
          <div className={style.leftSectionFixed}>
            <Link className={style.logo} href="/home">
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
            <nav>
              <ul>
                <NavMenu />
              </ul>
              <Link href="/compose/tweet" className={style.postButton}>
                게시하기
              </Link>
            </nav>
            <LogoutButton />
          </div>
        </section>
      </header>
      <div className={style.rightSectionWrapper}>
        <div className={style.rightSectionInner}>
          <main className={style.main}>{children}</main>
          <section className={style.rightSection}>
            <div style={{ marginBottom: 60, width: "inherit" }}>
              <form className={style.search}>
                <SearchIcon />
                <input type="search" />
              </form>
            </div>
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
    </div>
  );
}
