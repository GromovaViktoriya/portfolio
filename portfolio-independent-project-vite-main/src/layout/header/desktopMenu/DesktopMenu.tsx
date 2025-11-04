import {Menu} from "../../../components/menu/Menu.tsx";
import styled from "styled-components";
import * as React from "react";

export const DesktopMenu: React.FC = () => {
    return (
        <StyledDesktopMenu>
            <Menu/>
        </StyledDesktopMenu>
    );
};

const StyledDesktopMenu = styled.nav`
   
`