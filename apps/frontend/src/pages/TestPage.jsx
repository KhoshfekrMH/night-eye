import MainLayout from "../Layouts/MainLayout";
import Hero from "../shared/components/UIElements/Hero/Hero";
import Card from "../shared/components/UIElements/Card/Card";

export default function TestPage() {
  return (
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
    </MainLayout>
  );
}
