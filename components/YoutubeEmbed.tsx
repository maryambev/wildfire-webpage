'use client';
import React from 'react';

export default function YoutubeEmbed() {
  return (
    <div className="video-responsive" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
      <iframe
        src="https://www.youtube.com/embed/5hghT1W33cY?si=ZmmR-2Ndg7rbOsVo"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Wildfire Awareness Video"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      ></iframe>
    </div>
  );
}
