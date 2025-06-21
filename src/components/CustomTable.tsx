import { Avatar, Grid, Typography } from "@mui/material";
import "./components.css";
import CustomBtn from "./CustomBtn";

type Props = {
  value?: any;
  onhandleChange?: any;
  onhandleDelete?: any;
};

interface CustomTable {
  onhandleChange?: (value: string) => void;
  onhandleDelete?: (value: string) => void;
}
function CustomTable({ value = [], onhandleChange, onhandleDelete }: Props) {
  return (
    <>
      <Grid className="home_tableHeader">
        <Typography className="home_tableTitle"></Typography>
        <Typography className="home_tableTitle">Email</Typography>
        <Typography className="home_tableTitle">First Name</Typography>
        <Typography className="home_tableTitle">Last Name</Typography>
        <Typography className="home_tableTitle">Action</Typography>
      </Grid>
      {value.map((user: any) => {
        return (
          <Grid className="home_tableBody">
            <Grid className="home_tableCell">
              <Avatar src={user?.avatar} />
            </Grid>
            <Grid className="home_tableCell">
              <Typography>{user?.email}</Typography>
            </Grid>
            <Grid className="home_tableCell">
              <Typography>{user?.first_name}</Typography>
            </Grid>
            <Grid className="home_tableCell">
              <Typography>{user?.first_name}</Typography>
            </Grid>
            <Grid className="home_tableCell">
              {/* <Typography>{user?.first_name}</Typography> */}
              <CustomBtn
                className="home_actionbtn"
                color={"primary"}
                label="Edit"
                onhandleClick={onhandleChange}
              />
              <CustomBtn
                className="home_actionbtn"
                color={"error"}
                label="Delete"
                onhandleClick={onhandleDelete}
              />
            </Grid>
          </Grid>
        );
      })}
    </>
  );
}

export default CustomTable;
