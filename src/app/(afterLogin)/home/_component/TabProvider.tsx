"use client";

import { createContext, PropsWithChildren, useState } from "react";

type TabItem = "rec" | "fol";
export const TabContext = createContext({
  tab: "rec",
  setTab: (value: TabItem) => {},
});

export default function TabProvider({ children }: PropsWithChildren) {
  const [tab, setTab] = useState("rec");

  return (
    <TabContext.Provider value={{ tab, setTab }}>
      {children}
    </TabContext.Provider>
  );
}
