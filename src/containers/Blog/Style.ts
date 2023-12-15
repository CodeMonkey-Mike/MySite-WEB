import { Container } from "components";
import styled from "styled-components";
import { Box, Button, Grid, Image } from "atoms";

export const BlogContainer = styled(Container)`
  background: #ffffff;
  padding-top: 20px;
  min-height: 100%;
  @media (max-width: 767px) {
    padding: var(--space-4);
  }
`;

export const Center = styled(Container)`
  margin: 20px auto 0;
  @media (min-width: 1800px) {
    max-width: 1600px;
  }
  @media (max-width: 1024px) {
    padding: 0 var(--space-6);
  }
  @media (max-width: 560px) {
    padding: 0;
  }
`;

export const List = styled(Grid)`
`;

export const Item = styled.div<{customWidth?: boolean}>`
  padding: 0 1%;
  margin-bottom:  var(--space-6);
  ${({customWidth}) => customWidth && `width: 25%;`}
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const ItemLink = styled.a`
  color: ${({ color }) => (color ? `${color}` : 'var(--color-dark)')};;
`;

export const ImageContainer = styled(Box)`
  height: 190px;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 767px) {
    height: 100px;
    border-radius: 4px;
  }
`;

export const ItemImage = styled(Image)`
  object-fit: cover;
`;

export const BackButton = styled.a`
  display: inline-block;
  padding: var(--space-2) var(--space-3);
  color: var(--color-primary);
  border: 1px solid var(--color-dark);
  margin-bottom: var(--space-5);
`;

export const DetailContent = styled.div`
  margin: var(--space-4) 0 0;
  padding: 0;
  padding-bottom: var(--space-16);
  img {
    width: 100%;
    max-width: 600px;
  }
  &.ql-editor {
    h1 {
      font-size: var(--text-1xl);
    }
    .ql-video {
      @media (min-width: 767px) {
        min-width: 600px;
        min-height: 400px;
      }
    }
    img {
      width: 100%;
      max-width: 600px;
    }
    p {
      display: inline-block;
    }
  }
`;

export const DetailButton = styled(Button)`
  margin: var(--space-4) 0;
  img {
    max-width: 100%;
  }
`;

export const AuthorContainer = styled.div`
  margin-top: var(--space-2);
  > div {
    display: inline-block;
    color: var(--color-grey-5);
    font-size: var(--text-base);
  }
`;

export const LeftContainer = styled(Container)`
    @media (max-width: 1024px) {
      padding-right: 0;
    }
    h1 {
      @media (max-width: 1024px) {
        font-size: var(--text-4xl);
      }
    }
`;

export const DetailContainer = styled(Center)`
    @media (max-width: 1024px) {
      display: block;
    }
`;

export const CategoryList = styled.ul`
  list-style: 'none';
  li {
    margin-top: var(--space-2);
  }
`;