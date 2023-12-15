import Head from "next/head";
import { useRouter } from "next/router";
import _get from 'lodash/get';
import { PostDetail } from "containers";
import { useQuery } from "@apollo/client";
import { GET_BLOG } from "graphql/query/blog.query";
import { useEffect } from "react";

export const BlogDetailPage = () => {
  const route = useRouter();
  const slug = _get(route, 'query.slug');
  const {data, loading} = useQuery(GET_BLOG, {
    variables:{
      slug
    },
    skip: !slug,
  });
  const detail = _get(data, "getPostBySlug.post");
  useEffect(() => {
    if(!detail && !loading) {
      route.push('/404');
    }
  },[detail, loading]);

  return (
    <>
      <Head>
        <title>Mike neder - Blog - {detail?.title}</title>
      </Head>
      <PostDetail detail={detail} loading={loading}/>
    </>
  );
};

// @ts-ignore
export async function getServerSideProps({query}) {
  return {
    props: {
      slug: query.slug
    },
  };
}

export default BlogDetailPage;