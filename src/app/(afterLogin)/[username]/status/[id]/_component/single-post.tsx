"use client";

import Post from "@/app/(afterLogin)/_component/post";
import { useQuery } from "@tanstack/react-query";
import type { Post as IPost } from "@/model/post";
import { getSinglePost } from "../_lib/get-single-post";

interface SinglePostProps {
  id: string;
  noImage?: boolean;
}

export default function SinglePost({ id, noImage }: SinglePostProps) {
  const { data: post, error } = useQuery<
    IPost,
    Object,
    IPost,
    [_1: string, _2: string]
  >({
    queryKey: ["posts", id],
    queryFn: getSinglePost,
    staleTime: 60 * 1000, // fresh -> stale, 5분이라는 기준
    gcTime: 300 * 1000,
  });
  if (error) {
    return (
      <div
        style={{
          height: 100,
          alignItems: "center",
          fontSize: 31,
          fontWeight: "bold",
          justifyContent: "center",
          display: "flex",
        }}
      >
        게시글을 찾을 수 없습니다.
      </div>
    );
  }
  if (!post) {
    return null;
  }
  return <Post key={post.postId} post={post} noImage={noImage} />;
}
