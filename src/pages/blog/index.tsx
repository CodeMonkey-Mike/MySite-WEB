import Head from "next/head";
import { Blog } from "containers";

export const BlogPage = () => {
  return (
    <>
      <Head>
        <title>Mike neder - Blog</title>
      </Head>
      <Blog />
    </>
  );
};

export default BlogPage;