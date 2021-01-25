import React from 'react';
import {Grid} from '@material-ui/core';
import VideoItem from './VideoItem';

const VideoList=({videos,onVideoSelect})=>{
    const ListOfVideos=videos.map((video)=>
    <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video}/>);
    return(
        <Grid container spacing={2}>
            {ListOfVideos}
        </Grid>
    );
}
export default VideoList;