import MainLayout from "../Layouts/MainLayout";
import PanelLayout from "../Layouts/PanelLayout";

export default function TestPage() {
  return (
    <div>
      <PanelLayout>
        <h1>Panel Layout</h1>
      </PanelLayout>
      <MainLayout>
        <h1>Main Layout</h1>
      </MainLayout>
    </div>
  );
}
