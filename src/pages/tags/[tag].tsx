import Head from "next/head";
import { Tags } from "containers";

export const BlogPage = () => {
  return (
    <>
      <Head>
        <title>Mike neder - Blog</title>
      </Head>
      <Tags />
    </>
  );
};

export default BlogPage;