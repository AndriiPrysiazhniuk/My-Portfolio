import React from "react";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import styled from "styled-components";
import {TabMenu} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/flex-wrapper/FlexWrapper";
import {Project} from "../../../components/StyledProject/StyledProject";
import project1 from '../../../assets/images/proj-1.webp'
import project2 from '../../../assets/images/proj-2.webp'
import {Container} from "../../../components/container/Container";

const worksItems = ['All', 'React', 'SPA', 'Landing page']
export const Works = () => {


    return (
        <StyledWorks>
            <SectionTitle>My Works</SectionTitle>
            <TabMenu menuItems={worksItems}/>
            <Container>
                <FlexWrapper justify={'space-between'} align={'flex-start'} wrap={'wrap'}>
                    <Project title={'Social Network'}
                             description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
                             src={project1}/>
                    <Project title={'Timer'}
                             description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed m dolor sit amet, consectetur adipisicing elit, sed m dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim'}
                             src={project2}/>
                </FlexWrapper>
            </Container>
        </StyledWorks>
    )
}

const StyledWorks = styled.section`
${FlexWrapper}{
    gap: 30px;
}
`

