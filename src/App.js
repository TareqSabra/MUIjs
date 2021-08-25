
import React,{useEffect,useMemo} from 'react';
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from "./Componants/header/header"
import SideBar from './Componants/Sidebar/Sidebar';
import { useState } from 'react';
import Songlist from './Containors/songList/songList';
import Mainpage from './Containors/mainPage/mainPage';
const useStyles = makeStyles({
  appmain: {
    paddingLeft: "150px",
    width: "100%",
  },
});

function App() {
  
  const classes = useStyles();
  const [toggle,setToggel]=useState(JSON.parse(localStorage.getItem("theme")))
  useEffect(()=>{
    localStorage.setItem("theme",JSON.stringify(toggle));
  },[toggle])
  const Toggelf = ()=>{
    setToggel(!toggle)
  }
 
  const theme = useMemo(
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
    
    <div className={classes.appmain}>
    <Mainpage
    toggle={toggle} setToggel={Toggelf}
    ></Mainpage>
    </div>
    <CssBaseline />{" "}
    </ThemeProvider>
  
  );
}

export default App;
