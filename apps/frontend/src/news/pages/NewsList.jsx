import { useState, useMemo } from "react";
import { news } from "../../shared/dummy"; //TODO: dummy
import Card from "../../shared/components/UIElements/Card/Card";
import Pagination from "../components/Pagination";

const PAGE_SIZE = 3; //TODO: move to .env

function NewsList({
  size = "large",
  category = "all",
  query,
  pagination = false,
}) {
  const [currentPage, setCurrentPage] = useState(1);

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

  const totalPage = Math.ceil(filteredNews.length / PAGE_SIZE);

  const paginationNews = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    return filteredNews.slice(start, end);
  }, [filteredNews, currentPage]);

  const newsToRender = pagination ? paginationNews : filteredNews;

  function handlePageChange(page) {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <div className="flex flex-wrap justify-center gap-4">
        {newsToRender.map((item) => (
          <Card
            key={item.id}
            type={size === "wrap" ? "card-small" : "card-large"}
            link={`/news/${item.slug}`}
            image={item.mainImage}
            {...item}
          />
        ))}
        {newsToRender.length === 0 && (
          <p
            className="text-warning text-center m-10
            "
          >
            {query
              ? `No news found for "${query}"`
              : `No news found for "${category}"`}
          </p>
        )}

        {pagination && (
          <Pagination
            totalPage={totalPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </>
  );
}

export default NewsList;
