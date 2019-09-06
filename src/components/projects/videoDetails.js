import React from "react";

import { Paper, Typography } from "@material-ui/core";

export default ({ video }) => {
  if (!video) return <div>Loading...</div>;

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`; // $ znak se koristi za dinamic data
//console.log(video.id.videoId)
  return (
    <React.Fragment>
      <Paper elevation={6} style={{ height: "40%", margin: "0 0 0 50px"}}>
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="Video Player"
          src={videoSrc}
        />
      </Paper>
      <Paper elevation={6} style={{ padding: "5px", margin: "0 0 0 50px"}}>
        <Typography variant="h4">
          {video.snippet.title} - {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle1">
          {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle2">{video.snippet.description}</Typography>
      </Paper>
    </React.Fragment>
  );
}