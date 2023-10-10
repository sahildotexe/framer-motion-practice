"use client";

import Link from "next/link";

export default function Home() {

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="font-sans font-semibold text-2xl p-6">
        here&apos;s me expermenting microinteractions using framer motion -
        </div>
      <Link href="/upload">
      <div className="font-sans font-normal text-2xl mt-2 underline underline-offset-8">
        upload button
      </div>
      </Link>
    </div>
  );
}
