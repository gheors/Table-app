import { Button, Icon } from "@chakra-ui/react";
import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { selectN, incrementN, decrementN } from "../../tableSlice";

interface Props {
  isInc?: boolean;
}
export default function IncDecButton({ isInc }: Props) {
  const dispatch = useAppDispatch();
  const n = useAppSelector(selectN);

  return (
    <Button
      isDisabled={isInc ? n === 10 : n === 0}
      onClick={() => dispatch(isInc ? incrementN() : decrementN())}
      borderRadius={{ base: "100px!important" }}
      variant={'outline'}
      p={0}
    >
      <Icon fontSize={"18px"} as={isInc ? AiOutlinePlus : AiOutlineMinus} />
    </Button>
  );
}
