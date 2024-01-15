import styled from "styled-components";
import {theme} from "../../Styles/Theme";

export const SectionTitle = styled.h2`
    text-align: center;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 600;
    font-size: 36px;
    letter-spacing: 5px;
    position: relative;
    margin-bottom: 90px;

    &::before {
        content: '';
        display: inline-block;
        position: absolute;
        width: 55px;
        height: 1px;
        background-color: ${theme.colors.accent};
        left: 50%;
        bottom: -30px;
        transform: translateX(-50%);
    }
`