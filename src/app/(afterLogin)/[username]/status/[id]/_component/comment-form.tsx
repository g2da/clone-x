"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ImageIcon } from "@icons/icons";
import style from "./commentForm.module.css";
import { useSession } from "next-auth/react";
import { useQueryClient } from "@tanstack/react-query";

interface CommentFormProps {
  id: string;
}

export default function CommentForm({ id }: CommentFormProps) {
  const [content, setContent] = useState("");
  const imageRef = useRef<HTMLInputElement>(null);
  const onClickButton = () => {};
  const onSubmit = () => {};
  const onChange = () => {};

  const queryClient = useQueryClient();
  const post = queryClient.getQueryData(["posts", id]);

  const { data: me } = useSession();
  if (!me?.user) return null;

  if (!post) return null;

  return (
    <form className={style.postForm} onSubmit={onSubmit}>
      <div className={style.postUserSection}>
        <div className={style.postUserImage}>
          <Image
            src={String(me.user.image)}
            alt={String(me.user.id)}
            width={20}
            height={20}
          />
        </div>
      </div>
      <div className={style.postInputSection}>
        <textarea
          value={content}
          onChange={onChange}
          placeholder="답글 게시하기"
        />
        <div className={style.postButtonSection}>
          <div className={style.footerButtons}>
            <div className={style.footerButtonLeft}>
              <input
                type="file"
                name="imageFiles"
                multiple
                hidden
                ref={imageRef}
              />
              <button
                className={style.uploadButton}
                type="button"
                onClick={onClickButton}
              >
                <ImageIcon />
              </button>
            </div>
            <button className={style.actionButton} disabled={!content}>
              답글
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
