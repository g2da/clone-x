"use client";

import Trend from "@/app/(afterLogin)/_component/Trend";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import style from "./_css/trendSection.module.css";

export default function TrendSection(): React.JSX.Element | null {
  const pathname = usePathname();
  const { data } = useSession();
  if (pathname === "/explore") return null;
  if (data?.user) {
    return (
      <div className={style.trendBg}>
        <div className={style.trend}>
          <h3>나를 위한 트렌드</h3>
          <Trend />
          <Trend />
          <Trend />
          <Trend />
          <Trend />
          <Trend />
          <Trend />
        </div>
      </div>
    );
  }
  return (
    <div className={style.trendBg}>
      <div className={style.noTrend}>트렌드를 가져올 수 없습니다.</div>
    </div>
  );
}
