import {theme} from "./Theme.ts";
import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    @font-face {
        font-family: "Arodora Pro Light";
        font-weight: 300;
        src: url("../assets/fonts/ArodoraPro-Light.otf") format("opentype");
        font-style: normal;
    }

    @font-face {
        font-family: "Nico Moji";
        font-weight: 400;
        src: url("../assets/fonts/NicoMoji.ttf") format("truetype");
        font-style: normal;
    }

    @font-face {
        font-family: "NEXT ART";
        font-weight: 400;
        src: url("../assets/fonts/NEXT-ART_Regular.otf") format('opentype');
        font-style: normal;
    }

    @font-face {
        font-family: "NEXT ART";
        font-weight: 600;
        src: url("../assets/fonts/NEXT-ART_SemiBold.otf") format('opentype');
        font-style: normal;
    }

    @font-face {
        font-family: "NEXT ART";
        font-weight: 700;
        src: url("../assets/fonts/NEXT-ART_Bold.otf") format('opentype');
        font-style: normal;
    }

    body {
        margin: 0;
        font-family: 'Arodora Pro Light', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${theme.colors.font};
        line-height: 1.2;
        overflow-x: clip;
        background-image: ${theme.colors.primaryBG};
        min-width: 375px;
    }

    a {
        text-decoration: none;
        color: ${theme.colors.font};
        cursor: pointer;
    }

    ul {
        list-style: none;
    }

    button {
        background-color: unset;
        border: none;
        cursor: pointer;
        color: #000;
    }
    

    h1, h2, h3  {
        font-family: "NEXT ART", sans-serif;
        color: ${theme.colors.font};
    }
   
    p {
        font-weight: 300;
        font-size: 18px;
        color: ${theme.colors.font};
    }

`