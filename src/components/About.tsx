import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
    Box, Flex, Container, Heading, Text, Image, Spacer
} from '@chakra-ui/react';

type AboutProps = {
    mobileLayout: boolean | undefined
}

export default function About({mobileLayout} : AboutProps) {

    return (
        <Flex 
        direction={mobileLayout ? "column" : "row"}
        alignItems="center"
        mb={mobileLayout ? 0 : 20}
        >
            <Container
            maxWidth={{base: "75ch", lg: "120ch"}}
            color="white"
            >
                <motion.div
                initial={{ x: -50, opacity: 0}}
                whileInView={{ x: 0, opacity: 1, transition: {duration: 2} }}
                viewport={{once: true}}
                >
                    <Heading as="h1" size={mobileLayout ? "xl" : "2xl"}> About Me </Heading>
                </motion.div>

                <motion.div
                initial={{ x: -50, opacity: 0}}
                whileInView={{ x: 0, opacity: 1, transition: {delay: 1.5, duration: 2} }}
                viewport={{once: true}}
                >
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
                </motion.div>
            </Container>

            <Spacer/>
                
            <Box p={5}>
                <motion.div
                initial={{y:-100, opacity: 0}}
                whileInView={{opacity: 1, y: 0, transition: {delay: 2.5, duration: 2}}}
                viewport={{once: true}}
                >
                    <Image src="https://dummyimage.com/300x400/7f1cb0/ebebeb" boxShadow="dark-lg" objectFit="scale-down"/>
                </motion.div>
            </Box>
        </Flex>
    );
}
