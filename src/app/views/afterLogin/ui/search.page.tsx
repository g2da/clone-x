import BackButton from "@/app/(afterLogin)/_component/BackButton";
import SearchForm from "@/app/(afterLogin)/_component/SearchForm";
import Tab from "@/app/(afterLogin)/home/_component/Tab";
import Post from "@/app/(afterLogin)/_component/post";
import style from "@/app/(afterLogin)/search/search.module.css";
import SearchResult from "@/app/(afterLogin)/search/_component/search-result";

interface SearchPageProps {
  searchParams: { q: string; f?: string; pf?: string };
}

export function SearchPage({ searchParams }: SearchPageProps) {
  return (
    <main className={style.main}>
      <div className={style.searchTop}>
        <div className={style.searchZone}>
          <div className={style.buttonZone}>
            <BackButton />
          </div>
          <div className={style.formZone}>
            <SearchForm q={searchParams.q} />
          </div>
        </div>
        <Tab />
      </div>
      <div className={style.list}>
        <SearchResult searchParams={searchParams} />
      </div>
    </main>
  );
}
