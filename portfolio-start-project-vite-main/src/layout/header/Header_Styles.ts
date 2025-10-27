import {theme} from "../../styles/Theme.ts";
import styled from "styled-components";

const Header = styled.header`
    background-color: ${theme.colors.primaryBG};
    padding: 20px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
`

export const S = {
    Header
}