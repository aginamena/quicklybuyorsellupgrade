import Dialog from "@mui/material/Dialog";

export default function DialogCmp({ children, open }) {
  return <Dialog open={open}>{children}</Dialog>;
}
