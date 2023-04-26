import {
  Box,
  Divider,
  HStack,
  Spacer
} from "@chakra-ui/react";
import type { NextPage } from "next";
import ApplicationWrapper from "../applicationUI/structure/ApplicationWrapper";
import TableComponent from "../features/table/components/table/TableComponent";
import Title from "../features/table/components/text/Title";
import AddButton from "../features/table/components/buttons/AddButton";
import ResetButton from "../features/table/components/buttons/ResetButton";
import NumberInputComponent from "../features/table/components/inputs/NumberInputComponent";

const firstPage: NextPage = () => {
  return (
    <ApplicationWrapper textPageHead={"First Page"}>
      <Box mb={20} mt={10} px={{ base: 2, md: 20 }}>
        <Title text={"Table with constant offset N"} />
        <Divider mt={2} mb={5} />
        <HStack>
          <AddButton />
          <ResetButton />
          <Spacer />
          <NumberInputComponent />
        </HStack>
        <Divider my={5} />
        <TableComponent
          headCellsText={["Origin values", "Costant Offset"]}
          caption="Column 2 adds constant N to Column 1."
          editable={true}
          showThirdColumn={false}
        />
      </Box>
    </ApplicationWrapper>
  );
};

export default firstPage;
