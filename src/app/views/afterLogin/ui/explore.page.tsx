import SearchForm from "@/app/(afterLogin)/_component/SearchForm";
import Trend from "@/app/(afterLogin)/_component/Trend";
import TrendSection from "@/app/(afterLogin)/_component/TrendSection";
import style from "@/app/(afterLogin)/explore/explore.module.css";

export function ExplorePage(): React.JSX.Element {
  return (
    <>
      <div className={style.formZone}>
        <SearchForm />
      </div>
      <div className={style.trend}>
        <h3>나를 위한 트렌드</h3>
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <TrendSection />
      </div>
    </>
  );
}
