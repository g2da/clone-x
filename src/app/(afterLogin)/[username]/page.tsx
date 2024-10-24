import { ProfilePage } from "@/app/views/afterLogin";
import { ComponentProps } from "react";

interface PageProps extends ComponentProps<typeof ProfilePage> {}

export default function Page({ params }: PageProps) {
  return <ProfilePage params={params} />;
}
