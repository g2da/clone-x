import SearchForm from "../_component/SearchForm";
import Trend from "../_component/Trend";
import TrendSection from "../_component/TrendSection";
import style from "./explore.module.css";

export default function ExplorePage() {
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
