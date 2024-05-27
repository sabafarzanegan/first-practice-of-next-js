import React from "react";
import { getAvailableNewsYears } from "@/lip/utilities";
import Link from "next/link";

function Archive() {
  const links = getAvailableNewsYears();

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((year) => (
            <Link href={`/latest/${year}`}>{year}</Link>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Archive;
