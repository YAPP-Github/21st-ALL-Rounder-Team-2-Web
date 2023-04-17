import { Suspense } from "react";
import { AppBar } from "@/components/pages/Home/AppBar/AppBar";
import { CategoryList } from "@/components/pages/Home/CategoryList/CategoryList.server";
import { SortDirectionSelect } from "@/components/pages/Home/SortDirectionSelect/SortDirectionSelect";
import { ExhibitionCardList } from "@/components/pages/Home/ExhibitionCardList/ExhibitionCardList.server";
import { PostFloatingButton } from "@/components/pages/Home/PostFloatingButton/PostFloatingButton";
import styles from "./page.module.css";

export default async function Page({
  searchParams,
}: {
  searchParams?: { direction?: "ASC" | "DESC"; category?: number };
}) {
  const direction = searchParams?.direction ?? "DESC";
  const category = searchParams?.category;

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
      <Suspense>
        {/* @ts-expect-error Async Server Component */}
        <ExhibitionCardList direction={direction} category={category} />
      </Suspense>
      <PostFloatingButton />
    </>
  );
}

export const dynamic = "force-dynamic";
