import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Container} from "../../components/Container.tsx";
import {Logo} from "../../components/logo/Logo.tsx";
import {MobileMenu} from "./mobileMenu/MobileMenu.tsx";
import {DesktopMenu} from "./desktopMenu/DesktopMenu.tsx";
import React from "react";


export const Header = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;

    React.useEffect(()=> {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <StyledHeader>
            <Container>
                <FlexWrapper  justify={"space-between"} align={"center"} >
                    <Logo/>
                    {width < breakpoint ? <MobileMenu/>
                        : <DesktopMenu/>}
                </FlexWrapper>
            </Container>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    padding: 26px 0;
    margin-bottom: 13px;
`