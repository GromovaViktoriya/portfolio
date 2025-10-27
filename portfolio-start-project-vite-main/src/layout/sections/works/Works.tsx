import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Work} from "./work/Work.tsx";
import socialImg from '../../../assets/images/proj-1.webp'
import timerImg from '../../../assets/images/proj-2.webp'
import {Container} from "../../../components/Container.tsx";
import {TabMenu} from "./tabMenu/TabMenu.tsx";
import { S } from "./Works_Styles.ts";
import React from "react";

const worksItems = ["All", "Landing Page", "React", "Spa"]

const workData = [
    {
        title: "Social Network",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        src: socialImg
    },
    {
        title: "Timer",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
        src: timerImg
    }]

export const Works: React.FC = () => {
    return (
        <S.Works>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={worksItems}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>
                    {workData.map((w) => {
                        return <Work title={w.title}
                                     description={w.description}
                                     src={w.src}/>
                    })}
                </FlexWrapper>
            </Container>
        </S.Works>
    )
        ;
};

