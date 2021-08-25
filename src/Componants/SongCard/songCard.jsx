import { makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
const useStyle = makeStyles({
    root:{
        "& div":{
        textAlign:"center",
        fontFamily:"'Hanalei Fill',cursive",
        },
    },

})
const SongCard = () => {
    const playAudio =()=> {
        const audioEl = document.getElementsByClassName("audio-element")[0]
        audioEl.play()
      }
    const classes = useStyle()
    return ( 
        <Paper variant="outlined" className={classes.root}>
          <img
          id="songImg"
          alt=""
          src= "https://picsum.photos/300/300"
          width="300"
          height="300"
          />
        <Typography id="SongName"
         variant="h5"
         component="div" >
             hey1
        </Typography>
        <Typography id="AlbumName"
         variant="subtitle2"
         component="div" >
              hey2
        </Typography>
        <Typography id="ArtistName"
        variant="subtitle1"
        component="div" >
             hey3
        </Typography>
        <div>
        <button onClick={playAudio}>
          <span>Play Audio</span>
        </button>
        <audio className="audio-element">
        <source src="https://p.scdn.co/mp3-preview/0dd45171d094ca8d374219054879662fe7982462?cid=d8a5ed958d274c2e8ee717e6a4b0971d"></source>
        </audio>
      </div>
        </Paper>
     );
}
 
export default SongCard;