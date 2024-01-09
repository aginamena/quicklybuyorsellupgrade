import FacebookIcon from "@mui/icons-material/Facebook";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Divider from "@mui/material/Divider";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

import PropTypes from "prop-types";

import { useState } from "react";

import Link from "next/link";

import { useMyAccountContext } from "@/context/myAccount";
import { deleteDataInFirestore } from "@/util";
import BackdropCmp from "../BackdropCmp";
import DialogCmp from "../DialogCmp";
import SnackbarCmp from "../SnackbarCmp";

export default function PopoverCmp({
  popup,
  setPopup,
  productId,
  title,
  description,
}) {
  const { setTabPosition, setSelectedProductId } = useMyAccountContext();
  const [dialogCmp, setDialogCmp] = useState(false);
  const [backdropCmp, setBackdropCmp] = useState(false);
  const [snackbarCmp, setSnackbarCmp] = useState({
    shouldOpen: false,
    message: "",
  });

  function editProduct() {
    setTabPosition(0);
    setSelectedProductId(productId);
  }

  async function handleDeleteProduct() {
    setBackdropCmp(true);
    await deleteDataInFirestore(`products/${productId}`);
    setBackdropCmp(false);
    setDialogCmp(false);
    setSnackbarCmp({
      shouldShow: true,
      message: "Product has been deleted. Refresh the page",
    });
  }

  async function shareOnFacebook() {
    // Open a new window to share the link on Facebook
    const host = "https://quicklybuyorsellupgrade.vercel.app";
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${host}/nike-sneakers/${productId}?title=${title}&description=${description}`,
      "_blank"
    );
  }

  return (
    <Popover
      open={Boolean(popup)}
      anchorEl={popup}
      onClose={setPopup}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      <Link
        style={{ textDecoration: "none", color: "white" }}
        href={`../nike-sneakers/${productId}?title=${title
          .trim()
          .replaceAll(" ", "-")}&description=${description
          .trim()
          .replaceAll(" ", "-")}`}
      >
        <Typography sx={{ p: 2, cursor: "pointer" }}>
          View created product
        </Typography>
      </Link>
      <Typography
        onClick={editProduct}
        sx={{
          p: 2,
          cursor: "pointer",
        }}
      >
        Edit product
      </Typography>
      <Divider
        sx={{
          borderBottomWidth: "5px",
        }}
      />
      <Typography
        onClick={shareOnFacebook}
        sx={{
          p: 2,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
        }}
      >
        Share on: <FacebookIcon sx={{ marginLeft: "10px" }} />
      </Typography>
      <Divider
        sx={{
          borderBottomWidth: "5px",
        }}
      />
      <Typography
        onClick={() => setDialogCmp(true)}
        sx={{
          p: 2,
          cursor: "pointer",
        }}
      >
        Delete product
      </Typography>
      <BackdropCmp open={backdropCmp} />
      <DialogCmp open={dialogCmp}>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Are you sure you want to delete this product?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteProduct}>Yes</Button>
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
      <SnackbarCmp
        open={snackbarCmp.shouldShow}
        closeSnackBar={setSnackbarCmp}
        message={snackbarCmp.message}
      />
    </Popover>
  );
}

PopoverCmp.propTypes = {
  popup: PropTypes.object,
  setPopup: PropTypes.func.isRequired,
  productId: PropTypes.string.isRequired,
};
