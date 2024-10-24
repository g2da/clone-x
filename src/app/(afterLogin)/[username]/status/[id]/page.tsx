import BackButton from "@/app/(afterLogin)/_component/BackButton";
import CommentForm from "./_component/comment-form";
import style from "./singlePost.module.css";
import Comments from "./_component/comments";
import SinglePost from "./_component/single-post";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getSinglePost } from "./_lib/get-single-post";
import { getComments } from "./_lib/get-comments";

interface SinglePostPageProps {
  params: { id: string; username: string };
}

export default async function SinglePostPage({ params }: SinglePostPageProps) {
  const { id } = params;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["posts", id],
    queryFn: getSinglePost,
  });
  await queryClient.prefetchQuery({
    queryKey: ["posts", id, "comments"],
    queryFn: getComments,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <div className={style.main}>
      {/* FIXME: HydrationBoundary 확인  */}
      <HydrationBoundary state={dehydratedState}>
        <div className={style.header}>
          <BackButton />
          <h3 className={style.headerTitle}>게시하기</h3>
        </div>
        <SinglePost id={id} />
        <CommentForm id={id} />
        <div>
          <Comments id={id} />
        </div>
      </HydrationBoundary>
    </div>
  );
}
