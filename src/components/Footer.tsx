//import { useState, useEffect } from 'react';
import { 
    EmailIcon, 
    PhoneIcon, 
    ChatIcon 
} from '@chakra-ui/icons'

import {
    Box, 
    Image, 
    Text,
    Divider,
    HStack,
} from '@chakra-ui/react';

import { DiGithubBadge } from 'react-icons/di'


export default function Footer() {

    return (
        <Box
        outline="solid 1px"
        color="whiteAlpha.200"
        bgColor="#006466"
        h="200px"
        w="100%"
        px={{base: "0.5em", sm: "2em", md: "5em"}}
        py={10}
        > 
            <Box color="white">
                <Text fontSize="xs" mt={2}> Email: kevin_abelgas@dlsu.edu.ph </Text>
                <Divider orientation="horizontal" mt={8} size="20px"/>
                <HStack spacing={5} mt={2}>
                    <PhoneIcon boxSize={{base: "8em", md: "2em"}}/>
                    <ChatIcon boxSize={{base: ".8em", md: "2em"}}/>
                    <EmailIcon boxSize={{base: ".8em", md: "2em"}}/>
                    <DiGithubBadge size="1.5rem"/>
                </HStack>
            </Box>
        </Box>
    );
}
