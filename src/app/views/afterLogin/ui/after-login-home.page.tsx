import PostForm from "@/app/(afterLogin)/home/_component/PostForm";
import Tab from "@/app/(afterLogin)/home/_component/Tab";
import TabProvider from "@/app/(afterLogin)/home/_component/TabProvider";
import style from "@/app/(afterLogin)/home/_component/_css/home.module.css";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getPostRecommends } from "../lib/get-post-recommends";
import PostRecommends from "./post-recommends";

export async function AfterLoginHomePage(): Promise<React.JSX.Element> {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["posts", "recommends"],
    queryFn: getPostRecommends,
  });
  const dehydrateState = dehydrate(queryClient);

  return (
    <main className={style.main}>
      <HydrationBoundary state={dehydrateState}>
        <TabProvider>
          <Tab />
          <PostForm />
          <PostRecommends />
        </TabProvider>
      </HydrationBoundary>
    </main>
  );
}
