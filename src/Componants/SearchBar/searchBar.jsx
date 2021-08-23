import { Grid, InputBase, makeStyles } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import React from 'react';
const useStyle = makeStyles(({palette})=>({
    Root: {
      borderTop:"dotted",
      borderColor:palette.divider,   
      backgroundColor: 
      palette.action.disabledBackground,
      transform: "translateZ(0)",
      height:"5vh"

    },
    label:{
        marginLeft:"50px",
        marginBottom: "8px",
        color:palette.text.primary,
        fontSize:"120%",
        fontFamily:"'Hanalei Fill',cursive",
    },
    Search: {
      marginLeft:"5px",
      opacity: "0.6",
      padding: "0px 8px",
      color:palette.text.primary,
      borderBottom:"none",
      "&:hover": {
        backgroundColor: palette.action.hover,
        borderBottom:"solid",
      },
    },
    icons: {
      color: "White",
      "&:hover": {
        color: "red",
      },
    },
  }));
const Searchbar = () => {
    const classes = useStyle();
    return ( 
            <Grid container alignItems="center"className={classes.Root}>
                <Grid item >
                     <label className={classes.label}>
                         Search for music by Artist
                    </label>
                     <InputBase
                        className={classes.Search}
                        placeholder="Search"
                        startAdornment={<SearchOutlined fontSize="small" />}
                            />
                </Grid>
                <Grid item >
                    <label className={classes.label}>
                         Search for music by Song name
                    </label>
                    <InputBase
                        className={classes.Search}
                        placeholder="Search"
                        startAdornment={<SearchOutlined fontSize="small" />}
                        />
                </Grid>
        </Grid>
       
     
     );
}
 
export default  Searchbar;