"use client";

import { ImageIcon } from "@icons/icons";
import woo from "@images/woo.png";
import Image from "next/image";
import { ChangeEventHandler, FormEventHandler, useRef, useState } from "react";
import style from "./_css/postForm.module.css";

export default function PostForm() {
  const imageRef = useRef<HTMLInputElement>(null);
  const [content, setContent] = useState("");
  const me = {
    id: "woosagi",
  };

  const onChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setContent(e.target.value);
  };

  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();
  };

  const onClickButton = () => {
    imageRef.current?.click();
  };

  return (
    <form className={style.postForm} onSubmit={onSubmit}>
      <div className={style.postUserSection}>
        <div className={style.postUserImage}>
          <Image src={woo} alt={me.id} width={50} height={50} />
        </div>
      </div>
      <div className={style.postInputSection}>
        <textarea
          value={content}
          onChange={onChange}
          placeholder="무슨 일이 일어나고 있나요?"
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
              게시하기
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
