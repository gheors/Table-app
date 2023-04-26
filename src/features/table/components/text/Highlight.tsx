import { useColorModeValue, Flex, Icon, Text } from "@chakra-ui/react";
import { AiFillEdit } from "react-icons/ai";
import { IoMdArrowForward } from "react-icons/io";

interface Props {
  isHover: boolean;
  isActive: boolean;
}
export default function Highlight({ isActive, isHover }: Props) {
  const toggleColor = useColorModeValue("gray.600", "gray.200");

  return (
    <Flex
      alignItems={"center"}
      opacity={isActive ? 1 : isHover ? 1 : 0}
      color={isActive ? "#1977f3" : toggleColor}
      w={{ base: "30px", md: "50px" }}
      display={{ base: "none", md: "flex" }}
      ml={1}
    >
      <Text display={{ base: "none", md: "block" }} fontWeight={300}>
        edit
      </Text>

      <Icon
        transition={"0.1s"}
        ml={1}
        as={IoMdArrowForward}
        display={{ base: "none", md: isActive ? "none" : "block" }}
      />

      <Icon
        transition={"0.1s"}
        ml={1}
        as={AiFillEdit}
        display={isActive ? "" : "none"}
        fontSize={{ base: "25px", md: "18px" }}
      />
    </Flex>
  );
}
