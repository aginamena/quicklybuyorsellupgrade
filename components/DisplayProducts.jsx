import Grid from "@mui/material/Grid";

import PropTypes from "prop-types";

import Displaycard from "./ProductCard";

export default function DisplayProducts({ products, isPrivate }) {
  return (
    <Grid container spacing={2}>
      {products.map(
        ({ amount, title, files, productId, productStatus }, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
            <Displaycard
              productId={productId}
              amount={amount}
              title={title}
              image={files[0]}
              isPrivate={isPrivate}
              productStatus={productStatus}
            />
          </Grid>
        )
      )}
    </Grid>
  );
}

DisplayProducts.propTypes = {
  products: PropTypes.array.isRequired,
  isPrivate: PropTypes.bool.isRequired,
};
