import {
  deleteObject,
  getDownloadURL,
  ref,
  storage,
  uploadBytes,
} from "@/config/firebase";
import {
  getUser,
  storeDataInFirestore,
  updateDataInFirestore,
  getFileUrl,
  getUniqueId,
} from "@/util";

export async function createProduct(specification) {
  const email = specification.creatorOfProduct || getUser().email;
  const productId = specification.productId || getUniqueId();
  const listOfFilePaths = await uploadFiles(specification, email, productId);
  const productsCollection = `products/${productId}`;

  // if the user is editing their product, we simply update the existing fields otherwise, create a new
  // product
  if (specification.productId) {
    specification.productStatus = "On review";
    specification.files = listOfFilePaths;
    delete specification.originalFiles;
    await updateDataInFirestore(productsCollection, specification);
  } else {
    specification = {
      ...specification,
      files: listOfFilePaths,
      productId,
      createdProductTimestamp: new Date().getTime(),
      productStatus: "On review",
      creatorOfProduct: email,
    };
    await storeDataInFirestore(productsCollection, specification);
  }
}

async function uploadFiles(specification, email, productId) {
  //if we're editing a product, we delete all images associated with that product from cloud storage
  //and upload new ones
  if (specification.originalFiles) {
    for (var i = 0; i < specification.originalFiles.length; i++) {
      if (!specification.files.includes(specification.originalFiles[i])) {
        const fileId = extractFileIdFromPath(specification.originalFiles[i]);
        await deleteFromStorage(`products/${email}/${productId}/${fileId}`);
      }
    }
  }

  return await Promise.all(
    specification.files.map(async (file) =>
      getFileUrl(file, email, productId, "products")
    )
  );
}

function extractFileIdFromPath(filePath) {
  const parts = filePath.split("2F");
  const index = parts[3].indexOf("?");
  const fileId = parts[3].substring(0, index);
  return fileId;
}

async function deleteFromStorage(path) {
  await deleteObject(ref(storage, path));
}
