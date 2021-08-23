import { makeStyles } from '@material-ui/core';
import React from 'react';
const useStyles = makeStyles(({palette})=>({
    Root:{
        left:0,
        backgroundColor:palette.divider,
        zIndex:100,
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        width: "320px",
        height: "100%",
    }
}))
const SideBar = () => {
    const classes = useStyles()
    return ( 
        <div className= {classes.Root}>
            
        </div>
     );
}

export default SideBar;