import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";
import {animateScroll as scroll} from "react-scroll";

export const GoTopBtn: React.FC = () => {
    const [showBtn, setShowBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                setShowBtn(true);
            } else {
                setShowBtn(false);
            }
        })
    }, []);

    return (
        <>
            {showBtn && (
                <StyledGoTopBtn onClick={() => {scroll.scrollToTop()}}>
                    <Icon iconId={"arrowTop"} width={"16"} height={"15"} viewBox={"0 0 16 15"}/>
                </StyledGoTopBtn>)}

        </>
    );
};

const StyledGoTopBtn = styled.button`
    background: rgba(0, 0, 0, 0.3);
    padding: 7px;
    position: fixed;
    right: 30px;
    bottom: 30px;
    cursor: pointer;
`;