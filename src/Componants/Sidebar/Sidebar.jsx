import { makeStyles } from '@material-ui/core';
import React from 'react';
const useStyles = makeStyles(({palette})=>({
    Root:{
        left:0,
        top:0,
        backgroundColor:palette.divider,
        zIndex:100,
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        minWidth:"10%",
        width: "16%",
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