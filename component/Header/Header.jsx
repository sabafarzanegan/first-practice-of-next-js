import React from "react";
import classes from "./Header.module.css";
import Link from "next/link";

function Header() {
  return (
    <div className={classes.headercontainer}>
      <div className={classes.headercontent}>
        <h1>
          <Link href="/news">News</Link>
        </h1>
        <h3>The Latest News</h3>
      </div>
    </div>
  );
}

export default Header;
