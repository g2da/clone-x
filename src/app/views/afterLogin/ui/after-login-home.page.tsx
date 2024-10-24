import PostForm from "@/app/(afterLogin)/home/_component/PostForm";
import TabProvider from "@/app/(afterLogin)/home/_component/TabProvider";
import style from "@/app/(afterLogin)/home/_component/_css/home.module.css";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { Suspense } from "react";
import TabDeciderSuspense from "./tab-decider-suspense";
import Loading from "./after-login-home.loading";
import Tab from "@/app/(afterLogin)/home/_component/Tab";
import { getPostRecommends } from "../lib/get-post-recommends";

export async function AfterLoginHomePage(): Promise<React.JSX.Element> {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["posts", "recommends"],
    queryFn: getPostRecommends,
  });
  const dehydrateState = dehydrate(queryClient);

  return (
    <main className={style.main}>
      {/* FIXME: HydrationBoundary 확인  */}
      <HydrationBoundary state={dehydrateState}>
        <TabProvider>
          <Tab />
          <PostForm />
          <Suspense fallback={<Loading />}>
            <TabDeciderSuspense />
          </Suspense>
        </TabProvider>
      </HydrationBoundary>
    </main>
  );
}
