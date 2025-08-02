import MainLayout from "../Layouts/MainLayout";
import NewsList from "../news/pages/NewsList";

export default function TestPage() {
  return (
    <>
      <MainLayout>
        <NewsList type="small" tag="Space" />
      </MainLayout>
    </>
  );
}
