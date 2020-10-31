import React from "react";
import {useForm} from "react-hook-form"

import Banner from "../shared/Banner";
import {Form, Input}from "../shared/form"

import customFetch from "root/function/customFetch";
import setErrorMessage from "root/function/setErrorMessage";

import { StyledWhiteHeader, StyledHeader, StyledGreenButton, StyledInnerWrapper, StyledSectionPadding } from "root/css";


export default function Contact() {
  const methods = useForm({ validateCriteriaMode: "all" });
  const {register, setError} = methods

  const onSubmit = async (data, event) => {
    event.preventDefault();

    const response = await customFetch("/api/contact/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.message) setErrorMessage(setError, { ...response });
    else event.target.reset();
  };

  return (
    <>
      <Banner src="/images/banner-contact.png">
        <StyledWhiteHeader textCenter>Contact Us</StyledWhiteHeader>
      </Banner>

      <StyledInnerWrapper>
        <StyledSectionPadding>
        <StyledHeader textCenter>
          Looking for more information? Fill out the form below and we’ll get back to you shortly.
        </StyledHeader>
      
        <Form onSubmit={onSubmit} methods={methods}>
          <Input
              register={register({
                required: {
                  value: true,
                  message: "This is field is required",
                },
                maxLength: {
                  value: 30,
                  message: "Name can't exceed max length of 30 characters",
                },
                pattern: {
                  value: /^[A-Z a-z]+$/,
                  message: "Characters only please",
                },
              })}
              name="contactName"
              label="Name"
              type="text"
              placeholder="Name"
            />

            <Input
              register={register({
                required: {
                  value: true,
                  message: "This is field is required",
                },
                pattern: {
                  value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "This is not a valid email address",
                },
              })}
              name="contactEmail"
              type="text"
              label="Email"
              placeholder="Email"
            />

            <Input
              register={register({
                required: {
                  value: true,
                  message: "This is field is required",
                },
                maxLength: {
                  value: 20,
                  message: "Subject can't exceed max length of 20 characters",
                },
                pattern: {
                  value: /^[A-Za-z]+$/,
                  message: "Characters only please",
                },
              })}
              name="contactSubject"
              label="Subject"
              type="text"
              placeholder="Subject"
            />

            <Input
              register={register({
                required: {
                  value: true,
                  message: "This is field is required",
                },
                maxLength: {
                  value: 2000,
                  message: "Message can't exceed max length of 2000 characters",
                },
              })}
              name="contactMessage"
              label="Message"
              type="text"
              placeholder="Message"
              as="textarea"
            />

            <StyledGreenButton as="input" value="Submit" type="submit" />
          </Form> 
        </StyledSectionPadding>  
      </StyledInnerWrapper>
    </>
  );
}
