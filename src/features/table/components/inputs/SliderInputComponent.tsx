import {
  Flex,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Tooltip,
  useColorModeValue
} from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { selectM, selectN, setM } from "../../tableSlice";


export default function SliderInputComponent() {
  const n = useAppSelector(selectN);
  const m = useAppSelector(selectM);
  const dispatch = useAppDispatch();
  const color = useColorModeValue("gray.400", "gray.600");
  const bgColor = useColorModeValue("gray.100", "gray.900");
  const toggleColor = useColorModeValue("gray.600", "gray.200");
  const tooltipBgColor = useColorModeValue("white", "gray.900");
  return (
    <Tooltip
      hasArrow
      label="N <= M <= N x 2"
      bg={tooltipBgColor}
      color={toggleColor}
      border="1px solid blue"
      rounded={"7px"}
      placement="top"
    >
      <Flex>
        <Slider
          flex="1"
          focusThumbOnChange={false}
          value={m}
          onChange={(value) => dispatch(setM(value))}
          step={1}
          min={n}
          max={n * 2}
          minW={{ base: "140px", md: "220px" }}
          mx={4}
          isDisabled={n === 0}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb
            borderColor={color}
            fontSize="sm"
            bg={bgColor}
            boxSize="32px"
            children={m}
          />
        </Slider>
        </Flex>
    </Tooltip>
  );
}
