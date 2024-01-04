// import {
//   Box,
//   Button,
//   Drawer,
//   Paper,
//   TextField,
//   Toolbar,
//   Typography,
//   useMediaQuery,
// } from "@mui/material";
// import DisplayProducts from "components/DisplayProducts";
// import RadioGroupCmp from "components/RadioGroupCmp";
// import { useState } from "react";
// import InfiniteScroll from "react-infinite-scroll-component";
// import { useInfiniteQuery } from "react-query";
// import { useParams } from "react-router-dom";
// import { getAllPublishedProducts } from "./util";
// import { useTheme } from "@mui/material/styles";

// export default function NikeSneakers() {
//   const { selectedCategory } = useParams();
//   const [hasMore, setHasMore] = useState(true);
//   const [filter, setFilter] = useState({});

//   const theme = useTheme();
//   const isMediumScreenSizeAndBelow = useMediaQuery(
//     theme.breakpoints.down("md")
//   );
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const { data, fetchNextPage, status } = useInfiniteQuery({
//     //whenever the filter changes, or the selectedCategory changes, react-query triggers a refetch
//     queryKey: ["PublishedProducts", selectedCategory, filter],
//     queryFn: ({ pageParam: productId }) =>
//       getAllPublishedProducts(selectedCategory, productId, setHasMore, filter),
//     getNextPageParam: (lastPage) => {
//       return lastPage[lastPage.length - 1]?.productId;
//     },
//   });

//   if (status === "error") {
//     alert("An error occured");
//     return null;
//   }

//   const combinedPages = data?.pages.reduce((acc, page) => {
//     return [...acc, ...page];
//   }, []);

//   return (
//     <>
//       {isMediumScreenSizeAndBelow && (
//         <Button
//           sx={{ margin: "20px 0 20px 30px" }}
//           onClick={() => setMobileOpen(true)}
//         >
//           Filter products{" "}
//         </Button>
//       )}

//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//         }}
//       >
//         <Drawer
//           variant="permanent"
//           {...(isMediumScreenSizeAndBelow && {
//             variant: "temporary",
//             open: mobileOpen,
//           })}
//           anchor="left"
//           sx={{
//             width: "250px",
//             flexShrink: 0,
//             [`& .MuiDrawer-paper`]: {
//               width: "250px",
//               boxSizing: "border-box",
//             },
//           }}
//         >
//           <Toolbar />
//           {isMediumScreenSizeAndBelow && (
//             <Box sx={{ textAlign: "right" }}>
//               <Button onClick={() => setMobileOpen(false)}>Close</Button>
//             </Box>
//           )}

//           <Typography
//             variant="h5"
//             style={{ margin: "30px 0", textAlign: "center" }}
//           >
//             Filter products
//           </Typography>

//           <Paper
//             sx={{
//               padding: "20px",
//               margin: "0 20px",
//             }}
//           >
//             <Typography sx={{ marginBottom: "15px" }} variant="h6">
//               Type
//             </Typography>
//             <RadioGroupCmp
//               values={["Male", "Female", "Unisex"]}
//               name="type"
//               previousValue={filter.type ? filter.type : ""}
//               setFilter={setFilter}
//             />
//           </Paper>
//           {/* <Paper sx={{ padding: "20px", marginTop: "30px", marginRight: "20px" }}>
//     <Typography sx={{ marginBottom: "15px" }} variant="h6">
//       Amount
//     </Typography>
//     <TextField
//       id="outlined-number"
//       label="From"
//       type="number"
//       sx={{ width: "100px" }}
//       InputLabelProps={{
//         shrink: true,
//       }}
//     />
//     <span>----</span>
//     <TextField
//       id="outlined-number"
//       label="To"
//       type="number"
//       sx={{ width: "100px" }}
//       InputLabelProps={{
//         shrink: true,
//       }}
//     />
//     <Button sx={{ marginTop: "30px", width: "100%" }} variant="outlined">
//       Search
//     </Button>
//   </Paper> */}
//           {/* <Paper sx={{ padding: "20px", marginTop: "30px", marginRight: "20px" }}>
//     <Typography sx={{ marginBottom: "15px" }} variant="h6">
//       Condition
//     </Typography>
//     <RadioGroupCmp values={["New", "Used"]} />
//   </Paper> */}
//         </Drawer>
//         <Box sx={{ width: { xs: "90%", md: "70%" } }}>
//           {!isMediumScreenSizeAndBelow && <Toolbar />}
//           {status === "loading" ? (
//             <Typography>Loading...</Typography>
//           ) : combinedPages.length == 0 ? (
//             <Typography>No products for display.</Typography>
//           ) : (
//             <InfiniteScroll
//               dataLength={combinedPages.length}
//               next={fetchNextPage}
//               hasMore={hasMore}
//               loader={<Typography>Loading...</Typography>}
//             >
//               <DisplayProducts products={combinedPages} isPrivate={false} />
//             </InfiniteScroll>
//           )}
//         </Box>
//       </Box>
//     </>
//   );
// }
// "use client";
import DisplayProducts from "@/components/DisplayProducts";
import {
  collection,
  firestore,
  limit,
  orderBy,
  query,
  where,
} from "@/config/firebase";
import { executeQueryOnProductsCollection } from "@/util";
import Paginage from "./Paginate";

export default async function NikeSneakers() {
  const q = query(
    collection(firestore, "products"),
    where("category", "==", "nike-sneakers"),
    where("productStatus", "==", "Published"),
    orderBy("productId", "desc"),
    limit(12)
  );

  const top12Products = await executeQueryOnProductsCollection(q);
  return <Paginage top12Products={top12Products} />;
}
