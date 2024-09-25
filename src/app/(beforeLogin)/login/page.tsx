"use client";

import { BeforeLoginHomePage } from "@/app/views/beforeLogin/ui/before-login-home.page";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage(): React.JSX.Element | null {
  const router = useRouter();
  const session = useSession();
  if (session) {
    router.replace("/home");
    return null;
  }
  router.replace("/i/flow/login");
  return <BeforeLoginHomePage />;
}
