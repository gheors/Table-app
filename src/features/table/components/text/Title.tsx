import { Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

interface Props {
    text: string;
  }
export default function Title({ text }: Props) {
  const color = useColorModeValue("gray.600", "gray.200");

  return (
    <Text
      fontSize={"20px"}
      fontWeight={"bold"}
      w="fit-content"
      color={color}
      mr="auto"
    >
      
      {text}
    </Text>
  );
}
