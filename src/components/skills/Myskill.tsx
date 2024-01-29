import styled from "styled-components";
import {Icon} from "../icon/Icon";
import {FlexWrapper} from "../flex-wrapper/FlexWrapper";
import {theme} from "../../Styles/Theme";

type PropsType = {
    iconId: string
    skillTitle: string
    skillDescription: string
}


export const Myskill = (props: PropsType) => {
    const {iconId, skillTitle, skillDescription} = props

    return (
        <StyledSkill>
            <FlexWrapper direction={'column'} align={'center'}>
                <IconWrapper>
                    <Icon iconId={iconId}/>
                </IconWrapper>
                <StyledSkillTitle>{skillTitle}</StyledSkillTitle>
                <StyledSkillDescription>{skillDescription}</StyledSkillDescription>
            </FlexWrapper>
        </StyledSkill>
    )
}

const StyledSkill = styled.div`
    width: 330px;
    flex-grow: 1;
    padding: 62px 20px 40px;
    @media ${theme.media.mobile} {
        padding: 62px 0 40px;
    }
`
export const IconWrapper = styled.div `
    //z-index: 0;
    position: relative;

    &::before {
        content: '';
        display: inline-block;
        width: 80px;
        height: 80px;
        background-color: rgba(255, 255, 255, 0.1);
        transform: rotate(45deg) translate(-50%, -50%);

        position: absolute;
        left: 50%;
        top: 50%;
        transform-origin: top left;
    }
`
const StyledSkillTitle = styled.h3`
    margin: 70px 0 15px;
    text-transform: uppercase;
`
const StyledSkillDescription = styled.p`
    text-align: center;
    line-height: 1.4;
`
