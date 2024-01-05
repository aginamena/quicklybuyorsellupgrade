import { useEffect, useRef, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { Container, Typography } from "@mui/material";

import DisplayProducts from "@/components/DisplayProducts";
import { getUser } from "@/util";
import { getAllProducts } from "./util";

export default function ViewProducts() {
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [products, setProducts] = useState([]);

  const userEmail = useRef("");

  useEffect(() => {
    async function init() {
      setLoading(true);
      const { email } = getUser();
      userEmail.current = email;
      const top12Products = await getAllProducts(email, "", setHasMore);
      setProducts(top12Products);
      setLoading(false);
    }
    init();
  }, []);

  async function getNext12Products() {
    const top12Products = await getAllProducts(
      userEmail.current,
      products[products.length - 1].productId,
      setHasMore
    );
    setProducts([...products, ...top12Products]);
  }

  return (
    <Container>
      {loading ? (
        <Typography>Loading...</Typography>
      ) : (
        <InfiniteScroll
          dataLength={products.length}
          next={getNext12Products}
          hasMore={hasMore}
          loader={<Typography>Loading...</Typography>}
        >
          <DisplayProducts products={products} isPrivate={true} />
        </InfiniteScroll>
      )}
    </Container>
  );
}
