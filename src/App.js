import React from 'react';
import {Grid} from '@material-ui/core';

import {SearchBar,VideoDetail,VideoList} from './components';
import youtube from './api/youtube';

class App extends React.Component{

    state={
        video:[],
        selectedVideo:null,
    }

    componentDidMount(){
        this.handleSubmit('Money Heist');
    }
    onVideoSelect=(video)=>{
        this.setState({selectedVideo:video});
    }

    handleSubmit=async (searchItem)=>{
        const res=await youtube.get('search',{
        params:{
            part:'snippet',
            maxResults:5,
            key:'AIzaSyDXL-bAuiylA6GeB346ZL43pgYPXSxnUjo',
            q:searchItem
        }});

        //console.log(res.data.items);
        this.setState({video:res.data.items,selectedVideo:res.data.items[0]});
    }


    render(){
        const {video,selectedVideo}=this.state;
        return(
            <Grid justify="center" container spacing={2}>
                <Grid item xs={11}>
                    <Grid container spacing={8}>
                        <Grid item xs={12}>
                            {/*Search Bar*/}
                            <SearchBar onFormSubmit={this.handleSubmit}/>
                        </Grid>
                        <Grid item xs={8}>
                            {/*Video Details*/}
                            <VideoDetail video={selectedVideo}/>
                        </Grid>
                        <Grid item xs={4}>
                            {/*Video List*/}
                            <VideoList videos={video} onVideoSelect={this.onVideoSelect}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}
export default App;