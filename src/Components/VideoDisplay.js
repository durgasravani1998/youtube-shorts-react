// import React, { useRef, useEffect, useState } from 'react';
// import video1 from '../assets/video1.mp4';
// import video2 from '../assets/video2.mp4';
// import video3 from '../assets/video3.mp4';
// import video4 from '../assets/video4.mp4';
// import ReactPlayer from 'react-player';

// const VideoDisplay = () => {
//   // const videos = [video1, video2, video3,video4];
//   const videos=[
//     {
//       "URL":video1,
//       "title":"This is SunLight Video",
//     },
//     {
//       "URL":video2,
//       "title":"This is Bird Video",
//     },
//     {
//       "URL":video3,
//       "title":"This is Pebbles Video",
//     },
//     {
//       "URL":video4,
//       "title":"This is Nature Video",
//     }
//   ];
//   const [currentVideo, setCurrentVideo] = useState(0);
//   const [likes, setLikes] = useState(new Array(videos.length).fill(0));
//   const [dislikes, setDislikes] = useState(new Array(videos.length).fill(0));
//   const videoRef = useRef(null);
//   const [likeFilled, setLikeFilled] = useState(false);
//   const [dislikeFilled, setDislikeFilled] = useState(false);

//   useEffect(() => {
//     const handleKeyPress = (event) => {
//       if (event.key === 'ArrowUp' || event.key === 'ArrowRight') {
//         navigate('next');
//       } else if (event.key === 'ArrowDown' || event.key === 'ArrowLeft') {
//         navigate('prev');
//       }
//     };

//     document.addEventListener('keydown', handleKeyPress);

//     return () => {
//       document.removeEventListener('keydown', handleKeyPress);
//     };
//   }, [currentVideo]);

//   const navigate = (direction) => {
//     if (direction === 'next') {
//       setCurrentVideo((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
//     } else if (direction === 'prev') {
//       setCurrentVideo((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
//     }
//   };

