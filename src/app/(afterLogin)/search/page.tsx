import { SearchPage } from "@/app/views/afterLogin";
import { ComponentProps } from "react";

export default function Page({
  searchParams,
}: ComponentProps<typeof SearchPage>) {
  return <SearchPage searchParams={searchParams} />;
}
