import React from "react";
import styled from "styled-components";
import {ItemLink} from "../ItemLink/ItemLink";
import {theme} from "../../Styles/Theme";
import {StyledButton} from "../StyledButton/StyledButton";

type PropsType = {
    title: string
    description: string
    src: string
}
export const Project = (props: PropsType) => {
    const {title, description, src} = props
    return (
        <StyledProject>
            <ImageWrapper>
                <Image src={src} alt="sorry the image is not available"/>
                <StyledButton>View Project</StyledButton>
            </ImageWrapper>
            <DescriptionProjectContainer>
                <StyledWorksTitle>{title}</StyledWorksTitle>
                <StyledWorksDescription>{description}</StyledWorksDescription>
                <ItemLink href={'#'}>Demo</ItemLink>
                <ItemLink href={'#'}>Code</ItemLink>
            </DescriptionProjectContainer>
        </StyledProject>
    )
}

const StyledProject = styled.div`
    background-color: ${theme.colors.secondaryBg};
    width: 330px;
    flex-grow: 1;

    ${ItemLink} {
        padding: 10px 0;

        & + ${ItemLink} {
            margin-left: 20px;
        }
    }

    @media ${theme.media.desktop} {
        max-width: 540px;
    }
`
const ImageWrapper = styled.div`
    position: relative;

    ${StyledButton} {
        opacity: 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transition: all .3s;
        transform: translate(-50%, -50%);

        &::before {
            width: 100%;
            height: 100%;
        }
    }

    &::before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(4px);
        transition: all .3s;
        opacity: 0;
    }

    &:hover {
        &::before {
            opacity: 1;
        }

        ${StyledButton} {
            opacity: 1;
        }
    }
    
    @media ${theme.media.tablet} {
        &::before {
            opacity: 1;
        }

        ${StyledButton} {
            opacity: 1;
        }        
    }
`
const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`

const DescriptionProjectContainer = styled.div`
    padding: 25px 20px;
`
const StyledWorksTitle = styled.h3`
    //color: #fff;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 1px;
`
const StyledWorksDescription = styled.p`
    margin: 14px 0 10px;
    font-size: 14px;
    font-weight: 400;

`


