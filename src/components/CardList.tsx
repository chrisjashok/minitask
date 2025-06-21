import React from "react";
import CustomCard from "./CustomCard";
import { Grid } from "@mui/material";

type Props = {
  value?: any;
};

const CardList = ({ value }: Props) => {
  const chunked = [];
  for (let i = 0; i < value?.length; i += 3) {
    chunked.push(value?.slice(i, i + 3));
  }

  return (
    <Grid>
      {chunked.map((row) => (
        <Grid
          sx={{
            display: "flex",
            margin: "0 0 1.8rem 0",
            gap: "6rem",
          }}>
          {row.map((item:any) => {
            return (
              <Grid sx={{ flexDirection: "row" }}>
                <CustomCard data={item} />
              </Grid>
            );
          })}
        </Grid>
      ))}
    </Grid>
  );
};

export default CardList;
