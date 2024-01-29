import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";
import {font} from "./Common";

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    ul, li {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    a {
        list-style: none;
        text-decoration: none;
        color: #fff;
        cursor: pointer;
    }

    button {
        background-color: unset;
        border: none;
        color: ${theme.colors.font};
        cursor: pointer;

    }

    body {
        color: ${theme.colors.font};
        font-size: 20px;
        font-weight: 500;
        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        line-height: 1.2;
        min-width: 360px;
    }

    section {
        padding: 100px 0;

        @media ${theme.media.mobile} {
            padding: 80px 0;
        }
    }

    section:nth-of-type(odd) {
        background-color: ${theme.colors.primaryBg};
    }

    section:nth-of-type(even) {
        background-color: ${theme.colors.secondaryBg};
    }

    h3 {

        ${font({family: "'Josefin Sans', sans-serif", weight: 700, Fmax: 50, Fmin: 24})}

        font-size: 16px;
        letter-spacing: 1px;
    }

    p {
        font-weight: 400;
        font-size: 14px;
        line-height: 1.4;
    }
`

