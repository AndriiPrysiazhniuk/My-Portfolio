import React from "react";
import styled from "styled-components";
import {StyledButton} from "../StyledButton/StyledButton";
import project1 from '../../assets/images/proj-1.webp'

type PropsType = {
    title: string
    description: string
    src: string
}
export const Project = (props: PropsType) => {
    const {title, description, src} = props
    return (
        <StyledProject>

            <Image src={src} alt="sorry the image is not available"/>

            <StyledWorksTitle>{title}</StyledWorksTitle>
            <StyledWorksDescription>{description}</StyledWorksDescription>
                <StyledLink>Demo</StyledLink>
                <StyledLink>Code</StyledLink>

        </StyledProject>
    )
}

const StyledProject = styled.h3`
    background-color: #252527;
    color: #fff;
    max-width: 540px;
    width: 100%;
`
const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
    &:hover{
        
    }
`
const StyledWorksTitle = styled.h3`
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 1px;
`
const StyledWorksDescription = styled.p`
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 1px;
`
const StyledLink = styled.a`
 
`
