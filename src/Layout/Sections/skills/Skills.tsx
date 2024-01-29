import styled from "styled-components";
import {FlexWrapper} from "../../../components/flex-wrapper/FlexWrapper";
import {Myskill} from "../../../components/skills/Myskill";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import {Container} from "../../../components/container/Container";

export const Skills = () => {

    const SkillsDataArray = [
        {
            iconId: 'code',
            skillTitle: 'html',
            skillDescription: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim`
        },
        {
            iconId: 'css',
            skillTitle: 'css',
            skillDescription: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim`
        },
        {
            iconId: 'react',
            skillTitle: 'react',
            skillDescription: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim`
        },
        {
            iconId: 'typescript',
            skillTitle: 'typescript',
            skillDescription: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim`
        },
        {
            iconId: 'styled-components',
            skillTitle: 'styled components',
            skillDescription: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim`
        },
        {
            iconId: 'figma',
            skillTitle: 'Redux',
            skillDescription: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim`
        }
    ]

    const mappedSkills = SkillsDataArray.map((el, index) => {
        return <Myskill key={el.iconId} iconId={el.iconId} skillTitle={el.skillTitle}
                        skillDescription={el.skillDescription}/>
    })
    return (
        <StyledSkills>
            <SectionTitle>My Skills</SectionTitle>
            <Container>
                <FlexWrapper justify={'space-between'} wrap={'wrap'}>
                    {mappedSkills}
                </FlexWrapper>
            </Container>
        </StyledSkills>
    )
}

const StyledSkills = styled.section`
    background-color: #252527;
    //text-align: center;
    min-height: 100vh;
`

