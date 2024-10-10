"use client";

import { useContext } from "react";
import { TabContext } from "@/app/(afterLogin)/home/_component/TabProvider";
import PostRecommends from "./post-recommends";
import FollowingPosts from "./following-posts";

export default function TabDecider() {
  const { tab } = useContext(TabContext);
  if (tab === "rec") {
    return <PostRecommends />;
  }
  return <FollowingPosts />;
}
