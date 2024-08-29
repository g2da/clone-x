import { SearchIcon } from "@icons/icons";
import style from "./_css/rightSearchZone.module.css";

interface SearchFormProps {
  q?: string;
}

export default function SearchForm({ q }: SearchFormProps): React.JSX.Element {
  return (
    <form className={style.search}>
      <SearchIcon />
      <input type="search" />
    </form>
  );
}
