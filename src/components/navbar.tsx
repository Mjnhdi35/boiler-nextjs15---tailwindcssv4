import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <header className="flex items-center gap-3 justify-center">
        <Link href={"/"}>Home</Link>
        <Link href={"/forms"}>Forms</Link>
        <Link href={"/packages"}>Packages</Link>
        <Link href={"/changes"}>changes</Link>
      </header>
    </div>
  );
}
