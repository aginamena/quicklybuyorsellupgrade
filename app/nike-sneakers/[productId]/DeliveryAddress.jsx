import DialogCmp from "@/components/DialogCmp";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DeliveryAddress({ open, setOpen }) {
  const [address, setAddress] = useState("");
  const router = useRouter();
  function handleClose() {
    setOpen(false);
  }
  function handleSubmit() {
    if (address.length == 0) {
      alert("Enter your delivery address");
      return;
    }
    sessionStorage.setItem("deliveryAddress", address);
    setOpen(false);
    router.push("../payment");
  }

  return (
    <DialogCmp open={open}>
      <DialogTitle>Delivery Address location</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Enter the full address you want this product to be delivered to in
          Port Harcourt.
        </DialogContentText>
        <TextField
          autoFocus
          required
          margin="dense"
          type="text"
          fullWidth
          variant="standard"
          onChange={(e) => setAddress(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button color="error" onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button onClick={handleSubmit}>Save</Button>
      </DialogActions>
    </DialogCmp>
  );
}
