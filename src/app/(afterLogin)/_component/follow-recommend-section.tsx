"use client";

import { User } from "@/model/user";
import { useQuery } from "@tanstack/react-query";
import { getFollowRecommends } from "../_lib/get-follow-recommends";
import FollowRecommend from "./follow-recommend";

export default function FollowRecommendSection() {
  const { data } = useQuery<User[]>({
    queryKey: ["users", "followRecommends"],
    queryFn: getFollowRecommends,
    staleTime: 60 * 1000, // fresh -> stale, 5분이라는 기준
    gcTime: 300 * 1000,
  });

  return data?.map((user) => <FollowRecommend user={user} key={user.id} />);
}
