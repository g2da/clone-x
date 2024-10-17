import SearchForm from "@/app/(afterLogin)/_component/search-form";
import TrendSection from "@/app/(afterLogin)/_component/trend-section";
import style from "@/app/(afterLogin)/explore/explore.module.css";

export function ExplorePage(): React.JSX.Element {
  return (
    <>
      <div className={style.formZone}>
        <SearchForm />
      </div>
      <div className={style.trend}>
        <TrendSection />
      </div>
    </>
  );
}
