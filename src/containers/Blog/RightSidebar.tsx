import { Box, Link, P } from "atoms";
import React from "react";
import _startCase from 'lodash/startCase';
import _sort from 'lodash/sortBy';
import { Container } from "components";
import { CategoryList } from "./Style";
import { categoriesName } from ".";

interface IRightSibebar {
  categories: string[];
  tags: ITag[];
}
interface ITag {
  id: number; 
  title: string;
  slug: string;
}
export const RightSidebar = ({categories, tags}: IRightSibebar) => {
  return (
    <Container maxWidth="250px">
      <Box pb="--space-14">
        <P size="--text-md" margin="0 0 var(--space-2) 0"><b>Categories:</b></P>
        {!!categories?.length ? (
        <CategoryList>
          {
            // @ts-ignore
            categories.map( (category: string, i: number) => <P key={category} lineHeight={1.2} as="li">- <Link href={`/blog-category/${category}`} content={_startCase(categoriesName[category])
          } /></P>)}
        </CategoryList>
        ) : (
          <P size="--text-sm">No category available.</P>
        )}
      </Box>
      {!!tags?.length && (
        <Box pb="--space-14">
          <P size="--text-md" margin="0 0 var(--space-2) 0"><b>Tags:</b></P>
          {_sort(tags, function(o) { return o.title; }).map( (tag: ITag, i: number) => <P key={tag.id} lineHeight={1.2} as="span">{i > 0 && ','} <Link href={`/tags/${tag.slug}`} content={_startCase(tag.title)} /></P>)}
        </Box>
        )}
    </Container>
  );
};