import React from "react";
import classes from "./Article.module.scss";

type ArticleProps = {
  article: {
    id: number;
    title: string;
    description: string;
    image: string;
    author: string;
  };
};

const Article: React.FC<ArticleProps> = ({ article }) => {
  return (
    <div className={classes.container}>
      <div className={classes.image}>
        <img src={article.image} alt={article.title} />
      </div>
      <div className={classes.content}>
        <p className={classes.author}>{`By ${article.author}`}</p>
        <h3 className={classes.title}>{article.title}</h3>
        <p className={classes.text}>{article.description}</p>
      </div>
    </div>
  );
};

export default Article;
