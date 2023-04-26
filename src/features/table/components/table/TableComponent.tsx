import { Td, Tr } from "@chakra-ui/react";
import { useAppSelector } from "../../../../hooks";
import { selectM, selectN, selectRows } from "../../tableSlice";
import TableWrapper from "./TableWrapper";
import InputCell from "../inputs/InputCell";

interface Props {
  headCellsText: string[];
  editable: boolean;
  showThirdColumn: boolean;
  caption?: string;
}
function TableComponent({
  headCellsText,
  editable,
  showThirdColumn,
  caption,
}: Props) {
  const rows = useAppSelector(selectRows);
  const n = useAppSelector(selectN);
  const m = useAppSelector(selectM);

  return (
    <TableWrapper headCellsText={headCellsText} caption={caption}>
      {rows.map((value, i) => (
        <Tr key={"table-row-" + i}>
          <Td
            isNumeric
            position={"relative"}
            px={editable ? 0 : 6}
            py={editable ? 0 : "10px"}
            maxW="200px"
          >
            {editable ? <InputCell value={value} index={i} /> : value}
          </Td>
          <Td isNumeric py={0}>
            {(value + n).toLocaleString()}
          </Td>
          {showThirdColumn && (
            <Td isNumeric py={0}>
              {(value * m).toLocaleString()}
            </Td>
          )}
        </Tr>
      ))}
    </TableWrapper>
  );
}

export default TableComponent;
