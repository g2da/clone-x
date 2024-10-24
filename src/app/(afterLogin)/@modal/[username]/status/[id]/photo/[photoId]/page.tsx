import PhotoModalCloseButton from "@/app/(afterLogin)/@modal/[username]/status/[id]/photo/[photoId]/_component/PhotoModalCloseButton";
import CommentForm from "@/app/(afterLogin)/[username]/status/[id]/_component/CommentForm";
import Comments from "@/app/(afterLogin)/[username]/status/[id]/_component/comments";
import { getComments } from "@/app/(afterLogin)/[username]/status/[id]/_lib/get-comments";
import { getSinglePost } from "@/app/(afterLogin)/[username]/status/[id]/_lib/get-single-post";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import ImageZone from "./_component/image-zone";
import style from "./photoModal.module.css";

interface PhotoDetailModalProps {
  params: { id: string };
}
export default async function PhotoDetailModal({
  params,
}: PhotoDetailModalProps) {
  if (!params || !params.id) {
    return <div>Error: Invalid or missing ID</div>;
  }

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
    <div className={style.container}>
      <HydrationBoundary state={dehydratedState}>
        <PhotoModalCloseButton />
        <ImageZone id={id} />
        <div className={style.commentZone}>
          <CommentForm />
          <Comments id={id} />
        </div>
      </HydrationBoundary>
    </div>
  );
}
