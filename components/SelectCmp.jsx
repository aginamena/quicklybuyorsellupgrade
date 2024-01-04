import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import PropTypes from "prop-types";
import { useState } from "react";

export default function SelectCmp({ name, menuItems, handleSelect }) {
  const [state, setState] = useState("");

  const handleChange = (event) => {
    setState(event.target.value);
    handleSelect(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel data-testid="inputLabel">{name}</InputLabel>
        <Select
          value={state}
          label={name}
          data-testid={name}
          required
          onChange={handleChange}
        >
          {menuItems.map((menuItem, index) => (
            <MenuItem key={index} value={menuItem}>
              {menuItem}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

SelectCmp.propTypes = {
  name: PropTypes.string.isRequired,
  menuItems: PropTypes.array.isRequired,
  handleSelect: PropTypes.func.isRequired,
};
