"use client";
import NewsCard from "./components/newscard";

const NoticiasPage = () => {
  return (
    <div className="mx-auto mb-8 mt-28 grid w-3/4 grid-cols-1 gap-2 md:grid-cols-3">
      <NewsCard />
    </div>
  );
};

export default NoticiasPage;
