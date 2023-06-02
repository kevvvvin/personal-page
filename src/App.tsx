import { useState } from 'react'
import NavBar from './components/NavBar'
import Slideshow from './components/Slideshow'
import Footer from './components/Footer'
import { VStack } from '@chakra-ui/react'

function App() {

  return (
    <VStack
    flexDirection="column"
    alignItems="center"
    justifyItems="center"
    bg="azure"
    spacing={0}>
        <NavBar/>
        <Slideshow/>
        <Footer/>
    </VStack>
  )
}

export default App
