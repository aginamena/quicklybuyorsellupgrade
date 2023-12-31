import Container from "@mui/material/Container";
import Link from "next/link";

function Footer() {
  return (
    <Container style={{ marginTop: "20px", marginBottom: "20px" }}>
      <Link
        href="/terms-of-use"
        style={{ color: "white", textDecoration: "none", marginRight: "20px" }}
      >
        Terms of use
      </Link>
      <Link href="/about-us" style={{ color: "white", textDecoration: "none" }}>
        About us
      </Link>
    </Container>
  );
}

export default Footer;
