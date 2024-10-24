"use client";

import type { Post as IPost } from "@/model/post";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import Post from "../../_component/post";
import { getUserPosts } from "../_lib/get-user-posts";

interface UserPostsProps {
  username: string;
}

export default function UserPosts({ username }: UserPostsProps) {
  const { data } = useQuery<
    IPost[],
    Object,
    IPost[],
    [_1: string, _2: string, _3: string]
  >({
    queryKey: ["posts", "users", username],
    queryFn: getUserPosts,
    staleTime: 60 * 1000, // fresh -> stale, 5분이라는 기준
    gcTime: 300 * 1000,
  });

  const queryClient = useQueryClient();
  const user = queryClient.getQueryData(["users", username]);
  console.log("user", user);

  return user
    ? data?.map((post) => <Post key={post.postId} post={post} />)
    : null;
}
