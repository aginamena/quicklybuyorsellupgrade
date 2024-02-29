import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

export default function ProductSummary({ sizes, location, color, type }) {
  return (
    <Table style={{ width: "250px" }}>
      <TableBody>
        <TableRow key="Size">
          <TableCell>Size(s)</TableCell>
          <TableCell>{sizes?.toString()}</TableCell>
        </TableRow>
        <TableRow key="Color">
          <TableCell>Color</TableCell>
          <TableCell> {color}</TableCell>
        </TableRow>
        <TableRow key="Location">
          <TableCell>Pickup location</TableCell>
          <TableCell> {location}</TableCell>
        </TableRow>
        <TableRow key="Type">
          <TableCell>Type</TableCell>
          <TableCell> {type}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
