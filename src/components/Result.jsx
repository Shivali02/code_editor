// import React from "react";
import { Box, styled } from "@mui/material";
import { useContext, useState, useEffect } from "react";
import { DataContext } from "../context/Dataprovider";

const Container = styled(Box)`
  height: 41vh;
`;

const Result = () => {
  const [code, setcode] = useState("");

  const { html, css, js } = useContext(DataContext);

//   const maincode = `
//  <html>
//     <body> ${html}</body>
//     <style>  ${css} </style>
//     <script>  ${js} </script>
// </html>
// `;

  useEffect(() => {
    const timeout = setTimeout(() => {
      

      const maincode = `
      <html>
         <body> ${html}</body>
         <style>  ${css} </style>
         <script>  ${js} </script>
     </html>
     `;



      setcode(maincode);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <Container style={html || css || js ? null : { background: "#444857" }}>
      <iframe
        srcDoc={code}
        title="output"
        sandbox="allow-scripts"
        // frameBorder="0"
        width="100%"
        height="100%"
      />
    </Container>
  );
};

export default Result;
