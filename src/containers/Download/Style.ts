import styled from "styled-components";
import { Container } from "components";
import { Icon } from "atoms";

export const DownloadContainer = styled(Container)`
  background-color: var(--color-black);
  width: 100%;
`;

export const DownloadContent = styled(Container)`
  width: 100%;
  padding: 50px 0;
  color: var(--color-white);
  margin: 0 auto;
  @media (max-width: 1024px) {
    padding: 30px 20px;
  }
  @media (min-width: 1800px) {
    max-width: 1600px;
    .d-text {
      font-size: var(--text-3xl);
    }
  }
`;

export const DownloadIcon = styled(Icon)`
  font-size: var(--text-xl);
  margin-right: var(--space-2);
  color: var(--color-white);
`;