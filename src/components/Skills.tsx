// import { useState, useEffect, useRef } from 'react';
// import { motion } from 'framer-motion';
import {
    Flex, Heading, Tooltip, Spacer, Container
} from '@chakra-ui/react';


import {
    SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiChakraui, SiTailwindcss,
    SiExpress, SiJquery, SiNodedotjs, SiTypescript,
    SiFirebase, SiMysql, SiMongodb, SiTrello,
    SiPandas, SiNumpy, SiJupyter, SiPython,
    SiVisualstudiocode, SiGithub, SiMicrosoftoffice, 
    } from 'react-icons/si';

type SkillsProps = {
    mobileLayout: boolean | undefined
}

export default function Skills({mobileLayout}: SkillsProps) {

    return (
        <Flex 
        direction="column" 
        color="white" 
        my={mobileLayout ? 0 : 20}
        >
            <Container
            maxWidth={{base: "75ch", lg: "none"}}
            color="white"
            >
                <Heading as="h1" size={mobileLayout ? "xl" : "2xl"}> Skills & Tools </Heading>
                <Flex
                justifyContent={mobileLayout ? "center" : "normal"}
                direction={mobileLayout ? "row" : "column"} 
                maxH={mobileLayout ? "none" : "350px"} 
                gap={mobileLayout ? 10 : 20} 
                my={10}
                wrap={mobileLayout ? "wrap" : "nowrap"}
                >
                    <Flex direction={mobileLayout ? "column" : "row"} alignItems="center" wrap="wrap" gap={2}>
                        <Tooltip label="HTML5" placement="top" fontSize="md">
                            <span>
                                <SiHtml5 size="4em"/>
                            </span>
                        </Tooltip>
                        <Spacer/>
                        <Tooltip label="CSS3" placement="top" fontSize="md">
                            <span>
                                <SiCss3 size="4em"/>
                            </span>
                        </Tooltip>
                        <Spacer/>
                        <Tooltip label="JavaScript" placement="top" fontSize="md">
                            <span>
                                <SiJavascript size="4em"/>
                            </span>
                        </Tooltip>
                        <Spacer/>
                        <Tooltip label="jQuery" placement="top" fontSize="md">
                            <span>
                                <SiJquery size="4em"/>
                            </span>
                        </Tooltip>
                        <Spacer/>
                        <Tooltip label="NodeJS" placement="top" fontSize="md">
                            <span>
                                <SiNodedotjs size="4em"/>
                            </span>
                        </Tooltip>
                        <Spacer/>
                        <Tooltip label="Express" placement="top" fontSize="md">
                            <span>
                                <SiExpress size="4em"/>
                            </span>
                        </Tooltip>
                    </Flex>

                    <Flex direction={mobileLayout ? "column" : "row"} alignItems="center" wrap="wrap" gap="4em">
                        <Spacer/>
                        <Tooltip label="TypeScript" placement="top" fontSize="md">
                            <span>
                                <SiTypescript size="4em"/>
                            </span>
                        </Tooltip>
                        <Spacer/>
                        <Tooltip label="React" placement="top" fontSize="md">
                            <span>
                                <SiReact size="4em"/>
                            </span>
                        </Tooltip>
                        <Spacer/>
                        <Tooltip label="Next.js" placement="top" fontSize="md">
                            <span>
                                <SiNextdotjs size="4em"/>
                            </span>
                        </Tooltip>
                        <Spacer/>
                        <Tooltip label="Chakra UI" placement="top" fontSize="md">
                            <span>
                                <SiChakraui size="4em"/>
                            </span>
                        </Tooltip>
                        <Spacer/>
                        <Tooltip label="Tailwind CSS" placement="top" fontSize="md">
                            <span>
                                <SiTailwindcss size="4em"/>
                            </span>
                        </Tooltip>
                        <Spacer/>
                    </Flex>

                    <Flex direction={mobileLayout ? "column" : "row"} alignItems="center" wrap="wrap">
                        <Tooltip label="Python" placement="top" fontSize="md">
                            <span>
                                <SiPython size="4em"/>
                            </span>
                        </Tooltip>
                        <Spacer/>
                        <Tooltip label="Pandas" placement="top" fontSize="md">
                            <span>
                                <SiPandas size="4em"/>
                            </span>
                        </Tooltip>
                        <Spacer/>
                        <Tooltip label="Numpy" placement="top" fontSize="md">
                            <span>
                                <SiNumpy size="4em"/>
                            </span>
                        </Tooltip>
                        <Spacer/>
                        <Tooltip label="Jupyter Notebook" placement="top" fontSize="md">
                            <span>
                                <SiJupyter size="4em"/>
                            </span>
                        </Tooltip>
                        <Spacer/>
                        <Tooltip label="GitHub" placement="top" fontSize="md">
                            <span>
                                <SiGithub size="4em"/>
                            </span>
                        </Tooltip>
                        <Spacer/>
                        <Tooltip label="VSCode" placement="top" fontSize="md">
                            <span>
                                <SiVisualstudiocode size="4em"/>
                            </span>
                        </Tooltip>
                    </Flex>

                    <Flex
                    direction={mobileLayout ? "column" : "row"}
                    justifyContent="center"
                    alignItems="center"  
                    wrap="wrap"
                    gap="4em">
                        <Spacer/>
                        <Tooltip label="Firebase" placement="top" fontSize="md">
                            <span>
                                <SiFirebase size="4em"/>
                            </span>
                        </Tooltip>
                        <Spacer/>
                        <Tooltip label="MongoDB" placement="top" fontSize="md">
                            <span>
                                <SiMongodb size="4em"/>
                            </span>
                        </Tooltip>
                        <Spacer/>
                        <Tooltip label="MySQL" placement="top" fontSize="md">
                            <span>
                                <SiMysql size="4em"/>
                            </span>
                        </Tooltip>
                        <Spacer/>
                        <Tooltip label="Microsoft Office" placement="top" fontSize="md">
                            <span>
                                <SiMicrosoftoffice size="4em"/>
                            </span>
                        </Tooltip>
                        <Spacer/>
                        <Tooltip label="Trello" placement="top" fontSize="md">
                            <span>
                                <SiTrello size="4em"/>
                            </span>
                        </Tooltip>
                        <Spacer/>
                        

                    </Flex>
                </Flex>
            </Container>
        </Flex>
    );
}
