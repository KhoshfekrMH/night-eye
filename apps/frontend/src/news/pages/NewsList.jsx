import { news } from "../../shared/dummy"; //TODO: dummy
import Card from "../../shared/components/UIElements/Card/Card";

function NewsList({ size = "large", category = "all" }) {
  const filteredNews =
    category === "all"
      ? news
      : news.filter((item) => item.category.includes(category));

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
            No news found for this category.
          </p>
        )}
      </div>
    </>
  );
}

export default NewsList;