//   const handleIntersection = (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.play();
//       } else {
//         entry.target.pause();
//       }
//     });
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(handleIntersection, {
//       threshold: 0.5,
//     });

//     if (videoRef.current) {
//       observer.observe(videoRef.current);
//     }

//     return () => {
//       if (videoRef.current) {
//         observer.unobserve(videoRef.current);
//       }
//     };
//   }, [currentVideo]);

//   useEffect(() => {
//     document.documentElement.style.overflow = 'hidden'; // Remove scroll bar
//     return () => {
//       document.documentElement.style.overflow = 'auto'; // Restore scroll bar
//     };
//   }, []);

//   const handleLike = () => {
//   setLikes((prevLikes) => {
//     const newLikes = [...prevLikes];
//     if (newLikes[currentVideo] === 0) {
//       newLikes[currentVideo] = 1; // Increment like count to 1
//       setDislikes((prevDislikes) => {
//         const newDislikes = [...prevDislikes];
//         newDislikes[currentVideo] = 0; // Reset dislike count to 0
//         return newDislikes;
//       });
//     } else {
//       newLikes[currentVideo] = 0; // Reset like count to 0
//     }
//     return newLikes;
//   });
// };

// const handleDislike = () => {
//   setDislikes((prevDislikes) => {
//     const newDislikes = [...prevDislikes];
//     if (newDislikes[currentVideo] === 0) {
//       newDislikes[currentVideo] = 1; // Increment dislike count to 1
//       setLikes((prevLikes) => {
//         const newLikes = [...prevLikes];
//         newLikes[currentVideo] = 0; // Reset like count to 0
//         return newLikes;
//       });
//     } else {
//       newDislikes[currentVideo] = 0; // Reset dislike count to 0
//     }
//     return newDislikes;
//   });
// };

//   return (
//     <div className='main'>
//       {/* <h1>Short Video Gallery</h1> */}
//       {videos.map(({URL,title},index) => (
  
//   <div className='firstMain' key={index} style={{ display: index === currentVideo ? 'block' : 'none' }}>
//     <div className='videoMain'>
//       <div className='video'>
//     <ReactPlayer width={350} height={600}
//       url={URL}
//       playing={index === currentVideo} 
//       controls
//     />
//     </div>
//     <div className='title'><h2>{title}</h2></div>
    
//     </div>
    

    
//   </div>
// ))}
//       <div className='secondMain'>
//         <div className='likeButton'>
//           <button style={{ color: likes[currentVideo] ? 'blue' : 'gray' }} onClick={handleLike}>
//           <i class="fa-regular fa-thumbs-up"></i>
//           </button>
//           <span>{likes[currentVideo] ? '1' : '0'}</span>
//         </div>
      
//         <div className='dislikeButton'>
//           <button style={{ color: dislikes[currentVideo] ? 'blue' : 'gray' }} onClick={handleDislike}>
//           <i class="fa-regular fa-thumbs-down"></i>
//           </button>
//           <span>{dislikes[currentVideo] ? '1' : '0'}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoDisplay;


import React, { useRef, useEffect, useState } from 'react';
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';
import video3 from '../assets/video3.mp4';
import video4 from '../assets/video4.mp4';
import ReactPlayer from 'react-player';

const VideoDisplay = () => {
  const videos=[
    {
      "URL": video1,
      "title": "This is SunLight Video",
    },
    {
      "URL": video2,
      "title": "This is Bird Video",
    },
    {
      "URL": video3,
      "title": "This is Pebbles Video",
    },
    {
      "URL": video4,
      "title": "This is Nature Video",
    }
  ];

  const [currentVideo, setCurrentVideo] = useState(0);
  const [likes, setLikes] = useState(new Array(videos.length).fill(0));
  const [dislikes, setDislikes] = useState(new Array(videos.length).fill(0));

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

  useEffect(() => {
    const handleSwipe = (event) => {
      const deltaY = event.deltaY;
      if (deltaY > 0) {
        navigate('next');
      } else {
        navigate('prev');
      }
    };

    document.addEventListener('wheel', handleSwipe);

    return () => {
      document.removeEventListener('wheel', handleSwipe);
    };
  }, [currentVideo]);

  const navigate = (direction) => {
    if (direction === 'next') {
      setCurrentVideo((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
    } else if (direction === 'prev') {
      setCurrentVideo((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
    }
  };

  const handleLike = () => {
    setLikes((prevLikes) => {
      const newLikes = [...prevLikes];
      if (newLikes[currentVideo] === 0) {
        newLikes[currentVideo] = 1;
        setDislikes((prevDislikes) => {
          const newDislikes = [...prevDislikes];
          newDislikes[currentVideo] = 0;
          return newDislikes;
        });
      } else {
        newLikes[currentVideo] = 0;
      }
      return newLikes;
    });
  };

  const handleDislike = () => {
    setDislikes((prevDislikes) => {
      const newDislikes = [...prevDislikes];
      if (newDislikes[currentVideo] === 0) {
        newDislikes[currentVideo] = 1;
        setLikes((prevLikes) => {
          const newLikes = [...prevLikes];
          newLikes[currentVideo] = 0;
          return newLikes;
        });
      } else {
        newDislikes[currentVideo] = 0;
      }
      return newDislikes;
    });
  };

  return (
    <div className='main'>
      {videos.map(({ URL, title }, index) => (
        <div className='firstMain' key={index} style={{ display: index === currentVideo ? 'block' : 'none' }}>
          <div className='videoMain'>
            <div className='video'>
              <ReactPlayer
                width={350}
                height={600}
                url={URL}
                playing={index === currentVideo}
                controls
              />
            </div>
            <div className='title'><h2>{title}</h2></div>
          </div>
        </div>
      ))}
      <div className='secondMain'>
        <div className='likeButton'>
          <button style={{ color: likes[currentVideo] ? 'blue' : 'gray' }} onClick={handleLike}>
          <i class="fa-regular fa-thumbs-up"></i>
          </button>
          <span>{likes[currentVideo] ? '1' : '0'}</span>
        </div>
        <div className='dislikeButton'>
          <button style={{ color: dislikes[currentVideo] ? 'blue' : 'gray' }} onClick={handleDislike}>
          <i class="fa-regular fa-thumbs-down"></i>
          </button>
          <span>{dislikes[currentVideo] ? '1' : '0'}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoDisplay;
