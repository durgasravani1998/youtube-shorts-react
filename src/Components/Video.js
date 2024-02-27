import React, { useRef, useEffect, useState } from 'react';
import video1 from './videos/video1.mp4';
import video2 from './videos/video2.mp4';
import video3 from './videos/video3.mp4';

const VideoDisplay = () => {
  const videos = [video1, video2, video3];
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'ArrowUp' || event.key === 'ArrowRight') {
        navigate('next');
      } else if (event.key === 'ArrowDown' || event.key === 'ArrowLeft') {
        navigate('prev');
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [currentVideo]);

  const navigate = (direction) => {
    if (direction === 'next') {
      setCurrentVideo((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
    } else if (direction === 'prev') {
      setCurrentVideo((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
    }
  };

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.play();
      } else {
        entry.target.pause();
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [currentVideo]);

  useEffect(() => {
    document.documentElement.style.overflow = 'hidden'; // Remove scroll bar
    return () => {
      document.documentElement.style.overflow = 'auto'; // Restore scroll bar
    };
  }, []);

  return (
    <div>
      {videos.map((video, index) => (
        <video
          key={index}
          ref={index === currentVideo ? videoRef : null}
          src={video}
          autoPlay={index === currentVideo}
          controls
          style={{ display: index === currentVideo ? 'block' : 'none' }}
        />
      ))}
    </div>
  );
};

export default VideoDisplay;