import React from "react";
import Article from "../components/Article.js";

function ArticleList({posts}) {
  let out = posts.map((x) =>{
    return <Article title={x.title} date={x.date} preview={x.preview} minutes={x.minutes} />
  })
  
  return (
    <main>
      {out}
    </main>
  );
}

export default ArticleList;