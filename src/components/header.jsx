import React from 'react'
import { AppBar , Toolbar ,styled} from '@mui/material'
// import { height } from '@mui/system'


//to style Appbar store the styled component in a new variable
const Container=styled(AppBar)`
background:#060606;
`

const Header = () => {
  return (
    <>
    <Container position='static'>
      <Toolbar>
        <img src="./images/logo.png" alt="logo" style={ {height: 40}} />
      </Toolbar>
    </Container>

    </>
  )
}

export default Header
