import Room from "@/app/(afterLogin)/messages/_component/Room";
import style from "@/app/(afterLogin)/messages/message.module.css";

export function MessagePage() {
  return (
    <main className={style.main}>
      <div className={style.header}>
        <h3>쪽지</h3>
      </div>
      <Room />
      <Room />
      <Room />
      <Room />
      <Room />
      <Room />
    </main>
  );
}
