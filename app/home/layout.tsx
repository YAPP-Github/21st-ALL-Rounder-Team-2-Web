import { ReactNode, Suspense } from "react";
import { AppBar } from "@/components/pages/Home/AppBar/AppBar";
import { CategoryList } from "@/components/pages/Home/CategoryList/CategoryList.server";
import { SortDirectionSelect } from "@/components/pages/Home/SortDirectionSelect/SortDirectionSelect";
import { PostFloatingButton } from "@/components/pages/Home/PostFloatingButton/PostFloatingButton";
import styles from "./page.module.css";

export default async function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <AppBar />
      <div className={styles.category}>
        <Suspense>
          {/* @ts-expect-error Async Server Component */}
          <CategoryList />
        </Suspense>
      </div>
      <div className={styles.select}>
        <SortDirectionSelect />
      </div>
      {children}
      <PostFloatingButton />
    </>
  );
}
