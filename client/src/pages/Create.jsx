import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
  //Hooks
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  //
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/create", { firstName, lastName, email })
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
          <h2>ADD STUDENT DETAILS</h2>
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
            Add
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Create;
