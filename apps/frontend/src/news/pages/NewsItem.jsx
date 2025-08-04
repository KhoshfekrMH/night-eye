import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import MainLayout from "../../Layouts/MainLayout";
import Breadcrumb from "../../shared/components/Navigation/Breadcrumbs";
import NotFound from "../../pages/NotFound";
import { news, users } from "../../shared/dummy"; //TODO: Replace with backend call later
import { EyeIcon, Calendar } from "lucide-react";

function NewsItem() {
  const { slug } = useParams();
  const item = news.find((n) => n.slug === slug);

  if (!item) {
    return <NotFound />;
  }

  const author = users.find((u) => u.id === item.writerId);

  const links = [
    { label: "Home", path: "/" },
    { label: "Archive", path: "/archive" },
    { label: item.category, path: `/archive/${item.category}` },
    { label: item.title, path: `/news/${item.slug}` },
  ];

  return (
    <MainLayout>
      <Helmet>
        <title>{item.title} - Night Eye</title>
      </Helmet>
      <div className="mx-2 py-2">
        <Breadcrumb links={links} />
      </div>
      <section className="flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-2xl">
          <h2 className="mb-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold lg:leading-none tracking-tight text-secondary">
            {item.title}
          </h2>
          <div className="flex mb-6 text-sm text-accent gap-2">
            <div className="badge badge-error">{item.badge}</div>
            <div className="flex items-center gap-1">
              <Calendar />
              <span>{item.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <EyeIcon />
              <span>{item.readCount}</span>
            </div>
          </div>
          <img
            className="mb-8 rounded-4xl"
            src={item.mainImage}
            alt={`Main image for: ${item.title}`}
          />
          <p className="mb-4 text-lg">{item.description}</p>
        </div>
        <div className="flex flex-row gap-2">
          {item.tags.map((tag) => (
            <div key={tag} className="badge badge-primary">
              {tag}
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="avatar">
          <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={author.avatar} alt="Avatar for: " />
          </div>
        </div>
        <p className="text-lg font-bold pt-4">{author.name}</p>
        <p className="text-sm text-accent">{author.role}</p>
      </section>
    </MainLayout>
  );
}

export default NewsItem;
