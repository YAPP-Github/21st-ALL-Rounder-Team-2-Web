import { Suspense } from "react";
import { ExhibitionCardList } from "./components/ExhibitionCardList/ExhibitionCardList.server";

export default async function Page({
  searchParams,
}: {
  searchParams?: { direction?: "ASC" | "DESC"; category?: number };
}) {
  const direction = searchParams?.direction ?? "DESC";
  const category = searchParams?.category;

  return (
    <Suspense>
      {/* @ts-expect-error Async Server Component */}
      <ExhibitionCardList direction={direction} category={category} />
    </Suspense>
  );
}

export const dynamic = "force-dynamic";
