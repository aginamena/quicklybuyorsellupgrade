import { useEffect, useRef, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { Typography } from "@mui/material";

import DisplayProducts from "@/components/DisplayProducts";
import { getUser } from "@/util";
import { getAllProducts } from "./util";
import { useMyAccountContext } from "@/context/myAccount";
import Link from "next/link";

export default function ViewProducts() {
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [products, setProducts] = useState([]);

  const userEmail = useRef("");
  const { selectedProductId, setSelectedProductId } = useMyAccountContext();

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

  useEffect(() => {
    if (selectedProductId.length > 0) {
      const filteredProducts = products.filter(
        (product) => product.productId != selectedProductId
      );
      setProducts(filteredProducts);
      setSelectedProductId("");
    }
  }, [selectedProductId]);

  async function getNext12Products() {
    const top12Products = await getAllProducts(
      userEmail.current,
      products[products.length - 1].productId,
      setHasMore
    );
    setProducts([...products, ...top12Products]);
  }

  return (
    <>
      {loading ? (
        <Typography>Loading...</Typography>
      ) : products.length == 0 ? (
        <Typography>You have not created any products</Typography>
      ) : (
        <>
          <InfiniteScroll
            dataLength={products.length}
            next={getNext12Products}
            hasMore={hasMore}
            loader={<Typography>Loading...</Typography>}
          >
            <DisplayProducts products={products} isPrivate={true} />
          </InfiniteScroll>
          <Link href="products-for-review">testing</Link>
        </>
      )}
    </>
  );
}
