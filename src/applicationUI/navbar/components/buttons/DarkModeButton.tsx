import {
  Button,
  Icon,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function DarkModeButton() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("white", "gray.900");

  return (
    <Button onClick={toggleColorMode} rounded={"100px"} mr={2} bg={bgColor}>
      {colorMode === "light" ? (
        <Icon as={BsMoon} />
      ) : (
        <Icon fontSize={"20px"} as={BsSun} />
      )}
    </Button>
  );
}
