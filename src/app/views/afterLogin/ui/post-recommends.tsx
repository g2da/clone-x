"use client";

import Post from "@/app/(afterLogin)/_component/post";
import type { Post as IPost } from "@/model/post";
import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";
import { Fragment, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { getPostRecommends } from "../lib/get-post-recommends";

export default function PostRecommends() {
  const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery<
    IPost[],
    Object,
    InfiniteData<IPost[]>,
    [_1: string, _2: string],
    number
  >({
    queryKey: ["posts", "recommends"],
    queryFn: getPostRecommends,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.at(-1)?.postId, // FIXME: error 확인
    staleTime: 60 * 1000, // fresh -> stale, 5분이라는 기준,
    gcTime: 300 * 1000, // cache time, 기본은 5분, 5분 뒤는 cache 날아감!, gcTime > staleTime
  });

  const { ref, inView } = useInView({
    threshold: 0.5, // 50% 정도 화면에 보여질 때 트리거
    delay: 100, // 100ms 지연 시간 추가
  });

  useEffect(() => {
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage();
    }
  }, [inView, isFetching, hasNextPage, fetchNextPage]);
  return (
    <>
      {data?.pages.map((page, i) => {
        console.log("page:", page);
        return (
          <Fragment key={i}>
            {Array.isArray(page) &&
              page.map((post) => <Post key={post.postId} post={post} />)}
          </Fragment>
        );
      })}
      <div ref={ref} style={{ height: 50 }} />
    </>
  );
}
