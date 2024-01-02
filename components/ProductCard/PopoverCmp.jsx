import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import BackdropCmp from "../BackdropCmp";
// import { AppContext, MyAccountContext } from "context/appContext";
import PropTypes from "prop-types";
// import { useConstext } from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import Link from "next/link";

export default function PopoverCmp({ popup, setPopup, productId }) {
  //snackbar can be used also to delete product
  const {
    setShowSnackbarCmp,
    setShowBackdropCmp,
    setShowDialogCmp,
    setSelectedProductId,
  } = {};
  // useContext(AppContext);
  const { setTabPosition } = {};
  //  useContext(MyAccountContext);

  function editProduct() {
    const tabPosition = 0;
    setTabPosition(tabPosition);
    setSelectedProductId(productId);
  }

  async function deleteProduct() {
    setShowDialogCmp(true);
    setSelectedProductId(productId);
  }

  async function shareOnFacebook() {
    // Open a new window to share the link on Facebook
    const host =
      process.env.NODE_ENV === "development"
        ? "http://192.168.0.23:3000"
        : "https://quicklybuyorsell.web.app";
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${host}/#/product-details/${productId}`,
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
        href={`../nike-sneaker/${productId}`}
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
          // marginTop: "50px"
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
          // marginTop: "50px"
        }}
      />
      <Typography
        onClick={deleteProduct}
        sx={{
          p: 2,
          cursor: "pointer",
        }}
      >
        Delete product
      </Typography>
      <BackdropCmp />
    </Popover>
  );
}

PopoverCmp.defaultProps = {
  popup: null,
};
PopoverCmp.propTypes = {
  popup: PropTypes.object,
  setPopup: PropTypes.func.isRequired,
  productId: PropTypes.string.isRequired,
};
