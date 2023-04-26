import { Box, Divider, Flex, HStack, Spacer } from "@chakra-ui/react";
import type { NextPage } from "next";
import ApplicationWrapper from "../applicationUI/structure/ApplicationWrapper";
import TableComponent from "../features/table/components/table/TableComponent";
import Title from "../features/table/components/text/Title";
import AddButton from "../features/table/components/buttons/AddButton";
import ResetButton from "../features/table/components/buttons/ResetButton";
import UnlockEditButton from "../features/table/components/buttons/UnlockEditButton";
import NumberInputComponent from "../features/table/components/inputs/NumberInputComponent";
import SliderInputComponent from "../features/table/components/inputs/SliderInputComponent";
import { selectIsEditable } from "../features/table/tableSlice";
import { useAppSelector } from "../hooks";

const firstPage: NextPage = () => {
  const isEditable = useAppSelector(selectIsEditable);

  return (
    <ApplicationWrapper textPageHead={"First Page"}>
      <Box mb={20} mt={10} px={{ base: 2, md: 20 }}>
        <Title text={"Table with complete functionality"} />
        <Divider mt={2} mb={5} />
        <Flex flexDirection={"row"}>
          <HStack>
            <AddButton />
            <UnlockEditButton />
            <ResetButton />
          </HStack>
          <Spacer />
          <Flex  flexDir={{base:'column',md:'row'}} alignItems={'flex-end'}>
            <NumberInputComponent />
            <Spacer minW={5} minH={5} />
            <SliderInputComponent />
          </Flex>
        </Flex>
        <Divider my={5} />
        <TableComponent
          headCellsText={["Origin values", "Offset", "Mult"]}
          caption="Table full features are grouped here."
          editable={isEditable}
          showThirdColumn={true}
        />
        <HStack></HStack>
      </Box>
    </ApplicationWrapper>
  );
};

export default firstPage;
