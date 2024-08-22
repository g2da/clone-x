"use client";

import Trend from "@/app/(afterLogin)/_component/Trend";
import style from "./_css/trendSection.module.css";
import { usePathname } from "next/navigation";

export default function TrendSection(): React.JSX.Element | null {
  const pathname = usePathname();
  if (pathname === "/explore") return null;

  return (
    <div className={style.trendBg}>
      <div className={style.trend}>
        <h3>나를 위한 트렌드</h3>
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
      </div>
    </div>
  );
}
