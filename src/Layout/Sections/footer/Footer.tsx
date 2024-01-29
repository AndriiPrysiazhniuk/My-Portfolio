import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from '../../../components/flex-wrapper/FlexWrapper';
import {Icon} from '../../../components/icon/Icon';
import {Container} from "../../../components/container/Container";
import {theme} from "../../../Styles/Theme";
import {font} from "../../../Styles/Common";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper direction={'column'} align={'center'}>
                    <Name>Andrii</Name>
                    <SocialList>

                        <SocialItem>
                            <SocialIconLink>
                                <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={'telegram'}/>
                            </SocialIconLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialIconLink>
                                <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={'linkedin'}/>
                            </SocialIconLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialIconLink>
                                <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={'instagram'}/>
                            </SocialIconLink>
                        </SocialItem>
                    </SocialList>
                    <Copyright>© 2024 Andrii Prysiazhniuk, All Rights Reserved.</Copyright>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: ${theme.colors.primaryBg};
    padding: 40px 0;
`
const Name = styled.span`
    ${font({family:"'Josefin Sans', sans-serif", weight:700, Fmax:22, Fmin:16})}
    letter-spacing: 3px;
    
`
const SocialList = styled.ul`
    display: flex;
    gap: 20px;
    margin: 30px 0;


`
const SocialItem = styled.ul`


`
const SocialIconLink = styled.a`
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.accent};
    transition: .5s;

    &:hover {
        background-color: ${theme.colors.accent};
        color: ${theme.colors.primaryBg};
        transform: translateY(-4px);

    }
`
const Copyright = styled.small`
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    opacity: 0.5;
`
