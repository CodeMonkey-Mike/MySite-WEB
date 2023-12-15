import React from "react";
import { faComment, } from "@fortawesome/free-solid-svg-icons";
import { Container, Heading } from "components"; 
import { Center, SocialIcon, Icon} from "./Style";
import { useData } from "hooks"; 

interface IChannel {
  icon:string;
  url:string;
  visible:boolean;
}
export const GetInTouch = () => { 
  const {_channels} = useData(); 
  return (
    <Container id="channel" padding="100px 20px">
      <Heading
        label="GET IN TOUCH"
        icon={faComment}
        sublabel={`Or connect with me over various social channels.`}
      />
      {
        !!_channels.length && (
          <Center>
            {
              _channels.map( (item: IChannel , idx:number) => {
                return item.visible && (
                  <SocialIcon target="_blank" href={item.url} key={'k-'+ idx }>
                    <Icon className={`fab ${item.icon}`}/>
                  </SocialIcon>
                );
              })
            }
          </Center>
        )
      }
    </Container>
  );
};