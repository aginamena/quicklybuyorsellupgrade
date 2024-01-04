"use client";
import {
  Box,
  CardContent,
  CardMedia,
  List,
  ListItem,
  Paper,
  Typography,
} from "@mui/material";

import algoliasearch from "algoliasearch/lite";

import Link from "next/link";

import { useState } from "react";
import { Configure, Hits, InstantSearch } from "react-instantsearch";

import ImageCard from "../ImageCard";
import { StyledSearchBox } from "./style";

//algolia credentials
const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALOGLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY
);

export default function SearchBarCmp() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openSearchBar, setOpenSearchBar] = useState(false);

  return (
    <Box style={{ position: "relative" }}>
      <InstantSearch
        searchClient={searchClient}
        indexName="products"
        future={{ preserveSharedStateOnUnmount: false }}
      >
        <Configure filters="productStatus:Published" />
        <StyledSearchBox
          onInput={(e) => {
            setSearchQuery(e.target.value);
            setOpenSearchBar(true);
          }}
          placeholder="I am looking for..."
        />
        {searchQuery.length > 0 && openSearchBar && (
          <Paper
            sx={{
              position: "absolute",
              width: "100%",
              zIndex: "2000",
              height: "400px",
              overflow: "auto",
            }}
          >
            <List>
              <Hits
                hitComponent={({ hit }) => {
                  return (
                    <ListItem disablePadding component="div">
                      <ImageCard>
                        <Box sx={{ display: "flex" }}>
                          <Box
                            sx={{ display: "flex", flexDirection: "column" }}
                          >
                            <CardContent sx={{ flex: "1 0 auto" }}>
                              <Link
                                href={`nike-sneakers/${hit.productId}`}
                                style={{
                                  color: "white",
                                }}
                              >
                                <Typography component="div" variant="h5">
                                  {hit.title}
                                </Typography>
                              </Link>

                              <Typography
                                variant="subtitle1"
                                color="text.secondary"
                                component="div"
                              >
                                {hit.description}
                              </Typography>
                            </CardContent>
                          </Box>
                          <CardMedia
                            component="img"
                            sx={{ width: 151 }}
                            image={hit.files[0]}
                            alt={`Image of ${hit.title} product`}
                          />
                        </Box>
                      </ImageCard>
                    </ListItem>
                  );
                }}
              />
            </List>
          </Paper>
        )}
      </InstantSearch>
    </Box>
  );
}
