import Head from "next/head";
import { Category } from "containers";

export const BlogPage = () => {
  return (
    <>
      <Head>
        <title>Mike neder - Blog</title>
      </Head>
      <Category />
    </>
  );
};

export default BlogPage;