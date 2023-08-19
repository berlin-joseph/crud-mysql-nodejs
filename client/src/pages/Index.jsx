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
      .get(`http://localhost:3000/`)
      .then((res) => setStudent(res.data))
      .catch((err) => console.log(err));
  }, []);

  //Delete Handler
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/delete/${id}`);
      window.location.reload();
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

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
          {student.map((student, index) => (
            <TableRow key={index}>
              <TableCell align="center">{index + 1}</TableCell>
              <TableCell align="center">{student.first_name}</TableCell>
              <TableCell align="center">{student.last_name}</TableCell>
              <TableCell align="center">{student.email}</TableCell>
              <TableCell align="center">
                <Button href={`/update/${student.id}`} startIcon={<EditIcon />}>
                  EDIT
                </Button>
                <Button
                  onClick={() => handleDelete(student.id)}
                  startIcon={<DeleteIcon />}
                >
                  DELETE
                </Button>
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
