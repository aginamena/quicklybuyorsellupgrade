import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

export default function ProductSummary({
  shoeSizes,
  gender,
  color,
  condition,
}) {
  return (
    <Table style={{ width: "200px" }}>
      <TableBody>
        <TableRow key="Size">
          <TableCell>Size(s)</TableCell>
          <TableCell>{shoeSizes?.toString()}</TableCell>
        </TableRow>
        <TableRow key="Color">
          <TableCell>Color</TableCell>
          <TableCell> {color}</TableCell>
        </TableRow>
        <TableRow key="Gender">
          <TableCell>Gender</TableCell>
          <TableCell> {gender}</TableCell>
        </TableRow>
        <TableRow key="Condtiton">
          <TableCell>Condition</TableCell>
          <TableCell> {condition}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
