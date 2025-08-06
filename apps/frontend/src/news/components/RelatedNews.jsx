import { news } from "../../shared/dummy";
import Card from "../../shared/components/UIElements/Card/Card";

function RelatedNews({ currentSlug, tags, category }) {
  function filterRelatedNews(news) {
    return news
      .filter((n) => n.slug !== currentSlug)
      .filter(
        (n) =>
          n.tags.some((tag) => tags.includes(tag)) || n.category === category,
      )
      .slice(0, 2);
  }

  if (filterRelatedNews(news).length === 0) {
    return <p className="text-center text-error mt-4">No related news found</p>;
  }

  return (
    <section className="w-full max-w-3xl mt-10">
      <h3 className="text-3xl font-bold text-secondary">Related News</h3>
      <div className="divider divider-primary"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filterRelatedNews(news).map((item) => {
          return (
            <Card
              key={item.slug}
              {...item}
              image={item.mainImage}
              link={`/news/${item.slug}`}
            />
          );
        })}
      </div>
    </section>
  );
}

export default RelatedNews;
