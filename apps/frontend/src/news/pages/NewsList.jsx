import { news } from "../../shared/dummy";
import Card from "../../shared/components/UIElements/Card/Card";

function NewsList({ type = "large", tag = "all" }) {
  const filteredNews =
    tag === "all" ? news : news.filter((item) => item.tags.includes(tag));

  return (
    <>
      <div className="flex flex-wrap justify-center gap-4">
        {filteredNews.map((item) => (
          <Card
            key={item.id}
            type={type === "wrap" ? "card-small" : "card-large"}
            link={`/news/${item.slug}`}
            image={item.mainImage}
            {...item}
          />
        ))}
        {filteredNews.length === 0 && (
          <p className="text-gray-400 text-center mt-4">
            No news found for this tag.
          </p>
        )}
      </div>
    </>
  );
}

export default NewsList;
