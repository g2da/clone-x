"use client";

import style from "./modal.module.css";
import { useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CancelIcon, ImageIcon } from "@icons/icons";

const me = {
  id: "woosagi",
  src: "/images/woo.png",
};

export default function TweetModal(): React.JSX.Element {
  const router = useRouter();
  const [content, setContent] = useState();
  const imageRef = useRef<HTMLInputElement>(null);
  const onSubmit = () => {};
  const onClickClose = () => {
    router.back();
  };
  const onClickButton = () => {};
  const onChangeContent = () => {};

  return (
    <div className={style.modalBackground}>
      <div className={style.modal}>
        <button className={style.closeButton} onClick={onClickClose}>
          <CancelIcon />
        </button>
        <form className={style.modalForm} onSubmit={onSubmit}>
          <div className={style.modalBody}>
            <div className={style.postUserSection}>
              <div className={style.postUserImage}>
                <Image src={me.src} alt={me.id} width={20} height={20} />
              </div>
            </div>
            <div className={style.inputDiv}>
              <textarea
                className={style.input}
                placeholder="무슨 일이 일어나고 있나요?"
                value={content}
                onChange={onChangeContent}
              />
            </div>
          </div>
          <div className={style.modalFooter}>
            <div className={style.modalDivider} />
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
        </form>
      </div>
    </div>
  );
}
