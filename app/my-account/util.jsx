import { storeDataInFirestore } from "pages/util";

export async function addProductForReviewing(productId) {
  const path = `productsForReview/${productId}`;
  await storeDataInFirestore(path, { productId });
}
