import styled from 'styled-components';
import { Progress as Instance } from 'theme-ui';

const ProgressInstance = styled(Instance)`
  position: absolute;
  z-index: 100;
  top: 0;
  background-color: transparent !important;
`;

export const Progress = () => {
  return(<ProgressInstance value={100 / 100} sx={
    {
      color: '#8f8f8f',
    }
  }/>
);};

