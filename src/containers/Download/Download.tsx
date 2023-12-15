import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { Box, Button, Grid, P } from 'atoms';
import { useData } from 'hooks';
import { useRouter } from 'next/router';
import React from 'react';
import { DownloadContainer, DownloadContent, DownloadIcon } from "./Style";

export const Download = () => {
  const router = useRouter();
  const {_about} = useData();
  return(
  <DownloadContainer id="download">
    <DownloadContent maxWidth="1170px">
      <Grid gap={4} columns={[1,'2fr 1fr']}>
        <Box>
        <P size="var(--text-1xl)">Download a PDF version of my resume to veiw more details about me.</P>
        </Box>
        <Box>
         <Button onClick={()=> router.push(_about?.cv)} variant="primaryOutlined" size="xlarge"><DownloadIcon icon={faDownload}/> DOWNLOAD CV</Button>
        </Box>
        <Box>
        <P size="var(--text-1xl)"> Download my media kit to get a full overview of my services.</P>
        </Box>
        <Box>
        <Button  onClick={()=> router.push(_about?.media_kit)} variant="primaryOutlined" size="xlarge"><DownloadIcon icon={faDownload}/> MEDIA KIT</Button>
        </Box>
      </Grid>
    </DownloadContent>
  </DownloadContainer>
);};