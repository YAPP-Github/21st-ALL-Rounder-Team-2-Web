import { ReactNode, Suspense } from "react";
import { AuthProvider } from "@/components/AuthProvider/AuthProvider";
import { AppBar } from "./components/AppBar/AppBar";
import { CategoryList } from "./components/CategoryList/CategoryList.server";
import { SortDirectionSelect } from "./components/SortDirectionSelect/SortDirectionSelect";
import { PostFloatingButton } from "./components/PostFloatingButton/PostFloatingButton";
import styles from "./page.module.css";

export default async function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <AuthProvider>
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
      </AuthProvider>
    </>
  );
}
