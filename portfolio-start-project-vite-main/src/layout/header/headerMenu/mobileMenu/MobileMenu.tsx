import {Menu} from "../menu/Menu.tsx";
import React, {useState} from "react";
import {S} from "../HeaderMenu_styles.ts";


export const MobileMenu: React.FC = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => {setMenuIsOpen(!menuIsOpen)}
    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </S.BurgerButton>

            <S.MobileMenuPopup isOpen={menuIsOpen} onClick={()=> setMenuIsOpen(false)}>
                <Menu />
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};

