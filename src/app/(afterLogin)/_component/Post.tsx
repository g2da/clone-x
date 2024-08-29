import ActionButtons from "@/app/(afterLogin)/_component/ActionButtons";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import relativeTime from "dayjs/plugin/relativeTime";
import Image from "next/image";
import Link from "next/link";
import style from "./_css/post.module.css";
import PostArticle from "./PostArticle";

dayjs.locale("ko");
dayjs.extend(relativeTime);

export default function Post(): React.JSX.Element {
  const target = {
    postId: 1,
    User: {
      id: "hachiware",
      nickname: "하치와레",
      image: "/images/ha.png",
    },
    content: "반가워용",
    createdAt: new Date(),
  };
  return (
    <PostArticle post={target}>
      <div className={style.postWrapper}>
        <div className={style.postUserSection}>
          <Link href={`/${target.User.id}`} className={style.postUserImage}>
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
            <Link href={`/${target.User.id}`}>
              <span className={style.postUserName}>{target.User.nickname}</span>
              &nbsp;
              <span className={style.postUserId}>@{target.User.id}</span>
              &nbsp; · &nbsp;
            </Link>
            <span className={style.postDate}>
              {dayjs(target.createdAt).fromNow(true)}
            </span>
          </div>
          <div>{target.content}</div>
          <div className={style.postImageSection} />
          <ActionButtons />
        </div>
      </div>
    </PostArticle>
  );
}
