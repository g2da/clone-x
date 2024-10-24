import BackButton from "@/app/(afterLogin)/_component/BackButton";
import CommentForm from "./_component/comment-form";
import style from "./singlePost.module.css";
import Comments from "./_component/comments";
import SinglePost from "./_component/single-post";

interface SinglePostPageProps {
  params: { id: string; username: string };
}

export default function SinglePostPage({ params }: SinglePostPageProps) {
  const { id } = params;

  return (
    <div className={style.main}>
      <div className={style.header}>
        <BackButton />
        <h3 className={style.headerTitle}>게시하기</h3>
      </div>
      {/* <Post post={} /> */}
      <SinglePost id={id} />
        <CommentForm id={id} />
      <div>
        <Comments id={id} />
      </div>
    </div>
  );
}
