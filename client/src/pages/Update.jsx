import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  //Hooks
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  //
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3000/update/${id}`, {
        // Use template literals
        firstName,
        lastName,
        email,
      })
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "70vh",
      }}
    >
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2>UPDATE STUDENT DETAILS</h2>
        </Box>
        <TextField
          label="First Name"
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          sx={{ mb: 3 }}
          value={firstName}
          fullWidth
        />
        <TextField
          label="Last Name"
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          sx={{ mb: 3 }}
          value={lastName}
          fullWidth
        />
        <TextField
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          type="Email"
          fullWidth
          value={email}
          sx={{ mb: 3 }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button variant="outlined" type="submit" fullWidth>
            Update
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Update;
