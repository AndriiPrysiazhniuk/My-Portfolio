import styled from "styled-components";
import {Icon} from "../icon/Icon";
import {FlexWrapper} from "../flex-wrapper/FlexWrapper";

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
                {/*<IconWrapper>*/}
                    <Icon iconId={iconId}/>
                {/*</IconWrapper>*/}
                <StyledSkillTitle>{skillTitle}</StyledSkillTitle>
                <StyledSkillDescription>{skillDescription}</StyledSkillDescription>
            </FlexWrapper>
        </StyledSkill>
    )
}

const StyledSkill = styled.div`
    width: 380px;
    padding: 62px 20px 40px;
`

const StyledSkillTitle = styled.h3`
    margin: 70px 0 15px;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 700;
    font-size: 16px;

    letter-spacing: 1px;
    text-transform: uppercase;
`
const StyledSkillDescription = styled.p`
    text-align: center;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.4;
`
