import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Button} from "../../../components/Button";

export const Contact = () => {
   return (
      <StyledContact>
            <SectionTitle>Contact</SectionTitle>
            <StyledForm>
               <Field placeholder={"name"}/>
               <Field placeholder={"subject"}/>
               <Field as={"textarea"} placeholder={"message"}></Field>
               <Button type={"submit"}>Send message</Button>
            </StyledForm>
      </StyledContact>
   );
};

const StyledContact = styled.section`
    min-height: 50vh;
    background-color: #99a217;
`
const Field = styled.input`
    
`

const StyledForm = styled.form`
max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin: 0 auto;
`