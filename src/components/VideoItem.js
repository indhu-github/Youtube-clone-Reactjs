import React from 'react';

import {Grid,Paper,Typography} from '@material-ui/core';

const VideoItem=({video,onVideoSelect})=>{
    return(
       <Grid item xs={12}>
           <Paper style={{alignItems:"center",cursor:"pointer"}} onClick={()=>onVideoSelect(video)}>
               <img alt="demo" src={video.snippet.thumbnails.medium.url}/>
                <Typography variant="subtitle1"><b>{video.snippet.title}</b></Typography>
           </Paper>
       </Grid>
    )
}
export default VideoItem;