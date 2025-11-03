import styled, {css} from "styled-components";
import {Link} from "../../../components/Link.tsx";
import {theme} from "../../../styles/Theme.ts";
import React, {useState} from "react";


export const MobileMenu = (props: { menuItems: Array<string> }) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => {setMenuIsOpen(!menuIsOpen)}
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </BurgerButton>
            <MobileMenuPopup isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link href="">{item}</Link>
                    </ListItem>
                })}
            </ul>
            </MobileMenuPopup>
        </StyledMobileMenu>
    )
}

const StyledMobileMenu = styled.nav`
    display: none;
    
    @media screen and (max-width: 768px){
        display: block;
    }
`

const MobileMenuPopup = styled.div<{isOpen: boolean}>`
    position: fixed;
    background-color: rgba(31, 31, 32, 0.9);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999;
    display: none;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        display: flex;
        justify-content: center;
        align-items: center;
    `}
    
    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 54px;
    }
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: relative;
    top: 45px;
    right: 45px;
    width: 32px;
    height: 32px;
    z-index: 999999;

    span {
        display: block;
        width: 32px;
        height: 5px;
        background-color: ${theme.colors.accent};
        position: absolute;
        left: 40px;
        bottom: 50px;

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgba(255, 255, 255, 0);
        `}
        
        &::before {
            content: "";
            display: block;
            width: 32px;
            height: 5px;
            background-color: ${theme.colors.accent};
            position: absolute;
            transform: translateY(-11px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(45deg) translateY(0);
                transform-origin: center;
            `}
        }
        &::after {
            content: "";
            display: block;
            width: 32px;
            height: 5px;
            background-color: ${theme.colors.accent};
            position: absolute;

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(-45deg) translateY(0);
                transform-origin: center;
            `}
        }
    }
`

const ListItem = styled.li`

`