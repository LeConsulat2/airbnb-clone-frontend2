import {
  Box,
  Button,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { FaAirbnb, FaLock, FaMoon, FaUserNinja } from 'react-icons/fa6';
import { Outlet } from 'react-router-dom';

export default function Root() {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Box>
      <HStack
        justifyContent="space-between"
        py="5"
        px="10"
        borderBottomWidth={1}
      >
        <Box color="red.500">
          <FaAirbnb size="40" />
        </Box>
        <HStack spacing="2">
          <IconButton
            variant="ghost"
            aria-label="Toggle dark mode"
            icon={<FaMoon />}
          />
          <Button onClick={onOpen}>Log in</Button>
          <Button colorScheme="red">Sign up</Button>
        </HStack>
      </HStack>
      <Modal motionPreset="slideInBottom" onClose={onClose} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Log in</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Box color="gray.500">
                    <FaUserNinja />
                  </Box>
                </InputLeftElement>
                <Input variant="filled" placeholder="Username" />
              </InputGroup>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Box color="gray.500">
                    <FaLock />
                  </Box>
                </InputLeftElement>
                <Input
                  variant="filled"
                  placeholder="Password"
                  type="password"
                />
              </InputGroup>
              <Button mt={4} colorScheme="red" w="100%">
                Log in
              </Button>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Outlet />
    </Box>
  );
}
