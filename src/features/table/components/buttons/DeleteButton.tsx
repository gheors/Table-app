import {
  useColorModeValue,
  Tooltip,
  Button,
  Icon,
  Box,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useAppDispatch } from "../../../../hooks";
import { deleteRow } from "../../tableSlice";
import { AiOutlineMinus } from "react-icons/ai";

interface Props {
  isHover: boolean;
  isActive: boolean;
  index: number;
}
export default function DeleteButton({ isHover, isActive, index }: Props) {
  const dispatch = useAppDispatch();
  const toggleColor = useColorModeValue("gray.600", "gray.200");
  const bgBtnColor = useColorModeValue("white", "red.900");
  const tooltipBgColor = useColorModeValue("white", "gray.900");

  return (
    <Tooltip
      hasArrow
      label="Delete row"
      bg={tooltipBgColor}
      color={toggleColor}
      border="1px solid red"
      rounded={"7px"}
      placement="top"
    >
      <Button
        rounded={"100px"}
        onClick={() => dispatch(deleteRow(index))}
        p={0}
        size={"sm"}
        variant={"outline"}
        colorScheme="red"
        bg={isHover ? "red.100" : ""}
        opacity={isActive ? 1 : isHover ? 1 : 0}
        _hover={{
          borderColor: "red",
        }}
      >
        <Icon color={'red.600'} as={AiOutlineMinus} fontSize={"18px"} />
      </Button>
    </Tooltip>
  );
}
