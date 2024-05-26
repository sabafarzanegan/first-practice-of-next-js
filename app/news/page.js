import Link from "next/link";
import React from "react";
import classes from "./Newspage.module.css";

import { Data } from "@/data";

function Newspage() {
  return (
    <>
      <div className={classes.titlepage}>news page</div>
      <div className={classes.pagecontainer}>
        {Data.map((item) => (
          <Link href={`/news/${item.id}`}>
            <div key={item.key} className={classes.cardcontainer}>
              <div className="topcard">
                <img
                  src={`/images/news/${item.image}`}
                  alt=""
                  className={classes.image}
                />
              </div>
              <div className="buttomcard">
                <h4 className={classes.title}>{item.title}</h4>
                <p className={classes.date}>{item.date}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Newspage;
