import React, { useMemo, useCallback } from "react";
import { faComment, faEdit, faEnvelope,  faMapMarkerAlt, faUser } from "@fortawesome/free-solid-svg-icons"; 
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useMutation } from "@apollo/client";
import { CONTACT } from "graphql/mutation/contact.mutation";

import { Container, Heading, Recaptcha } from "components";
import {  Flex, H2, P, Icon,  Link, Button } from "atoms";
import {Line, Form, FieldGroup, Field, CommentField, IconContainer, PText} from './Style'; 
import bgDark from 'assets/images/texture/black-dot.png';
import { useData } from "hooks";

interface IEmail {
  name: string;
  email: string;
  subject: string;
  message: string;
  recaptcha: string;
}

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required().email(),
  subject: yup.string().required(),
  message: yup.string().required(),
  recaptcha: yup.string().required(),
});

export const Contact = () => { 
  const [sendEmail, {data, loading} ] = useMutation(CONTACT);
  const {_about} = useData();
  
  const onSubmit = async (formData:IEmail) => {
    await sendEmail({
      variables: {
        ...formData
      }
    });
  };

  const { register, handleSubmit, formState:{ errors }, setValue } = useForm({
    resolver: yupResolver(schema)
  });

  const isSent = useMemo(() => data && data.contact.send, [data]);

  const onRecaptchaChange = useCallback((token:string | null) => {
    if(token)  {
      setValue('recaptcha', token);
    } else {
      setValue('recaptcha', '');
    }
  },[setValue]);
  
  return (
    <Container id="contact" backgroundImage={`${bgDark}`} background="--color-blue" padding="100px 20px">
      <Heading
        label="CONTACT"
        icon={faMapMarkerAlt}
        white
      />
      {_about && (
        <>
        <P data-aos="fade-up" white margin="var(--space-12) 0 var(--space-10)" center size="var(--text-3xl)">
        {_about.address}
        </P>
        <H2 data-aos="fade-up" white margin="var(--space-0) 0 var(--space-6)" center size="var(--text-5xl)">
        {_about.phone}
        </H2>
        <PText data-aos="fade-up" white margin="var(--space-0) 0 var(--space-6)" center size="28px">
          <Link white href={`mailto:${_about.email}`} content={_about.email} />
        </PText>
        <PText data-aos="fade-up" white margin="var(--space-0) 0 var(--space-6)" center size="28px">
          <Link white href="#" content={_about.web} />
        </PText>
        <Line data-aos="fade-up" />
        </>
      )}
      <Heading
        label="DROP ME A LINE"
        icon={faEnvelope}
        white
      />
      <Form onSubmit={handleSubmit(onSubmit)} data-aos="fade-up">
        <FieldGroup>
          <IconContainer><Icon icon={faUser}/></IconContainer>
          <Field {...register("name")} error={!!errors.name} placeholder="Name *"/>
        </FieldGroup>
        <FieldGroup>
          <IconContainer><Icon icon={faEnvelope}/></IconContainer>
          <Field {...register("email")} error={!!errors.email} placeholder="Email *"/>
        </FieldGroup>
        <FieldGroup>
          <IconContainer><Icon icon={faEdit}/></IconContainer>
          <Field {...register("subject")} error={!!errors.subject} placeholder="Subject *"/>
        </FieldGroup>
        <FieldGroup>
          <IconContainer dataHeight={150}><Icon icon={faComment}/></IconContainer>
          <CommentField {...register("message")} error={!!errors.message}  placeholder="Comment *"/>
        </FieldGroup>
          {
            isSent && (
              <Flex sx={{justifyContent: 'center', marginBottom: 15}}>
              <P white margin="var(--space-2) 0">
                Your email sent sucessfully!
              </P>
            </Flex> 
            )
          }
        <Recaptcha onChange={onRecaptchaChange} error={errors?.recaptcha?.message}/> 
        {
          !isSent && (
            <Flex sx={{justifyContent: 'center'}}> 
              <Button disabled={loading} variant="whiteOutlined" size="xxlarge">SAY HELLO</Button>
            </Flex>
          )
        }
      </Form>
      
    </Container>
  );
};