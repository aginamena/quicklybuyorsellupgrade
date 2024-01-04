"use client";

import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";

import { useState } from "react";

import BackdropCmp from "@/components/BackdropCmp";
import SnackbarCmp from "@/components/SnackbarCmp";

import DialogCmp from "@/components/DialogCmp";
import { acceptProduct, rejectProduct } from "./util";

export default function AdminPanel({ isAdmin, productId }) {
  const [snackbarCmp, setSnackbarCmp] = useState({
    shouldShow: false,
    message: "",
  });
  const [backdropCmp, setBackdropCmp] = useState(false);
  const [dialogCmp, setDialogCmp] = useState(false);

  async function handleRejectProduct() {
    setBackdropCmp(true);
    await rejectProduct(productId);
    setBackdropCmp(false);
    setDialogCmp(false);
    setSnackbarCmp({
      shouldShow: true,
      message:
        "Product has been removed from review. Message or call the seller that their product has been rejected from review",
    });
  }

  async function handleAccptProduct() {
    setBackdropCmp(true);
    await acceptProduct(productId);
    setBackdropCmp(false);
    setSnackbarCmp({
      shouldShow: true,
      message: "Product has been published to the marketplace",
    });
  }

  if (!isAdmin) return null;
  return (
    <Box style={{ marginTop: "30px" }}>
      <Button color="success" onClick={handleAccptProduct}>
        Accept product
      </Button>
      <Button color="error" onClick={() => setDialogCmp(true)}>
        Reject product
      </Button>
      <BackdropCmp open={backdropCmp} />
      <SnackbarCmp
        open={snackbarCmp.shouldShow}
        message={snackbarCmp.message}
        closeSnackBar={setSnackbarCmp}
      />
      <DialogCmp open={dialogCmp}>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Are you sure you want to reject this product?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleRejectProduct}>Yes</Button>
          <Button
            onClick={() => {
              setDialogCmp(false);
            }}
            color="error"
          >
            No
          </Button>
        </DialogActions>
      </DialogCmp>
    </Box>
  );
}
