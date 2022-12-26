import { Container, SkeletonInner, SkeletonImg, SkeletonBtn, SkeletonLineOne, SkeletonLineTwo } from "./page.styles";

const Skeleton = () => (
  <SkeletonInner>
    <SkeletonImg />
    <SkeletonBtn />
    <SkeletonLineOne />
    <SkeletonLineTwo />
  </SkeletonInner>
);

export default function Page() {
  return (
    <div className="space-y-4">
      <div className="text-xl font-medium text-gray-500">
        Styled with Styled Components
      </div>
      <Container>
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </Container>
    </div>
  );
}