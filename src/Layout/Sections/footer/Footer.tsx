import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from '../../../components/flex-wrapper/FlexWrapper';
import {Icon} from '../../../components/icon/Icon';
import {Container} from "../../../components/container/Container";

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
    background-color: #c4eaf8;
`
const Name = styled.span`

`
const SocialList = styled.ul`
    display: flex;
    gap: 15px;
`
const SocialItem = styled.ul`


`
const SocialIconLink = styled.a`


`
const Copyright = styled.small`


`
