import { Container, Toolbar, Typography } from "@mui/material";

import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useInfiniteQuery } from "react-query";

import { getAllProducts } from "./util";
import DisplayProducts from "@/components/DisplayProducts";
import { getUser } from "@/util";

export default function ViewProducts() {
  const [hasMore, setHasMore] = useState(true);
  const user = getUser();

  const { data, fetchNextPage, status } = useInfiniteQuery({
    queryKey: ["ViewProducts"],
    queryFn: ({ pageParam: productId }) =>
      getAllProducts(user.email, productId, setHasMore),
    getNextPageParam: (lastPage) => lastPage[lastPage.length - 1]?.productId,
  });

  if (status === "error") {
    alert("An error occured");
    return null;
  }
  const combinedPages = data?.pages.reduce((acc, page) => {
    return [...acc, ...page];
  }, []);

  return (
    <Container>
      <Toolbar />
      {status === "loading" ? (
        <Typography>Loading...</Typography>
      ) : combinedPages.length == 0 ? (
        <Typography>You don&apos;t have any products to display</Typography>
      ) : (
        <InfiniteScroll
          dataLength={combinedPages.length}
          next={fetchNextPage}
          hasMore={hasMore}
          loader={<Typography>Loading...</Typography>}
        >
          <DisplayProducts products={combinedPages} isPrivate={true} />
        </InfiniteScroll>
      )}
    </Container>
  );
}
