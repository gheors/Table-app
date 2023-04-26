import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  createIcon,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Arrow from "./ArrowDraw";

export default function Hero() {
  const router = useRouter();
  return (
    <Flex h="inherit" w="inherit">
      <Container maxW={"3xl"} m={"auto"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 12, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Project
            <Text as={"span"} color={"green.400"} ml={4}>
              TABLE
            </Text>
          </Heading>
          <Text color={"gray.500"} fontSize={"25px"} px={{ base: 4, md: 20 }}>
            This project is a web application built using modern technologies
            including React, Next.js, Chakra UI, Jest, Redux, and TypeScript.
          </Text>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Button
              colorScheme={"green"}
              bg={"green.400"}
              rounded={"full"}
              px={6}
              _hover={{
                bg: "green.500",
              }}
              onClick={() => router.push("/first-page")}
            >
              Get Started
            </Button>
            <Button
              variant={"link"}
              colorScheme={"blue"}
              size={"sm"}
              as={"a"}
              href="https://github.com/gheors/Table-app"
              target="_blank"
            >
              Learn more
            </Button>
            <Box>
              <Icon
                as={Arrow}
                color={useColorModeValue("gray.800", "gray.300")}
                w={71}
                position={"absolute"}
                right={-71}
                top={"10px"}
              />
              <Text
                fontSize={"lg"}
                fontFamily={"Caveat"}
                position={"absolute"}
                right={"-125px"}
                top={"-15px"}
                transform={"rotate(10deg)"}
              >
                Features implementation
              </Text>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Flex>
  );
}
