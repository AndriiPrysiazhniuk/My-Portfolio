import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import {StyledButton} from '../../../components/StyledButton/StyledButton';
import {Container} from "../../../components/container/Container";


export const Contact = () => {
    return (
        <StyledContact>
            <SectionTitle>Contact</SectionTitle>
            <Container>
                <StyledForm>
                    <Field placeholder={'name'}/>
                    <Field placeholder={'subject'}/>
                    <Field placeholder={'message'} as={'textarea'}/>
                    <StyledButton type={'submit'}>Send message</StyledButton>
                </StyledForm>
            </Container>
        </StyledContact>
    );
};

const StyledContact = styled.section`
    background-color: #fffae1;
    min-height: 50vh;
`
const StyledForm = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: 0 auto;
`
const Field = styled.input`

`

