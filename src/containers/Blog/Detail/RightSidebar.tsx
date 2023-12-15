import { Box, Link, P } from "atoms";
import React from "react";
import _startCase from 'lodash/startCase';
import { Container } from "components";

interface IRightSibebar {
  tagTitle: (slug: string) => string;
  tags: string[];
}
export const RightSidebar = ({tagTitle, tags}: IRightSibebar) => {
  return (
    <Container maxWidth="250px">
      {!!tags?.length && (
      <Box pb="--space-14">
        <P size="--text-md" margin="0 0 var(--space-2) 0"><b>Tags:</b></P>
        {tags.map( (tag: string, i: number) => <P key={tag} lineHeight={1.2} as="span">{i > 0 && ','} <Link href={`/tags/${tag}`} content={_startCase(tagTitle(tag))} /></P>)}
      </Box>
      )}
    </Container>
  );
};