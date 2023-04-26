import { Flex, Spinner } from "@chakra-ui/react";
import React from "react";

export default function Loading() {
  return (
    <Flex
      h={"100vh"}
      w={"100vw"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Flex>
  );
}
