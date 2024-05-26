import React from "react";
import { Data } from "@/data";
import classes from "./detailpage.module.css";

function Detailpage({ params }) {
  const newsId = params.id;
  console.log(newsId);
  const newsItem = Data.find((item) => item.id === newsId);
  return (
    <>
      <img
        src={`/images/news/${newsItem.image}`}
        alt=""
        className={classes.image}
      />
      <div className={classes.title}>{newsItem.title}</div>
      <p className={classes.content}>{newsItem.content}</p>
    </>
  );
}

export default Detailpage;
