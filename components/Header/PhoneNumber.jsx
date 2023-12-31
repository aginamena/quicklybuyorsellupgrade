import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import DialogCmp from "../DialogCmp";
import { useState } from "react";

export default function PhoneNumber({ open, setTakePhoneNumber }) {
  const [number, setNumber] = useState("");
  const [loading, setLoading] = useState(false);

  function validatePhoneNumber() {
    // This code defines a regular expression that matches Nigerian phone numbers with the country code '+234' or '0'
    // followed by '7', '8', or '9', and then the remaining digits.
    setLoading(true);
    const regex = /^(\+234|0)[789][01]\d{8}$/;
    if (!regex.test(number)) {
      alert("Phone number is invalid");
    } else {
      setTakePhoneNumber({ open: false, number });
    }
    setLoading(false);
  }

  return (
    <DialogCmp open={open}>
      <DialogTitle>Complete your profile</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Enter your phone number below. It should be in the format
          +2348123456789
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          type="text"
          fullWidth
          variant="standard"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        {loading ? (
          <Typography>Loading...</Typography>
        ) : (
          <Button onClick={validatePhoneNumber}>Confirm</Button>
        )}
      </DialogActions>
    </DialogCmp>
  );
}
