"use client";

import Post from "@/app/(afterLogin)/_component/post";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import type { Post as IPost } from "@/model/post";
import { getComments } from "../_lib/get-comments";

interface CommentsProps {
  id: string;
}

export default function Comments({ id }: CommentsProps) {
  const queryClient = useQueryClient();
  const post = queryClient.getQueryData(["posts", id]);

  const { data } = useQuery<
    IPost[],
    Object,
    IPost[],
    [_1: string, _2: string, _3: string]
  >({
    queryKey: ["posts", id, "comments"],
    queryFn: getComments,
    staleTime: 60 * 1000, // fresh -> stale, 5분이라는 기준
    gcTime: 300 * 1000,
    enabled: !!post,
  });

  return post
    ? data?.map((post) => <Post post={post} key={post.postId} />)
    : null;
}
