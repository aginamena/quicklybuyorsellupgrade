import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

import PropTypes from "prop-types";

import { useState } from "react";

import Link from "next/link";

import { deleteDataInFirestore } from "@/util";
import DialogCmp from "../DialogCmp";

export default function PopoverCmp({ popup, setPopup, productId, title }) {
  const [dialogCmp, setDialogCmp] = useState(false);

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
          .replaceAll(" ", "-")}`}
      >
        <Typography sx={{ p: 2, cursor: "pointer" }}>
          View created product
        </Typography>
      </Link>
      <Link
        style={{ textDecoration: "none", color: "white" }}
        href={`my-account?tab=0&productId=${productId}`}
      >
        <Typography
          sx={{
            p: 2,
            cursor: "pointer",
          }}
        >
          Edit product
        </Typography>
      </Link>

      <Typography
        onClick={() => setDialogCmp(true)}
        sx={{
          p: 2,
          cursor: "pointer",
        }}
      >
        Delete product
      </Typography>
      <DialogCmp open={dialogCmp}>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this product?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link href={`my-account?tab=1&removed-product=${productId}`}>
            <Button
              onClick={() => deleteDataInFirestore(`products/${productId}`)}
            >
              Yes
            </Button>
          </Link>

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
    </Popover>
  );
}

PopoverCmp.propTypes = {
  popup: PropTypes.object,
  setPopup: PropTypes.func.isRequired,
  productId: PropTypes.string.isRequired,
};
