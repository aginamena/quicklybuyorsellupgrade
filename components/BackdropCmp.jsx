import { Backdrop, CircularProgress } from "@mui/material/";
// import { AppContext } from "context/appContext";
// import { useContext } from s"react";

export default function BackdropCmp() {
  // const { showBackdropCmp } = useContext(AppContext);
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      // open={showBackdropCmp}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
