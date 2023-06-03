import { useState, useEffect, useRef } from 'react';
import { motion, Variants } from 'framer-motion';
import {
    Box, Flex, Center, Stack,
    Container, Heading, Text,
    Card, CardHeader, CardBody, CardFooter,
    Button, Tooltip,
    useBreakpointValue,
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
            <Flex direction="row">
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

                                <Button
                                size={{base: "xs", md: "md"}}
                                mt={5}
                                color="white"
                                bg="#4D194D"
                                _hover={{bg: "#212F45"}}
                                _active={{color: "#a2d2ff"}}
                                > 
                                    View Projects
                                </Button>
                            </motion.div>
                        </motion.div>

                    </Container>
                </Box>
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
                initial={{ x: -300, opacity: 0}}
                whileInView={{ x: 0, opacity: 1, duration: 2}}
                
                >
                    <Container
                    alignItems="center"
                    maxWidth="75ch"
                    >
                        <Heading as="h1" size={mobileLayout ? "xl" : "2xl"}> About </Heading>
                    </Container>
                    
                </Box>
            </Flex>
            
            <Flex direction="row">
                <Box
                w="inherit"
                color="white"
                as={motion.div}
                initial={{ x: -300, opacity: 0}}
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

            <Flex direction="row">
                <Box
                w="inherit"
                color="white"
                as={motion.div}
                initial={{ x: -300, opacity: 0}}
                whileInView={{ x: 0, opacity: 1, duration: 2}}
                
                >
                    <Container
                    alignItems="center"
                    maxWidth="75ch"
                    >
                        <Heading as="h1" size={mobileLayout ? "xl" : "2xl"}> Projects </Heading>
                        <Card>
                            <CardBody>
                                <Text fontSize="lg"> FaceGram </Text>
                            </CardBody>
                        </Card>
                    </Container>
                    
                </Box>
            </Flex>

        </Flex>
    );
}
