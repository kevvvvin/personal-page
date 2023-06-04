import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
    Box, Flex, Container, Heading, Text,
    Card, CardHeader, CardBody, CardFooter,
    Tooltip, Image, Spacer, AspectRatio
} from '@chakra-ui/react';

import { 
    TbBrandNextjs, TbBrandFirebase, TbBrandReact,
    TbBrandTailwind,
} from 'react-icons/tb'

type FooterProps = {
    mobileLayout: boolean | undefined
}


export default function Footer({mobileLayout}: FooterProps) {

    return (
        <Flex direction="column"
        >
            <Box color="white">
                <Container
                maxWidth={{base: "75ch", lg: "none"}}
                color="white"
                >
                    <motion.div
                    initial={{ x: -50, opacity: 0}}
                    whileInView={{ x: 0, opacity: 1, transition: {duration: 2} }}
                    viewport={{once: true}}>
                        <Heading as="h1" size={mobileLayout ? "xl" : "2xl"}> Featured Projects </Heading>
                    </motion.div>
                </Container>

                    <Flex
                    as={motion.div}
                    justifyContent="center"
                    initial={{ x: 50, opacity: 0}}
                    whileInView={{ x: 0, opacity: 1, transition: {duration: 2} }}
                    viewport={{once: true}}
                    mt={10}
                    px={5}
                    w="100%"
                    >
                        <Card color="white" bg="whiteAlpha.200" mb={5} boxShadow="dark-lg" w="inherit">
                            <CardHeader pb={0}>
                                <Flex direction={mobileLayout ? "column" : "row"} alignItems="center">
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
                                <Flex 
                                direction={mobileLayout ? "column" : "row"} 
                                alignItems="center" 
                                justifyContent="center"
                                wrap="wrap"
                                >
                                    <Text fontSize={{base: "md", sm: "xl"}}>
                                        <Container
                                        alignItems="center"
                                        maxW="60ch"
                                        >
                                            FaceGram is an Instagram clone developed in partial fulfillment of DLSU's STSWENG
                                            course. I worked as a developer in a team and focused mainly on backend functionality
                                            such as a like & follow system and other features, and connecting them to the database 
                                            and the frontend.
                                        </Container>
                                    </Text>

                                    <Image 
                                    src="src/assets/facegram-prev.png" 
                                    borderRadius={10} 
                                    w="600px"
                                    h="300px"
                                    />

                                </Flex>
                            </CardBody>
                        </Card>
                    </Flex>

                    <Flex
                    as={motion.div}
                    justifyContent="center"
                    initial={{ x: -50, opacity: 0}}
                    whileInView={{ x: 0, opacity: 1, transition: {duration: 2} }}
                    viewport={{once: true}}
                    mt={10}
                    px={5}
                    w="100%"
                    >
                        <Card color="white" bg="whiteAlpha.200" mb={5} boxShadow="dark-lg" w="inherit">
                            <CardHeader pb={0}>
                                <Flex direction={mobileLayout ? "column" : "row"} alignItems="center">
                                    <Tooltip
                                    hasArrow
                                    label="Link unavailable. The GitHub repository is
                                    currently private."
                                    placement="top">
                                        <Heading as="h2" fontSize="3xl"> Lorem Ipsum </Heading>
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
                                <Flex 
                                direction={mobileLayout ? "column" : "row"} 
                                alignItems="center" 
                                justifyContent="center"
                                wrap="wrap"
                                >
                                    <Image 
                                    src="src/assets/facegram-prev.png" 
                                    borderRadius={10} 
                                    w="600px"
                                    h="300px"
                                    />

                                    <Text fontSize={{base: "md", sm: "xl"}}>
                                        <Container
                                        alignItems="center"
                                        maxW="60ch"
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
                    whileInView={{ x: 0, opacity: 1, transition: {duration: 2} }}
                    viewport={{once: true}}
                    my={10}
                    px={5}
                    w="100%"
                    >
                        <Card color="white" bg="whiteAlpha.200" mb={5} boxShadow="dark-lg" w="inherit">
                            <CardHeader pb={0}>
                                <Flex direction={mobileLayout ? "column" : "row"} alignItems="center">
                                    <Tooltip
                                    hasArrow
                                    label="Link unavailable. The GitHub repository is
                                    currently private."
                                    placement="top">
                                        <Heading as="h2" fontSize="3xl"> Faucibus Turpis </Heading>
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
                                <Flex 
                                direction={mobileLayout ? "column" : "row"} 
                                alignItems="center" 
                                justifyContent="center"
                                wrap="wrap"
                                >
                                    <Text fontSize={{base: "md", sm: "xl"}}>
                                        <Container
                                        alignItems="center"
                                        maxW="60ch"
                                        >
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                                            do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                            Enim nec dui nunc mattis enim ut tellus elementum. Lorem ipsum 
                                            dolor sit amet consectetur adipiscing elit. Pharetra et ultrices 
                                            neque ornare. Faucibus turpis in eu mi bibendum.
                                        </Container>
                                    </Text>

                                    <Image 
                                    src="src/assets/facegram-prev.png" 
                                    borderRadius={10} 
                                    w="600px"
                                    h="300px"
                                    />

                                </Flex>
                            </CardBody>
                        </Card>
                    </Flex>
            </Box>
        </Flex>
    );
}
