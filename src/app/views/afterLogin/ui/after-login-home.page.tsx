import Post from "@/app/(afterLogin)/_component/Post";
import PostForm from "@/app/(afterLogin)/home/_component/PostForm";
import Tab from "@/app/(afterLogin)/home/_component/Tab";
import TabProvider from "@/app/(afterLogin)/home/_component/TabProvider";
import style from "@/app/(afterLogin)/home/_component/_css/home.module.css";

export function AfterLoginHomePage(): React.JSX.Element {
  return (
    <main className={style.main}>
      <TabProvider>
        <Tab />
        <PostForm />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </TabProvider>
    </main>
  );
}
