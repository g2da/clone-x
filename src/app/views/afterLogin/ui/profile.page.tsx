import UserInfo from "@/app/(afterLogin)/[username]/_component/user-info";
import UserPosts from "@/app/(afterLogin)/[username]/_component/user-posts";
import { getUser } from "@/app/(afterLogin)/[username]/_lib/get-user";
import { getUserPosts } from "@/app/(afterLogin)/[username]/_lib/get-user-posts";
import style from "@/app/(afterLogin)/[username]/profile.module.css";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

interface ProfilePageProps {
  params: { username: string };
}

export async function ProfilePage({ params }: ProfilePageProps) {
  const { username } = params;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["users", username],
    queryFn: getUser,
  });
  await queryClient.prefetchQuery({
    queryKey: ["posts", "users", username],
    queryFn: getUserPosts,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <main className={style.main}>
      <HydrationBoundary state={dehydratedState}>
        <UserInfo username={username} />
        <div>
          <UserPosts username={username} />
        </div>
      </HydrationBoundary>
    </main>
  );
}
