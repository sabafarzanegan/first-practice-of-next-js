import React from "react";
import { Data } from "@/data";
import classes from "./detailpage.module.css";
import { notFound } from "next/navigation";

function Detailpage({ params }) {
  const newsId = params.id;

  const newsItem = Data.find((item) => item.id === newsId);
  if (!newsItem) {
    notFound();
  }
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
