import { Button, Icon, Tooltip, useColorModeValue } from "@chakra-ui/react";
import { HiOutlineLockClosed, HiOutlineLockOpen } from "react-icons/hi";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { selectIsEditable, setIsEditable } from "../../tableSlice";

export default function UnlockEditButton() {
  const dispatch = useAppDispatch();
  const isEditable = useAppSelector(selectIsEditable);
  const toggleColor = useColorModeValue("gray.600", "gray.200");
  const bgColor = useColorModeValue("white", "gray.900");

  return (
    <Tooltip
      hasArrow
      label="Allow column 1 editable"
      bg={bgColor}
      color={toggleColor}
      border="1px solid orange"
      rounded={"7px"}
      placement="top"
    >
      <Button
        variant={isEditable ? "outline" : "solid"}
        onClick={() => dispatch(setIsEditable())}
        colorScheme="orange"
        rounded={"100px"}
        p={0}
      >
        <Icon
          fontSize={"18px"}
          as={isEditable ? HiOutlineLockOpen : HiOutlineLockClosed}
        />
      </Button>
    </Tooltip>
  );
}
