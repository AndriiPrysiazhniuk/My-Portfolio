import styled from "styled-components";
import {StyledButton} from "../../../components/StyledButton/StyledButton";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import {Container} from "../../../components/container/Container";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <Container>
                <SectionTitle>
                    I am available for freelance
                    <p>Let`s work together</p>
                </SectionTitle>
                <StyledButton>Hire me</StyledButton>
            </Container>
        </StyledSlogan>
    )
}

const StyledSlogan = styled.section`
    min-height: 30vh;
    background-color: #ff0202;
`