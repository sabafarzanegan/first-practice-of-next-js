import { getLatestNews } from "@/lip/utilities";
import Link from "next/link";
import React from "react";
const latestnewa = getLatestNews();
console.log(latestnewa);

function defaultpage() {
  return (
    <>
      <h1>the latest page</h1>
      <div className="latest-content">
        {latestnewa.map((item) => (
          <Link key={item.id} href={`/news/${item.id}`}>
            <div className="latest-container">
              <img src={`/images/news/${item.image}`} alt="" />
              <h3>{item.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default defaultpage;
