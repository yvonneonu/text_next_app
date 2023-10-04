import React from "react";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex w-full flex-row justify-between px-6">
      <Link href="/">Home</Link>
      <Link href="/about">about</Link>
      <Link href="/about/abc">abc</Link>
    </div>
  );
}
