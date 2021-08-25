import { Grid, makeStyles, Paper} from '@material-ui/core';
import React from 'react';
import SongCard from '../../Componants/SongCard/songCard';
const useStyle = makeStyles((theme) => ({
    pageContent: {
      margin: theme.spacing(25),
      padding: theme.spacing(3),
      width:"85%",
      minWidth: "40%",   
      maxHeight:"80vh",
      borderRadius:"2%",
      overflow:"auto",
      backgroundColor:theme.palette.action.active,
      '&::-webkit-scrollbar': {
        width: '0.4em'
      },
      '&::-webkit-scrollbar-track': {
        boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
        webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(0,0,0,.1)',
        outline: '1px solid slategrey'
      }
    },
    SongCardContainor:{
        display: "flex",
        overflow:"auto",
        justifyContent:"center",
        flexDirection: "row",
      
     },
    SongCard:{
        margin:theme.spacing(3),
    },
    scrollbars:{
        width: "20px"
    }

  }));
const Songlist = (props) => {
    const {data}= props
    console.log("data",data);
    const classes = useStyle();
    return (  
        <Paper className={classes.pageContent}>
            <Grid container alignItems={'center'} alignContent={'center'} className={classes.SongCardContainor}>
                <Grid item className={classes.SongCard}  >
                  <SongCard/>
                </Grid>
                <Grid item className={classes.SongCard}  >
                  <SongCard/>
                </Grid>
                <Grid item className={classes.SongCard}  >
                  <SongCard/>
                </Grid>
                <Grid item className={classes.SongCard}  >
                  <SongCard/>
                </Grid>
                <Grid item className={classes.SongCard}  >
                  <SongCard/>
                </Grid>
                <Grid item className={classes.SongCard}  >
                  <SongCard/>
                </Grid>
                <Grid item className={classes.SongCard}  >
                  <SongCard/>
                </Grid>
                <Grid item className={classes.SongCard}  >
                  <SongCard/>
                </Grid>
            </Grid>
       
        </Paper>
    );
}
 
export default Songlist;