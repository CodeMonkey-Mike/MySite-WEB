import React  from "react";
import { Menu, Footer } from "containers";
import { AuthorContainer, BackButton, BlogContainer, Center, DetailContainer, DetailContent, LeftContainer } from "../Style";
import { Box, H1, Icon, P } from "atoms";
import _get from 'lodash/get';
import _upperFirst from 'lodash/upperFirst';
import { CountSkeleton } from "components";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";
import { RightSidebar } from "./RightSidebar";
import { IPost } from "interfaces";
import { useBlog } from "hooks";

export const PostDetail = ({detail}: {detail: IPost, loading: boolean;}) => {
  const {tagTitle} = useBlog();
  return (
    <>
    <Menu hideScroll={true}/>
    <BlogContainer>
      <Center maxWidth="1140px" margin="0 auto 0">
        <P margin="0"><BackButton href="/blog"><Icon icon={faArrowLeft} margin="0 var(--space-3) 0 0" /> Back</BackButton></P>
      </Center>
      <DetailContainer maxWidth="1140px" margin="0 auto 50px" display="flex">
            <LeftContainer padding="0 var(--space-12) 0 0">
              <article>
                <header>
                  {
                    detail?.title ? (<H1 color="var(--color-dark)" size="var(--text-6xl)">{detail.title}</H1>): (<CountSkeleton />)
                  }
                  <Box>
                  {
                      (detail?.author || detail?.created_at) ? <AuthorContainer>
                        <P size="var(--text-base)" margin="0 var(--space-2) 0 0">
                        {
                          `${_upperFirst(detail?.author ?? '')} ${detail?.created_at && dayjs(Number(detail.created_at)).format('MM/DD/YYYY')}`
                        }
                        </P>
                      </AuthorContainer> : <CountSkeleton />
                  }
                  </Box>
                </header>
                <DetailContent className="ql-editor">
                {
                  detail?.content ? (<P size="var(--text-base)" lineHeight={1.4} color="var(--color-dark)" dangerouslySetInnerHTML={{__html: detail.content}} />): (<CountSkeleton count={5} />)
                }
                </DetailContent>
              </article>
            </LeftContainer>
            {!!detail && (
            <RightSidebar tagTitle={tagTitle} tags={!!detail?.tags ? JSON.parse(detail?.tags) : []} />
            )}
          </DetailContainer>

    </BlogContainer>
    <Footer />
    </>
  );
};