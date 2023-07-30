import React from "react";
import { Box, styled } from "@mui/system";

import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";

import { Controlled as Control } from "react-codemirror2";

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';


import 'codemirror/mode/xml/xml';  
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';    

import '../style.css';  


const Header = styled(Box)`
  display: flex;
  justify-content: space-between;
  background: #060606;
  color: #aaaebc;
  font-weight: 700;
`;

const Heading = styled(Box)`
  background: #1d1e22;
  display: "flex";
  padding: 9px 12px;
 
`;

const Container=styled(Box)`
flex-grow:1;
 flex-basic:0;
 display:flex;
 flex-direction:column;
 padding:0 8px 8px;
`

const Editor = ({heading ,icon}) => {
  return (
    <>
      <Container>
        <Header>
          <Heading>
            <Box
              component="span"
              style={{
                background: "aqua",
                height: 20,
                width: 20,
                display: "flex",
                placeContent: "centre",
                borderRadius: 5,
                marginRight: 5,
                paddingBottom: 2,
                justifyContent:'center',
                colour: '#000',
              }}
            >
              {icon}
            </Box>
            {heading}
          </Heading>
          <CloseFullscreenIcon />
        </Header>
        <Control  className="controlled-editor"
        options={{
          theme:'materials',
          lineNumbers:true
        }}
        />
      </Container>
    </>
  );
};

export default Editor;
