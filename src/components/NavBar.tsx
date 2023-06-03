import { useState, useEffect } from 'react';
import {
    Box, 
    Flex,
    Spacer, 
    Image, 
    Button,
    Collapse,
    useBreakpointValue,
    Text,
    IconButton,
    Stack,
} from '@chakra-ui/react';

import { HamburgerIcon } from '@chakra-ui/icons'

export default function NavBar() {
    const mobileNavBar = useBreakpointValue({ base: true, sm: true, md: false})

    const [ showMenu, setShowMenu ] = useState(false);


    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    useEffect(() => {
        if (!mobileNavBar) setShowMenu(false)
    }, [mobileNavBar])


    return (
    <Box
    position="fixed"
    outline="solid 1px"
    color="whiteAlpha.200"
    w="100%" 
    h={{base: "50px", md: "35px"}} 
    maxW="100%"
    zIndex={99}>
        
        <Flex
        bgColor="whiteAlpha.200"
        gap={mobileNavBar ? "0" : "5"}
        alignItems="center"
        justifyContent={mobileNavBar ? "center" : ""}
        h="inherit" 
        maxW="inherit" 
        flexDirection="row"
        >

            {!mobileNavBar ? 
                <>
                    <Button 
                    color="white"
                    h="inherit" 
                    bg="transparent"
                    _hover={{color: "#3f8efc"}}
                    _active={{color: "#ABC4FF"}}> 
                        About
                    </Button>

                    <Button
                    color="white"
                    h="inherit" 
                    bg="transparent"
                    _hover={{color: "#3f8efc"}}
                    _active={{color: "#ABC4FF"}}> 
                        Projects
                    </Button>

                    <Button
                    color="white"
                    h="inherit"
                    bg="transparent"
                    _hover={{color: "#3f8efc"}}
                    _active={{color: "#ABC4FF"}}> 
                        Contact 
                    </Button>
                </>
            :
                <>
                    <IconButton
                    onClick={toggleMenu} 
                    aria-label="menu" 
                    icon={<HamburgerIcon/>}
                    bgColor="#4D194D"
                    color="white"
                    _hover={{color: "#212F45"}}
                    _active={{color: "#ABC4FF"}}
                    />
                </>
            }

        </Flex>

        <Collapse in={showMenu} animateOpacity>
            <Stack
            color="white"
            m="25px auto"
            h={150}
            w="90%"
            bg="#212F45"
            rounded="md"
            shadow="md"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            gap={{ base: "10px", md: "40px"}}
            fontSize={{ base: "12px", md: "16px"}}
            wrap="wrap"
            direction={{base: "column", sm: "row"}}
            spacing={{base: "0px", sm: "50px"}}
            >
                <Button
                color="white"
                bg="inherit"
                _hover={{color: "#3f8efc"}}
                _active={{color: "#ABC4FF"}} 
                >
                    About
                </Button>
                <Button
                color="white"
                bg="inherit"
                _hover={{color: "#3f8efc"}}
                _active={{color: "#ABC4FF"}} 
                > 
                    Projects
                </Button>
                <Button
                color="white"
                bg="inherit"
                _hover={{color: "#3f8efc"}}
                _active={{color: "#ABC4FF"}} 
                >  
                    Contact 
                </Button>
            </Stack>

        </Collapse>

    </Box>
    );
}
