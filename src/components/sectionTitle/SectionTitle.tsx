import styled from "styled-components";
import {theme} from "../../Styles/Theme";
import {font} from "../../Styles/Common";

export const SectionTitle = styled.h2`
    ${font({family: "'Josefin Sans', sans-serif", weight: 600, Fmax: 36, Fmin: 30})};
    text-align: center;
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
        @media ${theme.media.mobile} {
            bottom: -24px;
        }

    }
`