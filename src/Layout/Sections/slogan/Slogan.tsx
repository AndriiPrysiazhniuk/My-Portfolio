import styled from "styled-components";
import {StyledButton} from "../../../components/StyledButton/StyledButton";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import {Container} from "../../../components/container/Container";
import {FlexWrapper} from "../../../components/flex-wrapper/FlexWrapper";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <Container>
                <FlexWrapper direction={'column'} align={'center'}>
                    <SectionTitle>
                        I am available for freelance
                        <p>Let`s work together</p>
                    </SectionTitle>
                    <StyledButton>Hire me</StyledButton>
                </FlexWrapper>
            </Container>
        </StyledSlogan>
    )
}

const StyledSlogan = styled.section`
    min-height: 30vh;
    background-color: #ff0202;

    p {
        font-size: 20px;
        line-height: 1.5;
    }

`