// import React, { Component } from 'react'
// import { Grid } from '@material-ui/core'
// import CreateYoutube from '../projects/createYoutube'
// import VideoDetails from '../projects/videoDetails';
// import youtube from "../../api/youtube";
// import { async } from 'q';



// class YoutubePage extends React.Component {
//   state = {
//     video: [],
//     selectedVideo: null
//   }
  
//   onVideoSelect = (video) => {
//    this.setState({selectedVideo: video});   
//   }

//     handleSubmit = async (searchTerm) => {//da bi vezivalo podatke iz apija mora da bude asinhrona | SerchTemr je iz state-a
//         const response = await youtube.get('search', {
//           params: {
//             part: 'snippet',
//             maxResults: 5,
//             key: 'AIzaSyBwa0W9JYeHNIGyOtZ8TqgtAQ_eyWLI9CU',
//             q: searchTerm
//         }
//         });
//        this.setState({
//          videos: response.data.items,
//          selectedVideo: response.data.items[0]})
  
//     }



//   render() {
//     return (
//       <div className="dashboard container">
//                     <Grid justify="center" container spacing={10}>
//             <Grid item xs={11}>
//             <Grid container spacing={10}>
//                 <Grid item xs={12}>
//                 <CreateYoutube onFormSubmit={this.handleSubmit} />
//                 </Grid>
//             </Grid>
//             <Grid item xs={8}>
//             <VideoDetails video={selectedVideo}/>
//             </Grid>
//             <Grid item xs={4}>
//                 {/* VIDEO LIST */}
//             </Grid>
//             </Grid>
//             </Grid>

//       </div>
//     )
//   }
// }



// export default YoutubePage





import React, { useState } from "react";
import { Grid } from '@material-ui/core'
import CreateYoutube from '../projects/createYoutube'
import VideoDetails from '../projects/videoDetails';
import VideoList from '../projects/VideoList';
import youtube from "../../api/youtube";
import { async } from 'q';




export default () => {
 
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div className="youtubepage">
    <Grid style={{ justifyContent: "center" }} container spacing={10}>
      <Grid item xs={12}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <CreateYoutube onSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={8}>
            <VideoDetails video={selectedVideo} />
          </Grid>
          <Grid item xs={4}>
          <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    </div>
  );

  async function handleSubmit(searchTerm) {
    const { data: { items: videos } } = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 6,
        key:'AIzaSyBwa0W9JYeHNIGyOtZ8TqgtAQ_eyWLI9CU',
        q: searchTerm,
      }
    });

    setVideos(videos);
    setSelectedVideo(videos[0]);
  }
}