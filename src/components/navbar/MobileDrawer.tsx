import { Button, Drawer, DrawerBody, DrawerContent, Stack, useDisclosure } from '@chakra-ui/react'
import { ToggleButton } from './ToggleButton'
import {Link } from "react-router-dom";

export const MobileDrawer = () => {
  const { isOpen, onToggle, onClose } = useDisclosure()
  return (
    <>
      <ToggleButton
        isOpen={isOpen}
        onClick={onToggle}
        aria-label="Open menu"
        display={{ base: 'inline-flex', lg: 'none' }}
      />
      <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
        <DrawerContent>
          <DrawerBody mt="72px" p="4">
            <Stack spacing="1">
              <Button size="lg" variant="tertiary" justifyContent="start">
              <Link to="/">
                 Home
                </Link>
              </Button>
              <Button size="lg" variant="tertiary" justifyContent="start">
              <Link to="/LMSupload">
                 LMS
                </Link>
              </Button>
             …
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
