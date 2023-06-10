import { Suspense } from "react";
import { AuthProvider } from "@/components/AuthProvider/AuthProvider";
import { ExhibitionCardList } from "./components/ExhibitionCardList/ExhibitionCardList.server";

export default async function Page({
  searchParams,
}: {
  searchParams?: { direction?: "ASC" | "DESC"; category?: number };
}) {
  const direction = searchParams?.direction ?? "DESC";
  const category = searchParams?.category;

  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <AuthProvider>
        <Suspense>
          {/* @ts-expect-error Async Server Component */}
          <ExhibitionCardList direction={direction} category={category} />
        </Suspense>
      </AuthProvider>
    </>
  );
}

export const dynamic = "force-dynamic";
