import styled from "styled-components";
import {theme} from "../../Styles/Theme";

export const ItemLink = styled.a`
    position: relative;
    z-index: 0;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 10px;


    &:hover {
        &::before {
            height: 10px;
        }
    }

    &::before {
        content: '';
        display: inline-block;
        max-height: 10px;
        background-color: ${theme.colors.accent};
        position: absolute;
        bottom: 5px;
        left: 0;
        right: 0;
        z-index: -1;
    }
`

