import Link from "next/link";
import style from "./_css/trend.module.css";
import { Hashtag } from "@/model/hashtag";

interface TrendProps {
  trend: Hashtag;
}

export default function Trend({ trend }: TrendProps): React.JSX.Element {
  return (
    <Link href="/search?q=트렌드" className={style.container}>
      <div className={style.count}>실시간트렌드</div>
      <div className={style.title}>{trend.title}</div>
      <div className={style.count}>{trend.count}</div>
    </Link>
  );
}
