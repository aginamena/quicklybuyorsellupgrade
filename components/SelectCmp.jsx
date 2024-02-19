import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function SelectCmp(props) {
  return (
    <FormControl fullWidth required>
      <InputLabel>{props.name}</InputLabel>
      <Select
        required
        {...props}
        input={<OutlinedInput label={props.name} />}
        MenuProps={MenuProps}
      >
        {props.children}
      </Select>
    </FormControl>
  );
}
