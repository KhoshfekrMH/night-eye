import { useMemo } from "react";
import { news } from "../../shared/dummy"; //TODO: dummy
import Card from "../../shared/components/UIElements/Card/Card";

function NewsList({ size = "large", category = "all", query }) {
  const filteredNews = useMemo(() => {
    if (query) {
      return news.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase()),
      );
    } else {
      return category === "all"
        ? news
        : news.filter((item) => item.category.includes(category));
    }
  }, [category, query]);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-4">
        {filteredNews.map((item) => (
          <Card
            key={item.id}
            type={size === "wrap" ? "card-small" : "card-large"}
            link={`/news/${item.slug}`}
            image={item.mainImage}
            {...item}
          />
        ))}
        {filteredNews.length === 0 && (
          <p className="text-gray-400 text-center mt-4">
            {query
              ? `No news found for "${query}"`
              : `No news found for "${category}"`}
          </p>
        )}
      </div>
    </>
  );
}

export default NewsList;
