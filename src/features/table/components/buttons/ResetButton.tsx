import { Button, Icon, Tooltip, useColorModeValue } from "@chakra-ui/react";
import { useAppDispatch } from "../../../../hooks";
import { resetDefault } from "../../tableSlice";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdRestore } from "react-icons/md";

export default function ResetButton() {
  const dispatch = useAppDispatch();
  const toggleColor = useColorModeValue("gray.600", "gray.200");
  const tooltipBgColor = useColorModeValue("white", "gray.900");
  return (
    <Tooltip
      hasArrow
      label="Reset default values"
      bg={tooltipBgColor}
      color={toggleColor}
      border="1px solid green"
      rounded={"7px"}
      placement="top"
    >
    <Button
      variant={"outline"}
      onClick={() => dispatch(resetDefault())}
      colorScheme="green"
      rounded={"100px"}
      p={0}
    >
      <Icon fontSize={"18px"} as={MdRestore} />
    </Button>
    </Tooltip>
  );
}
