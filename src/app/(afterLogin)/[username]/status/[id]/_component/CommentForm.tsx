"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ImageIcon } from "@icons/icons";
import style from "./commentForm.module.css";

export default function CommentForm() {
  const [content, setContent] = useState("");
  const imageRef = useRef<HTMLInputElement>(null);
  const onClickButton = () => {};
  const onSubmit = () => {};
  const onChange = () => {};

  const me = {
    id: "rakko",
    src: "/images/ra.png",
  };

  return (
    <form className={style.postForm} onSubmit={onSubmit}>
      <div className={style.postUserSection}>
        <div className={style.postUserImage}>
          <Image src={me.src} alt={me.id} width={20} height={20} />
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
