import { Button, Icon, Tooltip, useColorModeValue } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { addRow, selectRows } from "../../tableSlice";
import { AiOutlinePlus } from "react-icons/ai";

export default function AddButton() {
  const dispatch = useAppDispatch();
  const rows = useAppSelector(selectRows);
  const toggleColor = useColorModeValue("gray.600", "gray.200");
  const tooltipBgColor = useColorModeValue("white", "gray.900");
  return (
    <Tooltip
      hasArrow
      label="Add new row"
      bg={tooltipBgColor}
      color={toggleColor}
      border="1px solid #437cba"
      rounded={"7px"}
      placement="top"
    >
      <Button
        variant="outline"
        isDisabled={rows.length === 10}
        onClick={() => dispatch(addRow())}
        colorScheme="blue"
        rounded={"100px"}
        maxW="55px"
        p={0}
      >
        <Icon fontSize={"18px"} as={AiOutlinePlus} />
      </Button>
    </Tooltip>
  );
}
