interface getPostRecommendsProps {
  pageParam?: number;
}
export async function getPostRecommends({ pageParam }: getPostRecommendsProps) {
  const res = await fetch(
    `http://localhost:9090/api/posts/recommends?cursor=${pageParam}`,
    {
      next: {
        tags: ["posts", "recommends"],
      },
      cache: "no-store",
    }
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
