import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const n = 10;
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicGrid() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [showColor, setShowColor] = React.useState(false);
  const numbers = ['1', '2', '3', '4', '5'];
  const ABC = [];
  for (const [i, n] of numbers.entries()) {
    ABC.push(
      <Item>
        <Button
          style={
            showColor
              ? { backgroundColor: "green" }
              : { backgroundColor: "red" }
          }
          onClick={handleOpen}
        >
          {numbers}
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <label for="myfile">Select a file:</label>
            <input
              type="file"
              accept="image/*,.jpeg,.png,.svg,.pdf, .mp4"
              onChange={() => setShowColor(true)}
            />
          </Box>
        </Modal>
      </Item>
    );
  }

  return (
    <Box sx={{ flexGrow: 1 }} className="App">
      <Grid container spacing={2}>
        <Grid item xs={3}>
          {ABC}
        </Grid>
      </Grid>
    </Box>
  );
}
