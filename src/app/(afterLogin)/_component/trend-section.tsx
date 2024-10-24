"use client";

import { Hashtag } from "@/model/hashtag";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { getTrends } from "../_lib/get-trends";
import Trend from "./Trend";

export default function TrendSection() {
  const { data: session } = useSession();

  const { data } = useQuery<Hashtag[]>({
    queryKey: ["trends"],
    queryFn: getTrends,
    staleTime: 60000, // fresh -> stale, 5분이라는 기준
    gcTime: 300000,
    enabled: !!session?.user,
  });

  return data?.map((trend) => <Trend trend={trend} key={trend.tagId} />);
}
