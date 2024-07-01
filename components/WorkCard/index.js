import React from 'react';

const WorkCard = ({ videoSrc, name, description, onClick }) => {
  return (
    <div className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link" onClick={onClick}>
      <div className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 video-container" style={{ height: "650px" }}>
        {videoSrc ? (
          <video
            className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="h-full w-full bg-gray-200 flex items-center justify-center">
            <p>No video available</p>
          </div>
        )}
      </div>
      <h1 className="mt-5 text-3xl font-medium">{name ? name : "Project Name"}</h1>
      <h2 className="text-xl opacity-50">{description ? description : "Description"}</h2>
    </div>
  );
};

export default WorkCard;
