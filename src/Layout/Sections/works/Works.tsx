import React from "react";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import styled from "styled-components";
import {StyledButton} from "../../../components/StyledButton/StyledButton";
import {Menu} from "../../../components/menu/Menu";
import {FlexWrapper} from "../../../components/flex-wrapper/FlexWrapper";
import {Project} from "../../../components/StyledProject/StyledProject";
import project1 from '../../../assets/images/proj-1.webp'
import project2 from '../../../assets/images/proj-2.webp'
import {Container} from "../../../components/container/Container";

const worksItems = ['All', 'React', 'SPA', 'Landing page']
export const Works = () => {


    return (
        <StyledWorksSection>
            <SectionTitle>My Works</SectionTitle>
            <Menu menuItems={worksItems}/>
            <Container>
                <FlexWrapper justify={'space-around'}>
                    <Project title={'Social Network'}
                             description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
                             src={project1}/>
                    <Project title={'Timer'}
                             description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim'}
                             src={project2}/>
                </FlexWrapper>
            </Container>
        </StyledWorksSection>
    )
}

const StyledWorksSection = styled.section`
    background-color: #1f1f20;
    min-height: 100vh;
`

