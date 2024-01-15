import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import {Icon} from "../../../components/icon/Icon";
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/flex-wrapper/FlexWrapper";
import {Container} from "../../../components/container/Container";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <SectionTitle>Testimony</SectionTitle>
            <Container>
                <FlexWrapper direction={'column'} align={'center'}>
                    <Icon iconId={'quote'}/>
                    <Slider/>
                </FlexWrapper>
            </Container>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    background-color: #aeb9ff;
    min-height: 50vh;
`