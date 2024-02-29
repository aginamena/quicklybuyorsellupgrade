"use client";

import { executeQueryOnProductsCollection } from "@/util";
import { Container, Toolbar, Typography } from "@mui/material";

import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import DisplayProducts from "@/components/DisplayProducts";
import {
  collection,
  firestore,
  limit,
  orderBy,
  query,
  startAfter,
  where,
} from "@/config/firebase";

export default function Paginage({ top12Products, hasMoreProducts }) {
  const [products, setProducts] = useState(top12Products);
  const [hasMore, setHasMore] = useState(hasMoreProducts);

  async function getNext12Products() {
    const selectedCategory = "nike-sneakers";
    const q = query(
      collection(firestore, "products"),
      where("category", "==", selectedCategory),
      where("productStatus", "==", "Published"),
      orderBy("productId", "desc"),
      //   ...filterCondition,
      startAfter(products[products.length - 1].productId),
      limit(13)
    );
    const next12Products = await executeQueryOnProductsCollection(q);
    if (next12Products.length < 13) {
      setHasMore(false);
    }
    setProducts([...products, ...next12Products.slice(0, 12)]);
  }

  return (
    <Container>
      <Toolbar />
      <InfiniteScroll
        dataLength={products.length}
        next={getNext12Products}
        hasMore={hasMore}
        loader={<Typography>Loading...</Typography>}
      >
        <DisplayProducts products={products} isPrivate={false} />
      </InfiniteScroll>
    </Container>
  );
}
