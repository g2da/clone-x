"use client";
import { Post } from "@/model/post";
import { CommentIcon, HeartIcon, RepostIcon } from "@icons/icons";
import { clsx } from "clsx";
import style from "./_css/post.module.css";

interface ActionButtonsProps {
  white?: boolean;
  post: Post;
}

export default function ActionButtons({
  white,
  post,
}: ActionButtonsProps): React.JSX.Element {
  const commented = true;
  const reposted = true;
  const liked = false;

  const onClickComment = () => {};
  const onClickRepost = () => {};
  const onClickHeart = () => {};

  return (
    <div className={style.actionButtons}>
      <div
        className={clsx(
          style.commentButton,
          { [style.commented]: commented },
          white && style.white
        )}>
        <button onClick={onClickComment}>
          <CommentIcon />
        </button>
        <div className={style.count}>{1 || ""}</div>
      </div>
      <div className={clsx(style.repostButton, reposted && style.reposted)}>
        <button onClick={onClickRepost}>
          <RepostIcon />
        </button>
        <div className={style.count}>{1 || ""}</div>
      </div>
      <div className={clsx([style.heartButton, liked && style.liked])}>
        <button onClick={onClickHeart}>
          <HeartIcon />
        </button>
        <div className={style.count}>{0 || ""}</div>
      </div>
    </div>
  );
}
