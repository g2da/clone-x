import Trend from "@/app/(afterLogin)/_component/Trend";
import style from "./_css/trendSection.module.css";

export default function TrendSection(): React.JSX.Element {
  return (
    <div className={style.trendBg}>
      <div className={style.trend}>
        <h3>나를 위한 트렌드</h3>
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
      </div>
    </div>
  );
}
