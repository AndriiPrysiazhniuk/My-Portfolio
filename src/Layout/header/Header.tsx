import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {Container} from "../../components/container/Container";
import {FlexWrapper} from "../../components/flex-wrapper/FlexWrapper";
import {HeaderMenu} from "./headerMenu/HeaderMenu";

type PropsType = {
    image?: string
    infoText?: string
}

const items = ['Home', 'Skills', 'Works', 'Testimony', 'Contacts']
export const Header = (props: PropsType) => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo/>
                    <HeaderMenu menuItems={items}/>
                </FlexWrapper>

            </Container>
        </StyledHeader>
    )
}

const StyledHeader = styled.div`
    background: rgba(31, 31, 32, 0.9);
    padding: 20px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;

`