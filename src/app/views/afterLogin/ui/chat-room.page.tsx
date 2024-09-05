import { faker } from "@faker-js/faker";
import Link from "next/link";
import BackButton from "@/app/(afterLogin)/_component/BackButton";
import clsx from "clsx";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
import Image from "next/image";
import style from "@/app/(afterLogin)/messages/[room]/chatRoom.module.css";

import "dayjs/locale/ko";

dayjs.locale("ko");
dayjs.extend(relativeTime);

export function ChatRoomPage() {
  const user = {
    id: "g1g1",
    nickname: "지원",
    image: faker.image.avatar(),
  };
  const messages = [
    {
      messageId: 1,
      roomId: 123,
      id: "g1g1",
      content: "안녕하세요.",
      createdAt: new Date(),
    },
    {
      messageId: 2,
      roomId: 123,
      id: "g3g3",
      content: "안녕히가세요.",
      createdAt: new Date(),
    },
  ];

  return (
    <main className={style.main}>
      <div className={style.header}>
        <BackButton />
        <div>
          <h2>{user.nickname}</h2>
        </div>
      </div>
      <Link href={user.nickname} className={style.userInfo}>
        <Image src={user.image} alt={user.id} width={20} height={20} />
        <div>
          <b>{user.nickname}</b>
        </div>
        <div>@{user.id}</div>
      </Link>
      <div className={style.list}>
        {messages.map((m) => {
          if (m.id === "g1g1") {
            // 내 메시지면
            return (
              <div
                key={m.messageId}
                className={clsx(style.message, style.clsx)}
              >
                <div className={style.content}>{m.content}</div>
                <div className={style.date}>
                  {dayjs(m.createdAt).format("YYYY년 MM월 DD일 A HH시 mm분")}
                </div>
              </div>
            );
          }
          return (
            <div key={m.messageId} className={clsx(style.message, style.clsx)}>
              <div className={style.content}>{m.content}</div>
              <div className={style.date}>
                {dayjs(m.createdAt).format("YYYY년 MM월 DD일 A HH시 mm분")}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
