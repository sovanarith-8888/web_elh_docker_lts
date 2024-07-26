import React from 'react'

const MediaContainer = () => {
  return (
    <video autoPlay loop muted>
      <source src={"/_next-video/video.mp4"} type="video/mp4" />
    </video>
  );
}

export default MediaContainer