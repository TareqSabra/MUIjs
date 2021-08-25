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
const SongCard = (props) => {
    console.log("props in card",props)
    const{album,name,artists,preview_url}=props.item
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
          src= {album.images[0].url}
          width={album.images[0].width}
          height={album.images[0].height}
          />
        <Typography id="SongName"
         variant="h5"
         component="div" >
            {name}
        </Typography>
        <Typography id="AlbumName"
         variant="subtitle2"
         component="div" >
             {album.name}
        </Typography>
        <Typography id="ArtistName"
        variant="subtitle1"
        component="div" >
            { artists.name}
        </Typography>
        <div>
        <button onClick={playAudio}>
          <span>Play Audio</span>
        </button>
        <audio className="audio-element">
        <source src={preview_url}></source>
        </audio>
      </div>
        </Paper>
     );
}
 
export default SongCard;