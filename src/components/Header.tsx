import { useState, useEffect, useRef } from 'react';
import { motion, Variants, useInView } from 'framer-motion';
import {
    Box, Flex, Stack,
    Container, Text, Button, 
    Link, Image, Spacer, 
} from '@chakra-ui/react';

import { 
    MdWavingHand,
} from 'react-icons/md'

import { DiGithubBadge } from 'react-icons/di'

type HeaderProps = {
    mobileLayout: boolean | undefined
}

export default function Header({mobileLayout}: HeaderProps ) {

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

            <Spacer/>

            <Box p={5}>
                <motion.div
                animate={{opacity: [0, 1]}}
                transition={{delay: 5, duration : 2}}
                >
                    <Image src="https://dummyimage.com/600x600/5a3485/ebebeb" boxShadow="dark-lg" objectFit="cover"/>
                </motion.div>
            </Box>
        </Flex>
    );
}
