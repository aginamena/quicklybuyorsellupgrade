import DrawerCmp from "@/components/DrawerCmp";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  Toolbar,
  Typography,
} from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Filter({ drawerCmp, setDrawerCmp }) {
  const searchParams = useSearchParams();
  const searchSize = searchParams.get("size");
  const searchColor = searchParams.get("color");

  const [state, setState] = useState({
    size: searchSize ? parseInt(searchSize) : 0,
    color: searchColor ? searchColor : "",
  });

  function handleSubmit() {
    if (state.size == 0 && state.color.length == 0) {
      alert("Select a size or color");
      return;
    }
    const url = [];
    if (state.size != 0) url.push("size=" + state.size);
    if (state.color.length > 0) url.push("color=" + state.color);

    const joinedURL = url.join("&");
    window.open(`${window.location.origin}/all?${joinedURL}`, "_blank");
  }
  return (
    <DrawerCmp open={drawerCmp} setDrawerCmp={setDrawerCmp}>
      <Toolbar />
      <Box
        style={{
          width: "250px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginBottom: "100px",
        }}
      >
        <Paper style={{ width: "90%", height: "300px", overflow: "scroll" }}>
          <FormControl style={{ marginTop: "20px", marginBottom: "20px" }}>
            <Box style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h6">Size</Typography>
              <Button onClick={() => setState({ size: 0, color: state.color })}>
                clear
              </Button>
            </Box>

            <RadioGroup
              value={state.size}
              onChange={(event) =>
                setState((state) => ({
                  size: event.target.value,
                  color: state.color,
                }))
              }
              style={{ justifyContent: "center" }}
            >
              {[
                30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45,
                46, 47, 48, 49, 50,
              ].map((size) => (
                <FormControlLabel
                  key={size}
                  value={size}
                  control={<Radio />}
                  label={size}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Paper>
        <Paper
          style={{
            marginTop: "30px",
            width: "90%",
            height: "300px",
            overflow: "scroll",
          }}
        >
          <FormControl style={{ marginTop: "20px", marginBottom: "20px" }}>
            <Box style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h6">Color</Typography>
              <Button onClick={() => setState({ size: state.size, color: "" })}>
                clear
              </Button>
            </Box>

            <RadioGroup
              value={state.color}
              onChange={(event) =>
                setState((state) => ({
                  color: event.target.value,
                  size: state.size,
                }))
              }
              style={{ justifyContent: "center" }}
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
                <FormControlLabel
                  key={color}
                  value={color}
                  control={<Radio />}
                  label={color}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Paper>
        <Button
          onClick={handleSubmit}
          style={{ marginTop: "30px" }}
          variant="outlined"
          size="large"
        >
          Search
        </Button>
      </Box>
    </DrawerCmp>
  );
}
