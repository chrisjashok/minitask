import { Button } from "@mui/material";
import React from "react";

type Props = {
  label?: string;
  className?: string;
  onhandleClick?: any;
  variant?:any;
  startIcon?:React.ReactNode
  color?:any
};


function CustomBtn({ label, className,onhandleClick,variant,startIcon,color }: Props) {

  return (
    <div>
      <Button className={className?? "custom_btn"} variant={variant??'contained'} startIcon={startIcon} onClick={onhandleClick} color={color} >
        {label}
      </Button>
    </div>
  );
}

export default CustomBtn;
