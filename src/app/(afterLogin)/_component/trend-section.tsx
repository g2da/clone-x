"use client";

import style from "./_css/trendSection.module.css";
import { useQuery } from "@tanstack/react-query";
import { Hashtag } from "@/model/hashtag";
import { getTrends } from "../_lib/get-trends";
import { useSession } from "next-auth/react";
import Trend from "./Trend";

export default function TrendSection(): React.JSX.Element | null {
  const { data: session } = useSession();

  const { data } = useQuery<Hashtag[]>({
    queryKey: ["trends"],
    queryFn: getTrends,
    staleTime: 60000, // fresh -> stale, 5분이라는 기준
    gcTime: 300000,
    enabled: !!session?.user,
  });

  if (session?.user) {
    return (
      <div className={style.trendBg}>
        <div className={style.trend}>
          <h3>나를 위한 트렌드</h3>
          {data?.map((trend) => <Trend trend={trend} key={trend.tagId} />)}
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
