import { useState, useEffect, useRef } from 'react';
import { motion, Variants, useInView } from 'framer-motion';
import {
    Flex, Center, useBreakpointValue, Spacer, 
} from '@chakra-ui/react';

import { 
    MdKeyboardDoubleArrowDown 
} from 'react-icons/md'

import Header from './Header';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';

export default function Slideshow() {
    const mobileLayout = useBreakpointValue({ base: true, sm: true, xl: false});

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
            <Header mobileLayout={mobileLayout}/>

            <Center
            as={motion.div}
            animate={{
                y: [-5, 5], 
                transition: {
                    duration: 0.5, 
                    repeat: Infinity, 
                    repeatType: "reverse"
                }
            }}
            h="fit-content"
            >
                <MdKeyboardDoubleArrowDown size="2em" color="white"/>
            </Center>
    
            <About mobileLayout={mobileLayout}/>            
            <Skills mobileLayout={mobileLayout}/>
            <Projects mobileLayout={mobileLayout}/>
        </Flex>
    );
}
