import React from "react";
import { classes } from "./year.module.css";
import { Data } from "@/data";
import { getNewsForYear } from "@/lip/utilities";
import Link from "next/link";

function YearArchive({ params }) {
  const yearfiltred = params.year;
  const news = getNewsForYear(yearfiltred);

  console.log(news);
  return (
    <div>
      {news.map((item) => (
        <Link href={`/news/${item.id}`}>
          <div className="latest-content  ">
            <div className="latest-container">
              <img src={`/images/news/${item.image}`} alt="" />
              <h3>{item.title}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default YearArchive;
