import { useEffect, useState } from "react";

export default function Fetch() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://newsapi.org/v2/everything?q=technology&apiKey=5f5f4186d83c4c1d8f339752eaf383d9")
      .then((res) => res.json())
      .then((data) => setArticles(data.articles))  // <-- get only articles
      .catch((err) => console.error(err));
  }, []); // empty array ==> run once on mount

  return (
    <>
      <ul>
        {articles.map((article) => (
          <li key={article.url}>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
