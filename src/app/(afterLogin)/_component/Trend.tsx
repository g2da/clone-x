import Link from "next/link";
import style from "./_css/trend.module.css";

export default function Trend(): React.JSX.Element {
  return (
    <Link href={`/search?q=트렌드`} className={style.container}>
      <div className={style.count}>실시간트렌드</div>
      <div className={style.title}>지투</div>
      <div className={style.count}>1,234 posts</div>
    </Link>
  );
}
