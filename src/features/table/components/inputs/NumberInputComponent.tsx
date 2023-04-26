import { HStack, Input, Tooltip, useColorModeValue } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { selectN, setN } from "../../tableSlice";
import IncDecButton from "../buttons/IncDecButton";

interface Props {}
export default function NumberInputComponent({}: Props) {
  const n = useAppSelector(selectN);
  const dispatch = useAppDispatch();
  const toggleColor = useColorModeValue("gray.600", "gray.200");
  const tooltipBgColor = useColorModeValue("white", "gray.900");
  return (
    <Tooltip
      hasArrow
      label="0 <= N <= 10"
      bg={tooltipBgColor}
      color={toggleColor}
      border="1px solid gray"
      rounded={"7px"}
      placement="top"
    >
      <HStack>
        <IncDecButton />
        <Input
          role="textbox"
          name={"n"}
          type="number"
          onChange={(e) => dispatch(setN(parseInt(e.target.value)))}
          value={n}
          min={0}
          max={10}
          textAlign={"center"}
          size={{ base: "md", md: "md" }}
          borderRadius={{ base: "100px!important" }}
          w="75px"
        />
        <IncDecButton isInc />
      </HStack>
    </Tooltip>
  );
}
