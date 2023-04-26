import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { PropsWithChildren } from "react";

interface Props {
  headCellsText: string[];
  caption?: string;
}
export default function TableWrapper({
  children,
  headCellsText,
  caption,
}: PropsWithChildren<Props>) {
  return (
    <TableContainer>
      <Table variant="simple">
        {caption && <TableCaption fontStyle={"italic"}>{caption}</TableCaption>}
        <Thead>
          <Tr>
            {headCellsText.map((text, i) => {
              return (
                <Th key={"head-cell-" + i} isNumeric pr={4}>
                  <Text> {text}</Text>
                </Th>
              );
            })}
          </Tr>
        </Thead>
        <Tbody>{children}</Tbody>

        <Tfoot>
          <Tr>
            {headCellsText.map((text, i) => {
              return (
                <Th key={"footer-cell-" + i} isNumeric pr={4}>
                  <Text>{text}</Text>
                </Th>
              );
            })}
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
}
