"use client";

import { SearchIcon } from "@icons/icons";
import style from "./_css/rightSearchZone.module.css";
import { useRouter } from "next/navigation";
import { FormEventHandler } from "react";

interface SearchFormProps {
  q?: string;
}

export default function SearchForm({ q }: SearchFormProps): React.JSX.Element {
  const router = useRouter();
  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    router.push(`/search?q=${e.currentTarget.search.value}`);
  };

  return (
    <form className={style.search} onSubmit={onSubmit}>
      <SearchIcon />
      <input type="search" name="search" />
    </form>
  );
}
