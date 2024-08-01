import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { compareDesc, format, parseISO } from "date-fns";
const Blog: NextPage = ({ posts }: any) => {
  return <div className="mx-auto max-w-2xl py-16 text-center"></div>;
};

function PostCard(post: any) {
  return <div className="mb-6"></div>;
}

export default Blog;
