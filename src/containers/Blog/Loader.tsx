import React from 'react';
import { Box } from "atoms";
import { CountSkeleton, ShapeSkeleton } from "components";
import { Item, List } from "./Style";

export const ItemLoader = () => (
  <Item> 
    <Box mb="--space-1">
      <ShapeSkeleton height={150} />
    </Box>
    <Box mb="--space-1">
      <CountSkeleton count={1} width={100}/>
    </Box>
    <CountSkeleton count={1} />
  </Item>
);
export const ListLoader = () => (
  <List gap={4} columns={[2,2,4]} data-aos="fade-up" data-aos-delay='200'>
    {
      [...Array(8).keys()].map( (i: number) => (
        <ItemLoader key={i} />
      ))
    }
  </List>
);