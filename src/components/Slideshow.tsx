import { useState, useEffect, useRef } from 'react';
import { motion, Variants } from 'framer-motion';
import {
    Box, Flex, Center, Stack,
    Container, Heading, Text,
    Card, CardHeader, CardBody, CardFooter,
    Button, Link, Tooltip,
    useBreakpointValue, Image,
    Spacer, 
} from '@chakra-ui/react';

import { 
    MdWavingHand, MdKeyboardDoubleArrowDown 
} from 'react-icons/md'

import { 
    DiReact, DiMysql, DiMongodb,
    DiScrum, DiPython, DiNodejsSmall, 
    DiJqueryLogo, DiJavascript, DiHtml5,
    DiGithubBadge, DiFirebase, DiCss3,
    DiVisualstudio, DiWindows, DiTrello,
} from 'react-icons/di'

import { 
    TbBrandNextjs, TbBrandFirebase, TbBrandReact,
    TbBrandTailwind,
} from 'react-icons/tb'

export default function Slideshow() {
    const mobileLayout = useBreakpointValue({ base: true, sm: true, xl: false});

    const headerVariants: Variants = {
        hidden: {
            x: -300,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1
        }
    }

    return (
        <Flex
        direction="column"
        bgGradient="linear(to-b, #4D194D, #006466)"
        w="100%"
        h="fit-content"
        px={{base: "0", lg: "15em"}}
        pt="11em"
        gap="9em"
        >
            <Flex direction={mobileLayout ? "column" : "row"} alignItems="center">
                <Box 
                h="fit-content"
                w="inherit"
                pt={10} 
                >
                    <Container
                    maxWidth={{base: "75ch"}}
                    color="white" 
                    >
                        <motion.div
                        initial="hidden"
                        animate="visible"
                        >
                            <motion.div
                            variants={headerVariants}
                            transition={{delay: 0.5, duration: 0.5}}
                            >
                                <Stack
                                direction="row" 
                                alignItems="center">
                                    <Text as="b" fontSize={mobileLayout ? "4xl" : "5xl"}> 
                                        Hello!
                                    </Text>
                                    <motion.div
                                    animate={{ rotate: -30 }}
                                    transition={{ duration: 0.2, repeat: Infinity, repeatType: "reverse"}}>
                                        <MdWavingHand size="3em"/>
                                    </motion.div>
                                </Stack>
                            </motion.div>

                            <motion.div
                            variants={headerVariants}
                            transition={{ delay: 1.5, duration: 2 }}
                            >
                                <Text                            
                                fontWeight="bold"  
                                fontSize={mobileLayout ? "2xl" : "5xl"}> 
                                    I'm Kevin Abelgas
                                </Text>
                            </motion.div>

                            <motion.div
                            variants={headerVariants}
                            transition={{ delay: 3, duration: 2 }}
                            >
                                <Text
                                fontSize={{base: "md", sm: "xl"}}>
                                    An aspiring web developer and current student of De La Salle 
                                    University taking up BS Computer Science - Software Technology. 
                                </Text>

                                <Stack direction="row" my={5}>
                                    <Button
                                    size={{base: "xs", md: "md"}}
                                    color="white"
                                    bg="#4D194D"
                                    _hover={{bg: "#212F45"}}
                                    _active={{color: "#a2d2ff"}}
                                    > 
                                        View Projects
                                    </Button>

                                    <Button
                                    as={Link}
                                    href="https://github.com/kevvvvin"
                                    size={{base: "xs", md: "md"}}
                                    color="white"
                                    rightIcon={<DiGithubBadge size="1.5em" />}
                                    bg="#4D194D"
                                    _hover={{bg: "#212F45", textDecoration: "none"}}
                                    _active={{color: "#a2d2ff"}}
                                    isExternal
                                    > 
                                        View GitHub
                                    </Button>
                                </Stack>
                            </motion.div>
                        </motion.div>

                    </Container>
                </Box>

                <motion.div
                animate={{opacity: [0, 1]}}
                transition={{delay: 5, duration : 2}}
                >
                    <Image src="https://dummyimage.com/600x600/5a3485/ebebeb" objectFit="cover"/>
                </motion.div>
            </Flex>

            <Center
            h="fit-content"
            >
                <motion.div
                animate={{y: [-5, 5]}}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse"}}
                >
                    <MdKeyboardDoubleArrowDown size="2em" color="white"/>
                </motion.div>
            </Center>
                
            <Flex direction="row">
                <Box
                w="inherit"
                color="white"
                as={motion.div}
                initial={{ x: -50, opacity: 0}}
                whileInView={{ x: 0, opacity: 1, duration: 2}}
                
                >
                    <Container
                    alignItems="center"
                    maxWidth="120ch"
                    >
                        <Heading as="h1" size={mobileLayout ? "xl" : "2xl"}> About </Heading>
                        <Text py={5} fontSize={{base: "md", sm: "xl"}}> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Enim nec dui nunc mattis enim ut tellus elementum. Lorem ipsum 
                            dolor sit amet consectetur adipiscing elit. Pharetra et ultrices 
                            neque ornare. Faucibus turpis in eu mi bibendum. Et malesuada 
                            fames ac turpis egestas maecenas pharetra. Arcu odio ut sem nulla 
                            pharetra diam sit amet. Sapien faucibus et molestie ac feugiat sed 
                            lectus. Maecenas volutpat blandit aliquam etiam erat.
                        </Text>
                    </Container>
                    
                </Box>
            </Flex>
            
            <Flex direction="row">
                <Box
                w="inherit"
                color="white"
                as={motion.div}
                initial={{ x: -50, opacity: 0}}
                whileInView={{ x: 0, opacity: 1 }}
                >
                    <Container
                    alignItems="center"
                    maxWidth="75ch"
                    >
                        <Heading as="h1" size={mobileLayout ? "xl" : "2xl"}> Skills & Tools </Heading>
                        <Stack
                        direction="row"
                        pt={5}
                        flexWrap="wrap"
                        >
                            <Tooltip label="HTML5" placement="top" fontSize="md">
                                <span>
                                    <DiHtml5 size="4em"/>
                                </span>
                            </Tooltip>
                            <Tooltip label="CSS3" placement="top" fontSize="md">
                                <span>
                                    <DiCss3 size="4em"/>
                                </span>
                            </Tooltip>
                            <Tooltip label="JavaScript" placement="top" fontSize="md">
                                <span>
                                    <DiJavascript size="4em"/>
                                </span>
                            </Tooltip>
                            <Tooltip label="jQuery" placement="top" fontSize="md">
                                <span>
                                    <DiJqueryLogo size="4em"/>
                                </span>
                            </Tooltip>
                            <Tooltip label="NodeJS" placement="top" fontSize="md">
                                <span>
                                    <DiNodejsSmall size="4em"/>
                                </span>
                            </Tooltip>
                            <Tooltip label="React" placement="top" fontSize="md">
                                <span>
                                    <DiReact size="4em"/>
                                </span>
                            </Tooltip>
                            <Tooltip label="Python" placement="top" fontSize="md">
                                <span>
                                    <DiPython size="4em"/>
                                </span>
                            </Tooltip>
                            <Tooltip label="Firebase" placement="top" fontSize="md">
                                <span>
                                    <DiFirebase size="4em"/>
                                </span>
                            </Tooltip>
                            <Tooltip label="MongoDB" placement="top" fontSize="md">
                                <span>
                                    <DiMongodb size="4em"/>
                                </span>
                            </Tooltip>
                            <Tooltip label="MySQL" placement="top" fontSize="md">
                                <span>
                                    <DiMysql size="4em"/>
                                </span>
                            </Tooltip>
                            <Tooltip label="Visual Studio Code" placement="top" fontSize="md">
                                <span>
                                    <DiVisualstudio size="4em"/>
                                </span>
                            </Tooltip>
                            <Tooltip label="Windows" placement="top" fontSize="md">
                                <span>
                                    <DiWindows size="4em"/>
                                </span>
                            </Tooltip>
                            <Tooltip label="Trello" placement="top" fontSize="md">
                                <span>
                                    <DiTrello size="4em"/>
                                </span>
                            </Tooltip>
                            <Tooltip label="GitHub" placement="top" fontSize="md">
                                <span>
                                    <DiGithubBadge size="4em"/>
                                </span>
                            </Tooltip>
                            <Tooltip label="Scrum" placement="top" fontSize="md">
                                <span>
                                    <DiScrum size="4em"/>
                                </span>
                            </Tooltip>
                        </Stack>
                    </Container>
                    
                </Box>
            </Flex>

            <Flex direction="column">
                <Box
                color="white"
                w="inherit"
                pl={5}
                >
                    <motion.div
                    initial={{ x: -50, opacity: 0}}
                    whileInView={{ x: 0, opacity: 1, duration: 2}}>
                        <Heading as="h1" size={mobileLayout ? "xl" : "2xl"}> Projects </Heading>
                    </motion.div>
                        
                        <Flex
                        as={motion.div}
                        justifyContent="center"
                        initial={{ x: 50, opacity: 0}}
                        whileInView={{ x: 0, opacity: 1, transition: {duration: 2} }}
                        mt={10}
                        >
                            <Card color="white" bg="whiteAlpha.200" my={5}>
                                <CardHeader pb={0}>
                                    <Flex direction="row" alignItems="center">
                                        <Tooltip
                                        hasArrow
                                        label="Link unavailable. The GitHub repository is
                                        currently private."
                                        placement="top">
                                            <Heading as="h2" fontSize="3xl"> FaceGram </Heading>
                                        </Tooltip>
                                        <Spacer/>
                                        <Tooltip
                                        hasArrow
                                        label="Firebase, React, NextJS, TailwindCSS"
                                        placement="top">
                                            <Flex>
                                                <TbBrandFirebase size="2em"/>
                                                <TbBrandReact size="2em"/>
                                                <TbBrandNextjs size="2em"/>
                                                <TbBrandTailwind size="2em"/>
                                            </Flex>
                                        </Tooltip>
                                    </Flex>
                                </CardHeader>
                                <CardBody>
                                    <Flex direction={mobileLayout ? "column" : "row"} alignItems="center">
                                        <Text fontSize={{base: "md", sm: "xl"}}>
                                            <Container
                                            alignItems="center"
                                            maxWidth="60ch"
                                            >
                                                FaceGram is an Instagram clone developed in partial fulfillment of STSWENG.
                                                I worked as a developer in a team and focused mainly on backend functionality
                                                such as a like & follow system and other features, and connecting them to the
                                                database and the frontend.
                                            </Container>
                                        </Text>

                                        <Image src="facegram-prev.png" w="600px" h="300px" borderRadius={10}/>
                                    </Flex>
                                </CardBody>
                            </Card>
                        </Flex>

                        <Flex
                        as={motion.div}
                        justifyContent="center"
                        initial={{ x: -50, opacity: 0}}
                        whileInView={{ x: 0, opacity: 1, transition: {duration: 2}}}
                        mt={10}
                        >
                            <Card color="white" bg="whiteAlpha.200" my={5}>
                                <CardHeader pb={0}>
                                    <Flex direction="row" alignItems="center">
                                        <Tooltip
                                        hasArrow
                                        label="Link unavailable. The GitHub repository is
                                        currently private."
                                        placement="top">
                                            <Heading as="h2" fontSize="3xl"> Lorem ipsum </Heading>
                                        </Tooltip>
                                        <Spacer/>
                                        <Tooltip
                                        hasArrow
                                        label="Firebase, React, NextJS, TailwindCSS"
                                        placement="top">
                                            <Flex>
                                                <TbBrandFirebase size="2em"/>
                                                <TbBrandReact size="2em"/>
                                                <TbBrandNextjs size="2em"/>
                                                <TbBrandTailwind size="2em"/>
                                            </Flex>
                                        </Tooltip>
                                    </Flex>
                                </CardHeader>
                                <CardBody>
                                    <Flex direction={mobileLayout ? "column" : "row"} alignItems="center">
                                        <Image src="facegram-prev.png" w="600px" h="300px" borderRadius={10}/>

                                        <Text fontSize={{base: "md", sm: "xl"}}>
                                            <Container
                                            alignItems="center"
                                            maxWidth="60ch"
                                            >
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                                                do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                                Enim nec dui nunc mattis enim ut tellus elementum. Lorem ipsum 
                                                dolor sit amet consectetur adipiscing elit. Pharetra et ultrices 
                                                neque ornare. Faucibus turpis in eu mi bibendum.
                                            </Container>
                                        </Text>
                                    </Flex>
                                </CardBody>
                            </Card>
                        </Flex>

                        <Flex
                        as={motion.div}
                        justifyContent="center"
                        initial={{ x: 50, opacity: 0}}
                        whileInView={{ x: 0, opacity: 1, transition: {duration: 2}}}
                        mt={10}
                        >
                            <Card color="white" bg="whiteAlpha.200" my={5}>
                                <CardHeader pb={0}>
                                    <Flex direction="row" alignItems="center">
                                        <Tooltip
                                        hasArrow
                                        label="Link unavailable. The GitHub repository is
                                        currently private."
                                        placement="top">
                                            <Heading as="h2" fontSize="3xl"> Lorem ipsum </Heading>
                                        </Tooltip>
                                        <Spacer/>
                                        <Tooltip
                                        hasArrow
                                        label="Firebase, React, NextJS, TailwindCSS"
                                        placement="top">
                                            <Flex>
                                                <TbBrandFirebase size="2em"/>
                                                <TbBrandReact size="2em"/>
                                                <TbBrandNextjs size="2em"/>
                                                <TbBrandTailwind size="2em"/>
                                            </Flex>
                                        </Tooltip>
                                    </Flex>
                                </CardHeader>
                                <CardBody>
                                    <Flex direction={mobileLayout ? "column" : "row"} alignItems="center">
                                        <Text fontSize={{base: "md", sm: "xl"}}>
                                            <Container
                                            alignItems="center"
                                            maxWidth="60ch"
                                            >
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                                                do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                                Enim nec dui nunc mattis enim ut tellus elementum. Lorem ipsum 
                                                dolor sit amet consectetur adipiscing elit. Pharetra et ultrices 
                                                neque ornare. Faucibus turpis in eu mi bibendum.
                                            </Container>
                                        </Text>

                                        <Image src="facegram-prev.png" w="600px" h="300px" borderRadius={10}/>
                                    </Flex>
                                </CardBody>
                            </Card>
                        </Flex>
                </Box>
            </Flex>

        </Flex>
    );
}
