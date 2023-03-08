import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center text-xs sm:text-sm font-medium">
      © 2023 All rights reserved. Made with ❤️
      <Link target={"_blank"} href={"https://twitter.com/vaycem"}>
        Cem
      </Link>
    </footer>
  );
}
