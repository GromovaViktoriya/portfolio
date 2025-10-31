import {SectionTitle} from "../../../components/SectionTitle.ts";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Work} from "./work/Work.tsx";
import socialImg from '../../../assets/images/proj-1.webp'
import timerImg from '../../../assets/images/proj-2.webp'
import {Container} from "../../../components/Container.ts";
import {TabMenu, TabsStatusType} from "./tabMenu/TabMenu.tsx";
import {S} from "./Works_Styles.ts";
import React, {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";

// const tabsItems = ["All", "Landing Page", "React", "Spa"]

const tabsItems: Array<{ title: string, status: TabsStatusType }> = [
    {
        title: "All",
        status: "all"
    },
    {
        title: "Landing Page",
        status: "landing"
    },
    {
        title: "React",
        status: "react"
    },
    {
        title: "Spa",
        status: "spa"
    },
]

const workData = [
    {
        title: "Social Network",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        src: socialImg,
        type: "spa",
        id: 1
    },
    {
        title: "Timer",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
        src: timerImg,
        type: "react",
        id: 2
    },
    {
        title: "Social Network",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        src: socialImg,
        type: "spa",
        id: 3
    },
    {
        title: "Timer",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
        src: timerImg,
        type: "react",
        id: 4
    },
    {
        title: "Social Network",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        src: socialImg,
        type: "spa",
        id: 5
    },
    {
        title: "Timer",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
        src: timerImg,
        type: "react",
        id: 6
    },
]

export const Works: React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState("all");
    let filteredWorks = workData;

    if (currentFilterStatus === "landing") {
        filteredWorks = workData.filter((work) => work.type === "landing");
    }
    if (currentFilterStatus === "react") {
        filteredWorks = workData.filter((work) => work.type === "react");
    }
    if (currentFilterStatus === "spa") {
        filteredWorks = workData.filter((work) => work.type === "spa");
    }

    function changeFilterStatus(value: TabsStatusType) {
        setCurrentFilterStatus(value);
    }

    return (
        <S.Works id={"works"}>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu tabsItems={tabsItems}
                         changeFilterStatus={changeFilterStatus}
                         currentFilterStatus={currentFilterStatus}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>
                    <AnimatePresence>
                        {filteredWorks.map((w) => {
                            return (
                                <motion.div style={{ width: "400px",flexGrow: 1, maxWidth: "540px" }}
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    exit={{opacity: 0}}
                                    key={w.id}
                                    layout={true}
                                >
                                    <Work title={w.title}
                                          description={w.description}
                                          src={w.src}
                                          key={w.id}
                                    />
                                </motion.div>
                            )
                        })}
                    </AnimatePresence>
                </FlexWrapper>
            </Container>
        </S.Works>
    )
        ;
};

