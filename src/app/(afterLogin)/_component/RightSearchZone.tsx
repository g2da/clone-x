"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import SearchForm from "./SearchForm";
import style from "./_css/rightSearchZone.module.css";

export default function RightSearchZone(): React.JSX.Element | null {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  if (pathname === "/explore") return null;

  const onChangeFollow = () => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("pf", "on");
    router.replace(`/search?${newSearchParams.toString()}`);
  };
  const onChangeAll = () => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.delete("pf");
    router.replace(`/search?${newSearchParams.toString()}`);
  };

  if (pathname === "/search") {
    return (
      <div>
        <h5 className={style.filterTitle}>검색 필터</h5>
        <div className={style.filterSection}>
          <div>
            <label>사용자</label>
            <div className={style.radio}>
              <div>모든 사용자</div>
              <input
                type="radio"
                name="user"
                defaultChecked
                onChange={onChangeAll}
              />
            </div>
            <div className={style.radio}>
              <div>내가 팔로우하는 사람들</div>
              <input
                type="radio"
                name="user"
                value="on"
                onChange={onChangeFollow}
              />
            </div>
          </div>
          <div>
            <label>위치</label>
            <div className={style.radio}>
              <div>어디에서나</div>
              <input
                type="radio"
                name="location"
                defaultChecked
                onChange={onChangeAll}
              />
            </div>
            <div className={style.radio}>
              <div>현 위치 주변</div>
              <input
                type="radio"
                name="location"
                value="on"
                onChange={onChangeFollow}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div style={{ marginBottom: 60, width: "inherit" }}>
      <SearchForm />
    </div>
  );
}
