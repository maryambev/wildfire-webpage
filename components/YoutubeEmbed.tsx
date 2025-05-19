'use client'
import React from 'react';

const YoutubeEmbed = () => {
  return (
    <iframe
      width="700" height="415"
      src="https://www.youtube.com/embed/5hghT1W33cY?si=ZmmR-2Ndg7rbOsVo"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      style={{ display: 'block', margin: 'auto', marginTop: '-130px', marginBottom: '100px' }}
      allowFullScreen
    />
  );
};

export default YoutubeEmbed;
