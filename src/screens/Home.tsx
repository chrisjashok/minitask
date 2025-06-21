import "./screens.css";
import { Avatar, ButtonGroup, Grid, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CustomBtn from "../components/CustomBtn";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import TableRowsOutlinedIcon from "@mui/icons-material/TableRowsOutlined";
import TextInput from "../components/TextInput";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useDispatch, useSelector } from "react-redux";
import { getDatabyPage, getDatabysearch, getHomedata } from "../redux/thunk";
import React from "react";
import CustomPagination from "../components/CustomPagination";
import CustomTable from "../components/CustomTable";
import CustomCard from "../components/CustomCard";
import CardList from "../components/CardList";
import CustomModal from "../components/CustomModal";

type Props = {};
type userData = {
  avatar: string;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
};

function Home({}: Props) {
  const [view, setView] = React.useState(2);
  const [search, setSearch] = React.useState("");
  const [modelView,setModelView] = React.useState(false)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state: any) => state.home);
  let userData: userData[] = data?.data;

  React.useEffect(() => {
    if (search.length <= 0) {
      dispatch(getHomedata());
    }
  }, [dispatch, search]);

  const handleSearchUser = () => {
    if (search.length > 0) {
      const params = { data: data, searchValue: search };
      dispatch(getDatabysearch(params));
    }
  };

  const getUserbyPage = (page: number) => {
    dispatch(getDatabyPage(page));
  };

  const handleRenderModel = ()=>{
     setModelView(!modelView)
  }

  return (
    <Grid container className="page_container">
      <Paper className="home_card">
        <Grid className="home_itemContainer">
          <Grid className="home_item">
            <Typography variant="subtitle1">Users</Typography>
            <ButtonGroup variant="contained">
              <CustomBtn
                label="Table"
                className="home_varient_btn"
                variant="outlined"
                startIcon={<TableRowsOutlinedIcon />}
                onhandleClick={() => setView(1)}
              />
              <CustomBtn
                label="Card"
                className="home_varient_btn"
                variant="outlined"
                startIcon={<ListOutlinedIcon />}
                onhandleClick={() => setView(2)}
              />
            </ButtonGroup>
          </Grid>
          <Grid className="home_actionItem">
            <TextInput
              className="home_searchField"
              onhandleChange={setSearch}
            />
            <CustomBtn
              startIcon={<SearchOutlinedIcon />}
              variant="outlined"
              className="home_search_btn"
              onhandleClick={handleSearchUser}
            />
            <CustomBtn
              label="Create"
              variant="contained"
              className="home_varient_btn"
              onhandleClick={handleRenderModel}
            />
          </Grid>
        </Grid>
        {view ==1? <CustomTable value={userData} onhandleChange={()=>setModelView(true)} onhandleDelete={()=>''} /> : <CardList value={userData} />}
      </Paper>
      <Grid className="home_tablePagination">
        <CustomPagination
          count={data?.total}
          maxRendercount={data?.total_pages}
          shape="rounded"
          size="small"
          variant="outlined"
          onChange={(e: any) => getUserbyPage(e)}
        />
      </Grid>
      <CustomModal isOpen={modelView} onClose={()=>setModelView(false)} />
    </Grid>
  );
}

export default Home;
