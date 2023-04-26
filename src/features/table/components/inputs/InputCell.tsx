import { HStack, Input, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";

import { useAppDispatch } from "../../../../hooks";
import { editRow } from "../../tableSlice";
import DeleteButton from "../buttons/DeleteButton";
import Highlight from "../text/Highlight";

interface Props {
  value: number;
  index: number;
}
export default function InputCell({ value, index }: Props) {
  const [isHover, setIsHover] = useState(false);
  const [isActive, setisActive] = useState(false);
  const toggleBG = useColorModeValue("rgba(0,0,0,0.05)", "rgba(0,0,0,0.3)");

  const dispatch = useAppDispatch();

  return (
    <HStack ml="auto">
      <HStack
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        h="40px"
        w="fit-content"
        mr={1}
      >
        <DeleteButton isHover={isHover} isActive={isActive} index={index} />
        <Highlight isHover={isHover} isActive={isActive} />
      </HStack>
      <Input
        name={"n-cell"}
        ml={"0!important"}
        p={0}
        pr={4}
        textAlign={"right"}
        border="none"
        bg={isActive ? toggleBG : isHover ? toggleBG : "none"}
        rounded={0}
        _hover={{
          bg: toggleBG,
        }}
        transition={"0.1s"}
        onChange={(e) =>
          dispatch(editRow({ index, value: parseInt(e.target.value) || 0 }))
        }
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onFocus={() => setisActive(true)}
        onBlur={() => setisActive(false)}
        value={value}
      />
    </HStack>
  );
}
