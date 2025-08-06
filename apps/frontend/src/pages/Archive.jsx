import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import MainLayout from "../Layouts/MainLayout";
import NewsList from "../news/pages/NewsList";

function Archive({ category, query }) {
  const title =
    category === "search"
      ? `Search result for "${query}" - Night Eye`
      : `Archive - ${category} - Night Eye`;

  const header =
    category === "search"
      ? `Search result for "${query}"`
      : `Archive - ${category}`;

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <MainLayout>
        <main className="flex flex-col items-center justify-center px-5 mx-auto my-8 w-full max-w-5xl">
          <section className="flex items-center justify-center h-full p-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
              {header}
            </h1>
          </section>
          <NewsList
            category={category !== "search" ? category : undefined}
            query={query}
            pagination
          />
        </main>
      </MainLayout>
    </>
  );
}

export default Archive;
