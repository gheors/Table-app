import { Box, Divider, HStack, Spacer } from "@chakra-ui/react";
import type { NextPage } from "next";
import ApplicationWrapper from "../applicationUI/structure/ApplicationWrapper";
import TableComponent from "../features/table/components/table/TableComponent";
import Title from "../features/table/components/text/Title";
import SliderInputComponent from "../features/table/components/inputs/SliderInputComponent";

const secondPage: NextPage = () => {
  return (
    <ApplicationWrapper textPageHead={"Second Page"}>
      <Box  mb={20} mt={10} px={{ base: 2, md: 20 }}>
        <Title text={"Multiplication Factor Table"} />
        <Divider mt={2} mb={5} />
        <HStack>
          <Spacer /> 
          <SliderInputComponent />
        </HStack>
        <Divider my={5} />
        <TableComponent
          headCellsText={["Origin values", "Offset", "Mult. Factor"]}
          caption="Column 2 multiplies Column 1 by costant factor M."
          editable={false}
          showThirdColumn={true}
        />
      </Box>
    </ApplicationWrapper>
  );
};

export default secondPage;
