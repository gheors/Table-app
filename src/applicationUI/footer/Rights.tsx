import {
  Box,
  Container,
  Stack,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";

export default function Rights() {
  return (
    <Box
      borderTopWidth={1}
      borderStyle={"solid"}
      borderColor={useColorModeValue("gray.200", "gray.700")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        m="auto"
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ md: "space-between" }}
        align={{ md: "center" }}
      >
        <Text>
          Copyright {new Date().getFullYear()} © Gheors. All rights reserved
        </Text>
      </Container>
    </Box>
  );
}
