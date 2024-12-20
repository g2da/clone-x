"use client";

import { CancelIcon, ImageIcon } from "@icons/icons";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEventHandler, useRef, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import style from "./modal.module.css";

export default function TweetModal(): React.JSX.Element | null {
  const router = useRouter();
  const { data: me } = useSession();

  // eslint-disable-next-line no-unused-vars -- 나중에 사용 예정
  const [content, setContent] = useState();
  const [preview, setPreview] = useState<
    Array<{ dataUrl: string; file: File } | null>
  >([]);
  const imageRef = useRef<HTMLInputElement>(null);
  const onSubmit = () => {};
  const onClickClose = () => {
    router.back();
  };
  const onClickButton = () => {};
  const onChangeContent = () => {};
  const onUpload: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    if (e.target.files) {
      Array.from(e.target.files).forEach((file, index) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview((prevPreview) => {
            const prev = [...prevPreview];
            prev[index] = {
              dataUrl: reader.result as string,
              file,
            };
            return prev;
          });
        };
        reader.readAsDataURL(file);
      });
    }
  };
  if (!me?.user) return null;

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
                <Image
                  src={String(me.user.image)}
                  alt={String(me.user.id)}
                  width={20}
                  height={20}
                />
              </div>
            </div>
            <div className={style.inputDiv}>
              <TextareaAutosize
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
                  onChange={onUpload}
                  ref={imageRef}
                />
                <button
                  className={style.uploadButton}
                  type="button"
                  onClick={onClickButton}>
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
