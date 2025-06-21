import { Avatar, Box, Card, IconButton, Typography } from "@mui/material";
import React from "react";
import "./components.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

type Props = {
  data:any
};

const CustomCard = ({data}: Props) => {
  console.log('data',data)
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <>
      <Card
        className="card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        {/* <CardContent> */}
        <Avatar
          src={data?.avatar}
          className="card_Avatar"
        />
        <Typography className="cart_name">{data?.first_name} {data?.last_name}</Typography>
        <Typography className="cart_Email">{data.email}</Typography>
        {/* </CardContent> */}
        {isHovered && (
          <Box
            className="card-actions"
            onMouseMoveCapture={() => setIsHovered(true)}
            onMouseOutCapture={() => setIsHovered(false)}>
            <IconButton size="small" className="Edit_iconButton">
              <EditIcon color="info" className="Icon" />
            </IconButton>
            <IconButton
              size="small"
              color="warning"
              className="Delete_iconButton">
              <DeleteIcon className="Icon" />
            </IconButton>
          </Box>
        )}
      </Card>
    </>
  );
};

export default CustomCard;
