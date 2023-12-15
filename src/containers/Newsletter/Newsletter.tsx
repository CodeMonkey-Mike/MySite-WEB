// @ts-nocheck
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { faEnvelope, } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { NEWSLETTER } from "graphql/mutation/newsletter.mutation";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import _get from 'lodash/get';
import _omit from 'lodash/omit';
import { Icon, Flex, P, Button } from "atoms";
import { Container, Heading, Recaptcha } from "components"; 
import { Field, FieldGroup, Form, IconContainer } from "containers/Contact/Style";
import { useData } from "hooks"; 
import { CheckBoxContainer, CheckBoxField, CheckBoxLabel, TopicsCheckBoxGroup, TopicsContainer } from "./Style";

interface ITopic {
  id:string | number;
  title:string;
}
interface IEmail {
  email: string;
  topics: string;
  recaptcha: string;
}
const schema = yup.object().shape({
  email: yup.string().required().email(),
  recaptcha: yup.string().required(),
});

export const Newsletter = () => { 
  const {_topics} = useData(); 
  const TopicsCheckBoxGroupRef = useRef(null);
  const [subscribeToNewsletter, {data, loading, error} ] = useMutation(NEWSLETTER);
  const onSubmit = async (fdata:IEmail) => {
    const formData = _omit(fdata, "recaptcha");
    const topics = formData.topics.filter( tp => tp !== false);
    await subscribeToNewsletter({
      variables: {
        ...formData,
        topics: `[${topics}]`,
      }
    });
  };

  const { register, handleSubmit, formState:{ errors }, setValue, watch } = useForm({
    resolver: yupResolver(schema)
  });

  const onSelectAll = useCallback((e) => {
    const checkboxes = document.querySelectorAll('input[name*="topics"]');
    checkboxes.forEach(c => c.checked = e);
    if(e) {
      const tps = _topics.map(tp => tp.id);
      setValue('topics', [...tps]);
    } else {
      setValue('topics', [...(Array.from({ length: 9 }, () => false))]);
    }
  },[_topics]);

  const isSubscribed = useMemo(() => data && data.createNewsletter, [data]);

  const watchTopics = watch('topics');
  const errorMessage = useMemo(() => _get(error, 'message'),[error]);

  const onRecaptchaChange = useCallback((token:string) => {
    if(token)  {
      setValue('recaptcha', token);
    } else {
      setValue('recaptcha', '');
    }
  },[setValue]);

  useEffect(() => {
    const isNonAll = !!watchTopics ? watchTopics.some((t) => t === false) : false;
    const selectAll = document.querySelector('input[name="selectAll"]');
    if(isNonAll && selectAll) {
      selectAll.checked = false;
    }
  },[watchTopics]);
  
  return (
    <Container id="newsletter" padding="100px 20px">
      <Heading
        label="NEWSLETTER"
        icon={faEnvelope}
        sublabel={`Sign up for my mailing lists`}
      />
      <Form onSubmit={handleSubmit(onSubmit)} data-aos="fade-up" mt="60px">
        {
          isSubscribed ? (
            <Flex sx={{justifyContent: 'center', marginBottom: 15}}>
            <P white margin="var(--space-2) 0">
              Subscribed successfully!
            </P>
          </Flex> 
          ) : (
            <>
            <TopicsContainer>
              <CheckBoxLabel>
                <CheckBoxContainer>
                  <CheckBoxField
                    type="checkbox"
                    value={'all'}
                    name="selectAll"
                    onChange={e => onSelectAll(e.target.checked)}
                  />
                  <P white>Select all</P>
                </CheckBoxContainer>
              </CheckBoxLabel>
              <TopicsCheckBoxGroup ref={TopicsCheckBoxGroupRef}>
                {_topics.map((topic: ITopic, idx: number) => (
                  <CheckBoxLabel ml="2"  key={topic.id}> 
                    <CheckBoxContainer>
                    <CheckBoxField
                      type="checkbox"
                      value={topic.id}
                      {...register(`topics[${idx}]`)}
                    />
                    <P white>{topic.title}</P>
                    </CheckBoxContainer>
                    </CheckBoxLabel>
                ))}
              </TopicsCheckBoxGroup>
            </TopicsContainer>
            <FieldGroup>
              <IconContainer><Icon icon={faEnvelope}/></IconContainer>
              <Field {...register("email")} error={!!errors.email} placeholder="Email *"/>
            </FieldGroup>
            </>
          )
        }
        <P danger size="var(--text-sm)" margin="0 0 var(--space-2)" forceSize>{errorMessage}</P>
        <Recaptcha onChange={onRecaptchaChange} error={errors?.recaptcha?.message}/>
        {
          !isSubscribed && (
            <Flex sx={{justifyContent: 'center', marginTop: 'var(--space-2)'}}> 
              <Button disabled={loading} variant="whiteOutlined" size="xxlarge">SUBMIT</Button>
            </Flex>
          )
        }
      </Form>
    </Container>
  );
};