import styled from "styled-components";
import {Link} from "react-scroll";
import {theme} from "../../styles/Theme.ts";

const menuItems = [
    {
        title: "Home",
        href: "home",
    },
    {
        title: "About me",
        href: "about",
    },
    {
        title: "Portfolio",
        href: "portfolio",
    },
    {
        title: "Contact",
        href: "contact",
    }]

export const Menu = () => {
    return (
        <StyledMenu>
            <StyledUl>
                {menuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <NavLink to={item.href}
                              smooth={true}
                        >
                            {item.title}
                        </NavLink>
                    </ListItem>
                })}
            </StyledUl>
        </StyledMenu>
    )
}

const StyledMenu = styled.nav`

`

const StyledUl = styled.ul`
    display: flex;
    gap: 145px;

    @media (max-width: 1100px){
        gap: 65px;
    }
`

const NavLink = styled(Link)`
    font-weight: 300;
    font-size: 18px;

    position: relative;
    z-index: 0;

    &:hover {
        &::before {
            height: 1px;
        }
    }

    &::before {
        content: "";
        display: inline-block;
        height: 0;
        background-image: ${theme.colors.secondaryAccent};

        position: absolute;
        bottom: -2px;
        left: 0;
        right: 0;
        z-index: -1;
    }
`

const ListItem = styled.li`

`