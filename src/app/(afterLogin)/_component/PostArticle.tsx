"use client";

import { useRouter } from "next/navigation";
import { PropsWithChildren } from "react";
import style from "./_css/post.module.css";

interface PostArticleProps extends PropsWithChildren {
  post: {
    postId: number;
    content: string;
    User: {
      id: string;
      nickname: string;
      image: string;
    };
    createdAt: Date;
  };
}

export default function PostArticle({ children, post }: PostArticleProps) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/${post.User.id}/status/${post.postId}`);
  };

  return (
    <article onClickCapture={onClick} className={style.post}>
      {children}
    </article>
  );
}
