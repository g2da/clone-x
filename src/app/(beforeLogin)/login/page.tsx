"use client";

import { BeforeLoginHomePage } from "@/app/views/beforeLogin/ui/before-login-home.page";
import { useRouter } from "next/navigation";

export default function LoginPage(): React.JSX.Element {
  const router = useRouter();
  router.replace("/i/flow/login");
  return <BeforeLoginHomePage />;
}
