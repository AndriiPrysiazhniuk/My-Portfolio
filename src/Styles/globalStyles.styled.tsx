import styled, {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

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
    }

    button {
        background-color: unset;
        border: none;
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
    }

    section {
        padding: 100px 0;
    }

    section:nth-of-type(odd) {
        background-color: ${theme.colors.primaryBg};
    }

    section:nth-of-type(even) {
        background-color: ${theme.colors.secondaryBG};
    }

`

