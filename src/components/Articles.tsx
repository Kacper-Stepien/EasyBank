import Article from "./Article";

import classes from "./Articles.module.scss";

const articles = [
  {
    id: 1,
    title: "Receive money in any currency with no fees",
    description:
      "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
    image: "images/image-currency.jpg",
    author: "Claire Robinson",
  },
  {
    id: 2,
    title: "Treat yourself without worrying about money",
    description:
      "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
    image: "images/image-restaurant.jpg",
    author: "Wilson Hutton",
  },
  {
    id: 3,
    title: "Take your Easybank card wherever you go",
    description:
      "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
    image: "images/image-plane.jpg",
    author: "Wilson Hutton",
  },
  {
    id: 4,
    title: "Our invite-only Beta accounts are now live!",
    description:
      "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
    image: "images/image-confetti.jpg",
    author: "Claire Robinson",
  },
];

const Articles = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2 className={classes.title}>Last Articles</h2>
        <div className={classes.articles}>
          {articles.map((article) => (
            <Article key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
