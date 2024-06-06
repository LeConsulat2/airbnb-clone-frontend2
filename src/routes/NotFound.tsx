import { VStack, Heading, Text, Button } from "@chakra-ui/react";

export default function NotFound() {
  return (
    <VStack>
      <Heading>Page Not Found.</Heading>
      <Text>It seems that you are lost.</Text>
      <Button>Go Home</Button>
    </VStack>
  );
}
