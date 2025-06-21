import "./components.css";
import { InputAdornment, TextField } from "@mui/material";
import React, { ChangeEvent } from "react";

type Props = {
  icon?: React.ReactNode;
  type?: string;
  className?: string;
  onhandleChange?: any;
};

interface TextInput {
  onhandleChange?: (value: string) => void;
}

function TextInput({ icon, type, className, onhandleChange }: Props) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onhandleChange(event.target.value);
  };
  return (
    <>
      <TextField
        variant="outlined"
        type={type}
        className={className ?? "txt_field"}
        onChange={handleChange}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">{icon}</InputAdornment>
            ),
          },
        }}
      />
    </>
  );
}

export default TextInput;
