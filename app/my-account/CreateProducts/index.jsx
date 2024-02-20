import ClearIcon from "@mui/icons-material/Clear";
import SendIcon from "@mui/icons-material/Send";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  ListItemText,
  MenuItem,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { useEffect, useState } from "react";

import Image from "next/image";

import BackdropCmp from "@/components/BackdropCmp";
import SelectCmp from "@/components/SelectCmp";
import SnackbarCmp from "@/components/SnackbarCmp";
import { useMyAccountContext } from "@/context/myAccount";
import { getFromFirestore } from "@/util";
import { PostImage } from "./style";
import { createProduct } from "./util";

export default function CreateProducts() {
  const [specification, setSpecification] = useState({
    files: [],
    sizes: [],
  });
  const [loading, setLoading] = useState(false);
  const [isEditingProduct, setIsEditingProduct] = useState(false);
  const [snackbarCmp, setSnackbarCmp] = useState({
    shouldShow: false,
    message: "",
  });
  const [backdropCmp, setBackdropCmp] = useState(false);
  const { selectedProductId, setSelectedProductId } = useMyAccountContext();

  const theme = useTheme();

  const isMediumScreenSizeAndBelow = useMediaQuery(
    theme.breakpoints.down("md")
  );

  function addFiles(newFiles) {
    const MAXIMUM_NUMBER_OF_FILES = 10;
    if (
      specification.files.length + newFiles.length <=
      MAXIMUM_NUMBER_OF_FILES
    ) {
      setSpecification({
        ...specification,
        files: [...specification.files, ...newFiles],
      });
    } else {
      alert("Maximum number of files reached");
    }
  }
  function removeFile(index) {
    setSpecification({
      ...specification,
      files: specification.files.filter((_, i) => i !== index),
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const maximumLengthOfTitle = 64;
    if (specification.files.length == 0) {
      alert("Enter atleast 1 image");
      return;
    }
    if (specification.description.length == 0) {
      alert("Description can't be empty");
      return;
    }
    if (specification.title.length > maximumLengthOfTitle) {
      alert(`Title should be less than ${maximumLengthOfTitle} characters`);
      return;
    }

    try {
      console.log(specification);
      setBackdropCmp(true);
      // if we're editing the product, we need to keep the current product id
      await createProduct(specification);
      const message = specification.productId
        ? "Your product has been saved"
        : "Your product has been created! Go to View Products to see your products!";
      setBackdropCmp(false);
      setSnackbarCmp({
        shouldShow: true,
        message,
      });
      // After the user has edited thier product, set the edit product state to false
      setIsEditingProduct(false);
    } catch (error) {
      alert("An error occured");
      setBackdropCmp(false);
    }
  }

  function handleSelect(event) {
    const value = event.target.value;
    setSpecification((prevState) => ({
      ...prevState,
      sizes: typeof value === "string" ? value.split(",") : value,
    }));
  }

  useEffect(() => {
    if (selectedProductId.length > 0) {
      async function loadProduct() {
        setLoading(true);
        const product = await getFromFirestore(`products/${selectedProductId}`);
        setIsEditingProduct(true);
        setSpecification({ ...product, originalFiles: product.files });
        setLoading(false);
        setSelectedProductId("");
      }
      loadProduct();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedProductId]);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }
  return (
    <form data-testid="Create Products Cmp" onSubmit={handleSubmit}>
      {isEditingProduct && (
        <Typography variant="h6" style={{ textAlign: "center" }}>
          You are currently editing your product
        </Typography>
      )}
      <Box style={{ marginBottom: "30px" }}>
        <Typography style={{ marginBottom: "10px" }}>
          Product image(s)
        </Typography>
        <PostImage>
          <Box>
            <input
              type="file"
              multiple
              data-testid="image"
              accept="image/jpeg, image/png, video/mp4"
              onChange={(e) => addFiles(e.target.files)}
            />

            <Typography>
              Add image files of your product. You can add up to 10 files. Jpeg
              or Png only
            </Typography>
          </Box>
        </PostImage>
        <Divider />
        <Stack
          direction={isMediumScreenSizeAndBelow ? "column" : "row"}
          style={{ flexWrap: "wrap" }}
          spacing={2}
        >
          {specification.files.map((file, index) => (
            <Box
              key={index}
              style={{
                width: "200px",
                height: "200px",
                backgroundColor: "black",
                position: "relative",
              }}
            >
              <Image
                //if the image is an old image that is already hosted in firebase we display the file otherwise
                //create a url to the file from our machine
                src={
                  typeof file === "string" ? file : URL.createObjectURL(file)
                }
                width={100}
                height={100}
                alt="Posting preview"
                style={{
                  width: "100%",
                  height: "100%",
                  opacity: "0.7",
                }}
              />
              <div onClick={() => removeFile(index)}>
                <ClearIcon
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "10px",
                    cursor: "pointer",
                  }}
                  role=""
                  fontSize="large"
                />
              </div>
            </Box>
          ))}
        </Stack>
      </Box>
      <Typography style={{ marginBottom: "10px" }}>Product details</Typography>

      <TextField
        required
        label="Product title"
        variant="outlined"
        defaultValue={specification.title}
        value={specification.title}
        data-testid="title"
        fullWidth
        onChange={(e) =>
          setSpecification({
            ...specification,
            title: e.target.value,
          })
        }
      />
      <TextField
        required
        type="number"
        data-testid="amount"
        value={specification.amount}
        style={{ marginTop: "30px", marginBottom: "30px" }}
        fullWidth
        inputProps={{ min: "0", step: "any", "data-testid": "setAmount" }}
        onChange={(e) =>
          setSpecification({
            ...specification,
            amount: e.target.value,
          })
        }
        label="Price (NGN)"
      />

      <SelectCmp
        name="Sizes"
        multiple
        value={specification.sizes || []}
        onChange={handleSelect}
        renderValue={(selected) => selected.join(", ")}
      >
        {[35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, "Other"].map(
          (size) => (
            <MenuItem key={size} value={size}>
              <Checkbox
                checked={
                  specification.sizes && specification.sizes.indexOf(size) > -1
                }
              />
              <ListItemText primary={size} />
            </MenuItem>
          )
        )}
      </SelectCmp>
      <Box style={{ marginTop: "30px" }}>
        <SelectCmp
          name="Color"
          value={specification.color}
          onChange={(event) =>
            setSpecification((prevState) => ({
              ...prevState,
              color: event.target.value,
            }))
          }
        >
          {[
            "Black",
            "Blue",
            "Brown",
            "White",
            "Ash",
            "Gray",
            "Green",
            "Pink",
            "Purple",
            "Red",
            "Yellow",
            "MultiColor",
          ].map((color) => (
            <MenuItem key={color} value={color}>
              <ListItemText primary={color} />
            </MenuItem>
          ))}
        </SelectCmp>
      </Box>
      <Box style={{ marginTop: "30px" }}>
        <SelectCmp
          name="Condition"
          value={specification.condition}
          onChange={(event) =>
            setSpecification((prevState) => ({
              ...prevState,
              condition: event.target.value,
            }))
          }
        >
          {["New", "Used"].map((condition) => (
            <MenuItem key={condition} value={condition}>
              <ListItemText primary={condition} />
            </MenuItem>
          ))}
        </SelectCmp>
      </Box>
      <Box style={{ marginTop: "30px" }}>
        <SelectCmp
          name="Gender"
          value={specification.gender}
          onChange={(event) =>
            setSpecification((prevState) => ({
              ...prevState,
              gender: event.target.value,
            }))
          }
        >
          {["Male", "Female", "Unisex"].map((gender) => (
            <MenuItem key={gender} value={gender}>
              <ListItemText primary={gender} />
            </MenuItem>
          ))}
        </SelectCmp>
      </Box>
      <Box style={{ marginTop: "30px" }}>
        <SelectCmp
          name="Style"
          value={specification.style}
          onChange={(event) =>
            setSpecification((prevState) => ({
              ...prevState,
              style: event.target.value,
            }))
          }
        >
          {["Sporting shoes", "Fashion shoes", "Sandals and slides"].map(
            (style) => (
              <MenuItem key={style} value={style}>
                <ListItemText primary={style} />
              </MenuItem>
            )
          )}
        </SelectCmp>
      </Box>
      <TextField
        required
        style={{ marginTop: "30px" }}
        label="Product description"
        variant="outlined"
        data-testid="description"
        fullWidth
        inputProps={{ "data-testid": "Product description" }}
        multiline
        value={specification.description}
        rows={5}
        placeholder="What other details do you want buyers to know about this product?"
        onChange={(e) =>
          setSpecification((prevState) => ({
            ...prevState,
            description: e.target.value,
          }))
        }
      />
      <Box style={{ marginTop: "40px", marginBottom: "30px" }}>
        <Button
          variant="outlined"
          endIcon={<SendIcon />}
          type="submit"
          role="submitBtn"
        >
          {isEditingProduct ? "Save product" : "Create product"}
        </Button>
      </Box>
      <BackdropCmp open={backdropCmp} />
      <SnackbarCmp
        open={snackbarCmp.shouldShow}
        message={snackbarCmp.message}
        closeSnackBar={setSnackbarCmp}
      />
    </form>
  );
}
