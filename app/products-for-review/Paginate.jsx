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

export default function Paginage({ top12ProductsOnReview, hasMoreProducts }) {
  const [products, setProducts] = useState(top12ProductsOnReview);
  const [hasMore, setHasMore] = useState(hasMoreProducts);

  async function getNext12Products() {
    const q = query(
      collection(firestore, "products"),
      where("productStatus", "==", "On review"),
      orderBy("productId", "desc"),
      //   ...filterCondition,
      startAfter(products[products.length - 1].productId),
      limit(13)
    );
    const next12ProductsOnReview = await executeQueryOnProductsCollection(q);
    if (next12ProductsOnReview.length < 13) {
      setHasMore(false);
    }
    setProducts([...products, ...next12ProductsOnReview.slice(0, 12)]);
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
