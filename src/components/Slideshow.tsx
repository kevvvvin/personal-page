// import { useState, useEffect, useRef, lazy, Suspense } from 'react';
// import { motion, LazyMotion, domAnimation } from 'framer-motion';
import {
    Flex, useBreakpointValue
} from '@chakra-ui/react';

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
        pt="2.5em"
        gap="5em"
        >

            <Header mobileLayout={mobileLayout}/>            
            <About mobileLayout={mobileLayout}/>
            <Skills mobileLayout={mobileLayout}/>
            <Projects mobileLayout={mobileLayout}/>
        </Flex>
    );
}
