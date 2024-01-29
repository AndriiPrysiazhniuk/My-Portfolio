import styled from "styled-components";
import myPhoto from '../../../assets/images/me.jpg'
import {FlexWrapper} from "../../../components/flex-wrapper/FlexWrapper";
import {Container} from "../../../components/container/Container";
import {theme} from "../../../Styles/Theme";
import {font} from "../../../Styles/Common";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={'center'} justify={'space-around'} wrap={'wrap'}>
                    <GreetingBlock>
                        <Greeting>Hi There!!!</Greeting>
                        <DevName>I am <span>Andrii Prysiazhniuk,</span></DevName>
                        <MainTitle>Front-end Developer.</MainTitle>
                    </GreetingBlock>
                    <PhotoWrapper>
                        <MyPhoto src={myPhoto} alt=""/>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>

        </StyledMain>
    )
}

const StyledMain = styled.section`
    min-height: 100vh;
    background-color: #9ac261;
    display: flex;
`
const GreetingBlock = styled.div`
    padding: 0 4px 0;
`
const MainTitle = styled.h1`
    ${font({weight: 400, Fmax: 27, Fmin: 20})}
`
const DevName = styled.h2`
    ${font({family: "'Josefin Sans', sans-serif", weight: 700, Fmax: 50, Fmin: 36})};
    letter-spacing: 0.05em;
    margin: 10px 0;

    span {
        position: relative;
        z-index: 0;
        white-space: nowrap;

        &::before {
            content: '';
            display: inline-block;
            width: 100%;
            height: 20px;
            background-color: ${theme.colors.accent};

            position: absolute;
            bottom: 0;
            z-index: -1;
        }
    }

    @media ${theme.media.mobile} {
        margin: 15px 0 22px;
    }
`
const Greeting = styled.span`
    font-size: 14px;
    font-weight: 400;
`

const PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;
    margin-top: 65px;

    &::before {
        content: '';
        width: 370px;
        height: 585px;
        border: 5px solid ${theme.colors.accent};

        position: absolute;
        top: -24px;
        left: 24px;
        z-index: -1;

        @media ${theme.media.mobile} {
            width: 314px;
            height: 515px;
            top: -17px;
            left: 20px;
        }
    }

`
const MyPhoto = styled.img`
    width: 370px;
    height: 545px;
    margin-right: 15px;
    object-fit: cover;
    
    @media ${theme.media.mobile} {
        margin-right: 13px;
        width: 310px;
        height: 470px;
        object-fit: cover;
    }
`
