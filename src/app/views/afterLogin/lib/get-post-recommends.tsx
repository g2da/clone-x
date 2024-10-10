export async function getFollowingPosts() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/followings`,
      {
        next: {
          tags: ["posts", "followings"],
        },
        credentials: "include",
        cache: "no-store",
      }
    );

    if (!res.ok) {
      console.error("Failed to fetch data:", res.status, res.statusText);
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    console.log("Fetched data:", data); // 데이터 구조 확인용
    return data;
  } catch (error) {
    console.error("Error in getFollowingPosts:", error);
    throw error;
  }
}
