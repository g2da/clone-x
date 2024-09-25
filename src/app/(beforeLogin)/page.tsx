import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { BeforeLoginHomePage } from "../views/beforeLogin";

export default async function Page(): Promise<React.JSX.Element> {
  const session = await auth();
  if (session?.user) {
    redirect("/home");
  }
  return <BeforeLoginHomePage />;
}
