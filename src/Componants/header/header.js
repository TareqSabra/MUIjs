import {
    Grid,
    IconButton,
    makeStyles,
    Typography,
  } from "@material-ui/core";
  import { AppBar, Toolbar } from "@material-ui/core";
  import React from 'react';
import Searchbar from "../SearchBar/searchBar";
import Brightness2OutlinedIcon  from '@material-ui/icons/Brightness2Outlined';
import Brightness5OutlinedIcon from '@material-ui/icons/Brightness5Outlined';
  const useStyle = makeStyles(({palette})=>({
    
    Root: {
      backgroundColor:palette.background.default,
      transform: "translateZ(0)",
      zIndex:900,
    },
    Title: {
        marginLeft: "10px",
        color:palette.text.primary,
        fontFamily:"'Hanalei Fill',cursive",
        fontWeight:"bold"
      },
    Search: {
      opacity: "0.6",
      padding: "0px 8px",
      color: palette.text.secondary,
    
      "&:hover": {
        backgroundColor: palette.action.hover,
      },
      "$.MuiSvgIcon-root": {
      },
    },
    ThemeToggel:{
      fontSize:"3.5rem",
    }
  }));
const Header = (props) => {
  const {setToggel,Artist,song}= props
 // console.log(props)
    const classes = useStyle();
    return ( 
            <AppBar position="fixed" className={classes.Root}>
             <Toolbar>
                 <Grid container alignItems="center">
                     <Grid item sm >
                       <IconButton onClick={setToggel} >
                         {
                           props.toggle?< Brightness5OutlinedIcon className={classes.ThemeToggel}/>  : <Brightness2OutlinedIcon className={classes.ThemeToggel}/>
                         }
                       </IconButton>
                     </Grid>
                     <Grid item >
                         <Typography
                         className={classes.Title}
                         variant="h4"
                         component="h6"
                         > Music Index
                         </Typography>
                     </Grid>
                     <Grid item sm/>
                     
                 </Grid>
             </Toolbar> 
             <Searchbar
             Artist={Artist}
             song={song}
             />
            </AppBar>
     );
}
 
export default Header;