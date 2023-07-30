import React from "react";
import Editor from "./editor";
import { Box,styled } from "@mui/system";

const Container= styled(Box)`
background-color: #060606;
height: 50vh;
display: flex;
`

const Code = () => {
  return (
    <Container>
      <Editor heading="HTML" icon="/"  colour="#060606" font-size='25px' padding='5px' />
      <Editor heading="CSS" icon="*" />
      <Editor heading="JavaScript" icon="{}" />
    </Container>
  );
};

export default Code;
