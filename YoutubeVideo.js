import { edgeServerAppPaths } from 'next/dist/build/webpack/plugins/pages-manifest-plugin';
import React from 'react';

function Map() {
  return (
    <div className="map">
      <iframe
        src="https://wildfires.getambee.com/?w=480&h=320"
        width='480'
        height='320'
        style={"border:0;"}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      >
      </iframe>
    </div>
  );
}
// const YouTubeVideo = () => {
//   const videoId = 'YOUR_VIDEO_ID'; // Replace with your actual video ID

//   return (
//     <div>
//       <iframe
//         width="560"
//         height="315"
//         src={`https://www.youtube.com/embed/${}`}
//         title="YouTube video player"
//         frameBorder="0"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//         allowFullScreen
//       ></iframe>
//     </div>
//   );
// };

export default Map;

