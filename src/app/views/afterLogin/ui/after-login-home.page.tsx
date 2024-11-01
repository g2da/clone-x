import PostForm from "@/app/(afterLogin)/home/_component/PostForm";
import Tab from "@/app/(afterLogin)/home/_component/Tab";
import TabProvider from "@/app/(afterLogin)/home/_component/TabProvider";
import style from "@/app/(afterLogin)/home/_component/_css/home.module.css";
import { auth } from "@/auth";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { Metadata } from "next";
import { Suspense } from "react";
import { getPostRecommends } from "../lib/get-post-recommends";
import Loading from "./after-login-home.loading";
import TabDeciderSuspense from "./tab-decider-suspense";

export const metadata: Metadata = {
  title: "홈",
  description: "홈",
};

export async function AfterLoginHomePage(): Promise<React.JSX.Element> {
  const session = await auth();
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: ["posts", "recommends"],
    queryFn: getPostRecommends,
    initialPageParam: 0,
  });
  const dehydrateState = dehydrate(queryClient);

  return (
    <main className={style.main}>
      <HydrationBoundary state={dehydrateState}>
        <TabProvider>
          <Tab />
          <PostForm me={session} />
          <Suspense fallback={<Loading />}>
            <TabDeciderSuspense />
          </Suspense>
        </TabProvider>
      </HydrationBoundary>
    </main>
  );
}
