import { VStack, Heading, Text, Button, Link } from "@chakra-ui/react";

export default function NotFound() {
  return (
    <VStack bg="gray.100" justifyContent={"center"} minHeight="100vh">
      <Heading>Page Not Found.</Heading>
      <Text>It seems that you are lost.</Text>
      <Link>
        <Button colorScheme={"twitter"} variant={"link"}>Go Home &rarr;</Button>
      </Link>
    </VStack>
  );
}
