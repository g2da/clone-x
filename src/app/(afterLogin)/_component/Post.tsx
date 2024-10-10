import ActionButtons from "@/app/(afterLogin)/_component/ActionButtons";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import relativeTime from "dayjs/plugin/relativeTime";
import Image from "next/image";
import Link from "next/link";
import PostArticle from "./PostArticle";
import PostImages from "./PostImages";
import style from "./_css/post.module.css";
import type { Post } from "@/model/post";
import { MouseEventHandler } from "react";

dayjs.locale("ko");
dayjs.extend(relativeTime);

interface PostProps {
  noImage?: boolean;
  post: Post;
}

export default function Post({ noImage, post }: PostProps): React.JSX.Element {
  let target = post;
  // if (post.Original) {
  //   target = post.Original;
  // }

  const stopPropagation: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.stopPropagation();
  };

  return (
    <PostArticle post={target}>
      <div className={style.postWrapper}>
        <div className={style.postUserSection}>
          <Link
            href={`/${target.User.id}`}
            className={style.postUserImage}
            onClick={stopPropagation}
          >
            <Image
              src={target.User.image}
              alt={target.User.nickname}
              width={20}
              height={20}
            />
            <div className={style.postShade} />
          </Link>
        </div>
        <div className={style.postBody}>
          <div className={style.postMeta}>
            <Link href={`/${target.User.id}`} onClick={stopPropagation}>
              <span className={style.postUserName}>{target.User.nickname}</span>
              &nbsp;
              <span className={style.postUserId}>@{target.User.id}</span>
              &nbsp; · &nbsp;
            </Link>
            <span className={style.postDate}>
              {dayjs(target.createdAt).fromNow(true)}
            </span>
          </div>
          {target.Parent && (
            <div>
              <Link
                href={`/${target.Parent.User.id}`}
                style={{ color: "rgb(29, 155, 240)" }}
                onClick={stopPropagation}
              >
                @{target.Parent.User.id}
              </Link>{" "}
              님에게 보내는 답글
            </div>
          )}
          <div>{target.content}</div>
          {!noImage && (
            <div>
              <PostImages post={target} />
            </div>
          )}
          <ActionButtons />
        </div>
      </div>
    </PostArticle>
  );
}
