"use client";

import { executeQueryOnProductsCollection } from "@/util";
import { Container, Toolbar, Typography } from "@mui/material";

import { useState, useEffect } from "react";
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

export default function Paginage({ filterCondition }) {
  const [products, setProducts] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  function generateQuery(startAfterProductId) {
    const { size, color } = filterCondition;
    let q = null;
    if (size && color) {
      if (startAfterProductId) {
        q = query(
          collection(firestore, "products"),
          where("productStatus", "==", "Published"),
          where("color", "==", color),
          where("sizes", "array-contains", parseInt(size)),
          orderBy("productId", "desc"),
          startAfter(startAfterProductId),
          limit(13)
        );
      } else {
        q = query(
          collection(firestore, "products"),
          where("productStatus", "==", "Published"),
          where("color", "==", color),
          where("sizes", "array-contains", parseInt(size)),
          orderBy("productId", "desc"),
          limit(13)
        );
      }
    } else if (color) {
      if (startAfterProductId) {
        q = query(
          collection(firestore, "products"),
          where("productStatus", "==", "Published"),
          where("color", "==", color),
          orderBy("productId", "desc"),
          startAfter(startAfterProductId),
          limit(13)
        );
      } else {
        q = query(
          collection(firestore, "products"),
          where("productStatus", "==", "Published"),
          where("color", "==", color),
          orderBy("productId", "desc"),
          limit(13)
        );
      }
    } else if (size) {
      if (startAfterProductId) {
        q = query(
          collection(firestore, "products"),
          where("productStatus", "==", "Published"),
          where("sizes", "array-contains", parseInt(size)),
          orderBy("productId", "desc"),
          startAfter(startAfterProductId),
          limit(13)
        );
      } else {
        q = query(
          collection(firestore, "products"),
          where("productStatus", "==", "Published"),
          where("sizes", "array-contains", parseInt(size)),
          orderBy("productId", "desc"),
          limit(13)
        );
      }
    } else {
      if (startAfterProductId) {
        q = query(
          collection(firestore, "products"),
          where("productStatus", "==", "Published"),
          orderBy("productId", "desc"),
          startAfter(startAfterProductId),
          limit(13)
        );
      } else {
        q = query(
          collection(firestore, "products"),
          where("productStatus", "==", "Published"),
          orderBy("productId", "desc"),
          limit(13)
        );
      }
    }
    return q;
  }

  useEffect(() => {
    async function init() {
      const q = generateQuery(null);
      const filteredProducts = await executeQueryOnProductsCollection(q);
      if (filteredProducts.length < 13) {
        setHasMore(false);
      } else {
        setHasMore(true);
      }
      setProducts([...filteredProducts.slice(0, 12)]);
    }
    init();
  }, [filterCondition]);

  async function getNext12Products() {
    let query = generateQuery(
      products.length == 0 ? null : products[products.length - 1].productId
    );
    const next12Products = await executeQueryOnProductsCollection(query);
    if (next12Products.length < 13) {
      setHasMore(false);
    } else {
      setHasMore(true);
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
