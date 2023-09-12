import { Box, Stack } from '@mui/material'
import React from 'react';
import { VideoCard, ChannelCard } from "../Components/index";

function Videos({videos, direction}) {
  if(!videos?.length) return "Loading...";
  return (
    <Stack direction={ direction || "row"} flexWrap="wrap" justifyContent="start" gap={2}>
        {videos.map((item,indx) => (
            <Box key={indx}>
                {item.id.videoId && <VideoCard video = {item}/> }
                {item.id.channelId && <ChannelCard channelDetail = {item}/> }
            </Box>
        ))}
    </Stack>
  )
}

export default Videos