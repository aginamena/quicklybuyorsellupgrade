import { updateDataInFirestore } from "@/util";

export async function acceptProduct(productId) {
  await updateDataInFirestore(`products/${productId}`, {
    productStatus: "Published",
  });
}

export async function rejectProduct(productId) {
  await updateDataInFirestore(`products/${productId}`, {
    productStatus: "Decliend",
  });
}
