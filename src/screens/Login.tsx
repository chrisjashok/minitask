import { Card, Grid } from "@mui/material";
import React, { useState } from "react";
import "./screens.css";
import TextInput from "../components/TextInput";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import CustomBtn from "../components/CustomBtn";
import CustomCheckBox from "../components/CustomCheckBox";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "../redux/thunk";
import { useNavigate } from "react-router-dom";
const Login: React.FC<{}> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token, error } = useSelector((state: any) => state.login);
  const isLogin = localStorage.getItem("isLogin") === "true";

  const sendInputs = () => {
    const params = { email: email, password: password };
    dispatch(LoginUser(params));
  };

  React.useEffect(() => {
    if (isLogin) {
      navigate("/home");
    } else if (error) {
      alert("Something went wrong, Please try again");
    } else {
    }
  }, [token,isLogin]);

  return (
    <Grid container className="page_container">
      <Card className="login_card">
        <TextInput
          icon={<PermIdentityOutlinedIcon />}
          onhandleChange={setEmail}
        />
        <TextInput
          icon={<LockOutlinedIcon />}
          type="password"
          onhandleChange={setPassword}
        />
        <CustomCheckBox label="Remember me" />
        <CustomBtn label="Login" onhandleClick={sendInputs} />
      </Card>
    </Grid>
  );
};

export default Login;
