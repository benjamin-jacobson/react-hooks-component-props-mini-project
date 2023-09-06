import React from "react";
import blogData from "../data/blog";
import Header from "../components/Header.js";
import About from "../components/About.js";
import ArticleList from "../components/ArticleList.js";

console.log(blogData);

function App() {
  return (
    <div className="App">
    <Header name={blogData.name} />
    <About name={blogData.image} about={blogData.about} />
    <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
