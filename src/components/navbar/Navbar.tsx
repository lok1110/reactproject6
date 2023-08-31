import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Container,
  HStack,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from '@chakra-ui/react'
import { FiBell, FiSearch } from 'react-icons/fi'
import { DocumentPopover } from './DocumentPopover'
import React, { useState, useEffect } from "react"
import { Logo } from './Logo'
import { MobileDrawer } from './MobileDrawer'
import {Link } from "react-router-dom";
import { Auth } from 'aws-amplify';

async function checkUserLogin() {
  try {
    const user = await Auth.currentAuthenticatedUser();
    return user.username;
  } catch (err) {
    return null;
  }
}
export const Navbar = () => {
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      const user = await checkUserLogin();
      setUsername(user);
    }
    fetchData();
  }, []);

  async function handleSignOut() {
    try {
      await Auth.signOut();
      setUsername(null);
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }

  return (
    <Box as="section" minH="lg">
      <Box borderBottomWidth="1px" bg="bg.accent.default" position="relative" zIndex="tooltip">
        <Container py="4">
          <HStack justify="space-between" spacing="8">
            <HStack spacing="10">
              <HStack spacing="3">
                <MobileDrawer />
                <Logo />
              </HStack>
              <ButtonGroup
                size="lg"
                variant="text.accent"
                colorScheme="gray"
                spacing="8"
                display={{ base: 'none', lg: 'flex' }}
              > <Link to="/Home">
                <Button>Home</Button>
                </Link>
                <Link to="/LMS">
                <Button>LMS</Button>
                </Link>
                {/* <DocumentPopover />
                <Button>History</Button> */}
            
              </ButtonGroup>
            </HStack>
            <HStack spacing={{ base: '2', md: '4' }}>
              <InputGroup maxW="2xs" display={{ base: 'none', md: 'inline-flex' }}>
                <InputLeftElement>
                  <Icon as={FiSearch} color="fg.accent.muted" fontSize="lg" />
                </InputLeftElement>
                <Input placeholder="Search" variant="filled.accent" />
              </InputGroup>
              <ButtonGroup variant="tertiary.accent" spacing="1">
    
              
              </ButtonGroup>
              {username ? (
                  <>
                    <Text color='white'> {username}.</Text>
                    <Button onClick={handleSignOut}>Sign Out</Button>
                  </>
                ) : (
                  <Link to="/login"><Button>Sign In</Button></Link>
                )}


            </HStack>
          </HStack>
          
        </Container>
      </Box>
    </Box>
  );
};

export default Navbar;