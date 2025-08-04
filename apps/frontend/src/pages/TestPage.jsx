import MainLayout from "../Layouts/MainLayout";
import NewsList from "../news/pages/NewsList";

export default function TestPage() {
  return (
    <>
      <MainLayout>
        <NewsList size="wrap" category="all" />
      </MainLayout>
    </>
  );
}
