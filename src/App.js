
import React,{useContext} from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from "./Componants/header/header"
import SideBar from './Componants/Sidebar/Sidebar';
import ThemeContextProvider, { ThemeContext } from './context/theamContext';
import { useState } from 'react';

function App() {
  const [toggle,setToggel]=useState(false)
  const Toggel = ()=>{
    setToggel(!toggle)
  }
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: toggle ? 'dark' : 'light',
        },
      }),
    [toggle],
  );

  return (
    
    <ThemeProvider theme={theme}>
    
    <div className="App">
    <ThemeContextProvider >
      <Header toggle={toggle} setToggel={Toggel}></Header>
      <SideBar></SideBar>
      </ThemeContextProvider>
    </div>
    
    <CssBaseline />{" "}
    </ThemeProvider>
  
  );
}
/*
{
  
}
*/
export default App;
