import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { demoThumbnailUrl, demoVideoTitle, demoVideoUrl, demoChannelTitle, demoChannelUrl } from '../Utils/Constants';

function VideoCard({video:{ id:{videoId}, snippet}}) {
  return (
     <Card sx={{width: {xs:"100%", sm:"600px", md:"295px"}, minWidth:"340px", boxShadow: "none", borderRadius: 0}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia alt={snippet?.title} sx={{width: "100%", height: 190 }} image={snippet?.thumbnails?.high?.url}/>
        </Link>
         <CardContent sx={{ backgroundColor: "#1e1e1e", height: '60px' }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <Typography variant='subtitle1' fontWeight="bold" color="#fff">
                {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
            </Typography>
        </Link>
        <Link to={snippet?. channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
            <Typography variant='subtitle2' fontWeight="bold" color="grey">
                {snippet?.channelTitle || demoChannelTitle}
                <CheckCircle sx={{fontSize:12, color:"grey", ml:"5px"}}/>
            </Typography>
        </Link>
         </CardContent>
     </Card>
  )
}

export default VideoCard