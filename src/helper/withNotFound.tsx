import React from "react";
import { P } from "atoms";
import { Container } from "components";

export const withNotFound = (isNotFound: boolean) => {
  return (Comp: any) => {
    if(isNotFound) {
      return (
        <Container height="100%" maxWidth="1140px" margin="100px auto">
          <Container display="flex" style={{ justifyContent: 'center'}}>
            <P style={{borderRight: "1px solid var(--color-grey-5)"}} padding="var(--space-3)">404</P>
            <P padding="var(--space-3)">This blog article was not found.</P>
          </Container>
        </Container>
      );
    }
    return Comp;
  };
};