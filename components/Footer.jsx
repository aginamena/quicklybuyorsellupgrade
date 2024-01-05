import Container from "@mui/material/Container";
import Link from "next/link";

function Footer() {
  return (
    <Container style={{ marginTop: "20px", marginBottom: "20px" }}>
      <Link href="aboutus" style={{ color: "white", textDecoration: "none" }}>
        About us
      </Link>
    </Container>
  );
}

export default Footer;
