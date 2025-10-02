import React from "react";

export default function NewsArticles() {
  const articles = [
    { id: 1, title: "React 19 Released!", published: true },
    { id: 2, title: "Next.js 15 is here!", published: false },
  ];

  return (
    <div>
      <h2>Articles</h2>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            {article.published ? article.title : "⏳ Draft"}
          </li>
        ))}
      </ul>
    </div>
  );
}
