import { useState, useEffect } from "react";
import Pagination from "../../shared/components/UIElements/Pagination/Pagination";

const PAGE_SIZE = 3; //TODO: move to .env or at least put in a config file

function NewsPagination({ news, onPageChange }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = Math.ceil(news.length / PAGE_SIZE);

  useEffect(() => {
    setCurrentPage(1);
  }, [news]);

  useEffect(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    onPageChange(news.slice(start, end));
  }, [currentPage, news, onPageChange]);

  useEffect(() => {
    onPageChange(news.slice(0, PAGE_SIZE));
  }, [news, onPageChange]);

  function handlePageChange(page) {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <Pagination
      totalPage={totalPage}
      currentPage={currentPage}
      onPageChange={handlePageChange}
    />
  );
}

export default NewsPagination;
