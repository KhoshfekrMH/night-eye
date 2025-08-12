//TODO: need Error handler
import { useMemo } from "react";

export default function useNewsFilter(news, category, query) {
  return useMemo(() => {
    return news
      .filter((item) => {
        if (query) {
          return (
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.description.toLowerCase().includes(query.toLowerCase())
          );
        }
        return category === "all" || item.category.includes(category);
      })
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [category, query, news]);
}
