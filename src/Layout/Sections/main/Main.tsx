import styled from "styled-components";
import myPhoto from '../../../assets/images/me.jpg'
import {FlexWrapper} from "../../../components/flex-wrapper/FlexWrapper";
import {Container} from "../../../components/container/Container";
import {theme} from "../../../Styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={'center'} wrap={'wrap'} justify={'space-between'}>
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
    font-weight: 400;
    font-size: 27px;
`
const DevName = styled.h2`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 700;
    font-size: 50px;
    letter-spacing: 0.05em;
    margin: 10px 0;

    span {
        position: relative;
z-index: 0;
        &::before {
            content: '';
            position: absolute;
            bottom: 0;
            display: inline-block;
            width: 100%;
            height: 20px;
            z-index: -1;
            background-color: ${theme.colors.accent};
        }
    }
`
const Greeting = styled.span`
    font-size: 14px;
    font-weight: 400;
`

const PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;

    &::before {
        content: '';
        position: absolute;
        top: -24px;
        left: 24px;
        width: 360px;
        height: 585px;
        border: 5px solid ${theme.colors.accent};
        z-index: -1;
    }
    
`
    const MyPhoto = styled.img`
    width: 370px;
    height: 545px;
    object-fit: cover;

`
