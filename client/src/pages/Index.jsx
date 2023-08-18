import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect } from "react";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import { Button } from "@mui/material";

export default function IndexPage() {
  const [student, setStudent] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/")
      .then((res) => setStudent(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">FIRST NAME</TableCell>
            <TableCell align="center">LAST NAME</TableCell>
            <TableCell align="center">EMAIL ID</TableCell>
            <TableCell align="center">ACTION BUTTON</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {student.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="center">{row.id}</TableCell>
              <TableCell align="center">{row.first_name}</TableCell>
              <TableCell align="center">{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">
                <Button startIcon={<EditIcon />}>EDIT</Button>
                <Button startIcon={<DeleteIcon />}>DELETE</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button href="/create" sx={{ padding: 2 }} fullWidth>
        Add
      </Button>
    </TableContainer>
  );
}
