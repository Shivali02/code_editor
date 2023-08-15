import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
// import { height } from '@mui/system'

//to style Appbar store the styled component in a new variable
const Container = styled(AppBar)`
  background: #060606;
  position: static;
  border-bottom: 1px solid #2f2f2f;
  height: 9vh;
`;

const Header = () => {
  return (
    <Container>
      <Toolbar>
        <img src="./images/logo.png" alt="logo" style={{ height: 40 }} />
        <h1 style={{ marginLeft: 8 }}>typo</h1>
      </Toolbar>
    </Container>
  );
};

export default Header;
