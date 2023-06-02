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


export default function Footer() {

    return (
        <Box
        color="white"
        bgColor="#006466"
        h="200px"
        w="100%"
        px={{base: "0.5em", sm: "2em", md: "5em"}}
        py={10}
        >
                <Text fontSize="xs" mt={2}> Email: kevin_abelgas@dlsu.edu.ph </Text>
                <Divider orientation="horizontal" mt={8} size="20px"/>
                <HStack spacing={5} mt={2}>
                    <PhoneIcon boxSize={{base: ".8em", sm: "1em", md: "1.2em"}}/>
                    <ChatIcon boxSize={{base: ".8em", sm: "1em", md: "1.2em"}}/>
                    <EmailIcon boxSize={{base: ".8em", sm: "1em", md: "1.2em"}}/>
                </HStack>

        </Box>
    );
}
