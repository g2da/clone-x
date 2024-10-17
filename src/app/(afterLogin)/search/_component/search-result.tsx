"use client";

import Post from "@/app/(afterLogin)/_component/post";
import type { Post as IPost } from "@/model/post";
import { useQuery } from "@tanstack/react-query";
import { getSearchResult } from "../lib/get-search-result";

interface SearchResultProps {
  searchParams: { q: string; f?: string; pf?: string };
}

export default function SearchResult({ searchParams }: SearchResultProps) {
  const { data } = useQuery<
    IPost[],
    Object,
    IPost[],
    [_1: string, _2: string, SearchResultProps["searchParams"]]
  >({
    queryKey: ["posts", "search", searchParams],
    queryFn: getSearchResult,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });

  return data?.map((post) => <Post key={post.postId} post={post} />);
}
