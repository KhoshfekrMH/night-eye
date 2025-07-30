import MainLayout from "../Layouts/MainLayout";
import PanelLayout from "../Layouts/PanelLayout";
import Hero from "../shared/components/UIElements/Hero/Hero";
import Card from "../shared/components/UIElements/Card/Card";
import ScrollTabs from "../shared/components/UIElements/Tab/ScrollTabs";

const tabs = ["tab1", "tab2", "tab3"];

export default function TestPage() {
  return (
    <>
      <PanelLayout></PanelLayout>
      <MainLayout>
        <Hero
          title="Test Page"
          image="https://picsum.photos/500/500"
          description="This is a test page"
          buttonText="Go Back"
          buttonLink="/"
        />
        <Card
          type="card-small"
          title="Lorem ipsum dolor"
          image="https://picsum.photos/500/500"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam."
          link="/"
          badge="new"
          tags={["tag1", "tag2", "tag3"]}
        />
        <Card
          type="card-large"
          title="Lorem ipsum dolor"
          image="https://picsum.photos/500/500"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam."
          link="/"
          badge="new"
          tags={["tag1", "tag2", "tag3"]}
        />
        <ScrollTabs tags={tabs} />
        <div id="tab1" className="min-h-screen p-8 bg-base-200">
          <h2 className="text-3xl font-bold mb-4">Tab 1</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec
            quam nec sem interdum dictum. Morbi eu justo id felis ullamcorper
            dapibus. Mauris at magna vel lorem volutpat tincidunt.
          </p>
        </div>

        <div id="tab2" className="min-h-screen p-8 bg-base-100">
          <h2 className="text-3xl font-bold mb-4">Tab 2</h2>
          <p>
            Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh
            elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec
            tellus sed augue semper porta.
          </p>
        </div>

        <div id="tab3" className="min-h-screen p-8 bg-base-300">
          <h2 className="text-3xl font-bold mb-4">Tab 3</h2>
          <p>
            Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
            Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem
            at dolor.
          </p>
        </div>
      </MainLayout>
    </>
  );
}
