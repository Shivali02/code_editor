import React from "react";
import Editor from "./editor";
import { Box, styled } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../context/Dataprovider";

const Container = styled(Box)`
  background-color: #060606;
  height: 50vh;
  display: flex;
`;

const Code = () => {
  const { html, css, js, setHtml, setCss, setJs } = useContext(DataContext);

  return (
    <Container>
      <Editor 
      heading="HTML"
       icon="/" 
       value={html}
       onChange={setHtml} 
         language="xml"
          />
      <Editor
       heading="CSS" 
       icon="*" 
       value={css}
       onChange={setCss}  
        language="css" 
        />
      <Editor 
      heading="JavaScript"
       icon="{}" 
       value={js}
       onChange={setJs}
           language="javascript"
            />
    </Container>
  );
};

export default Code;





