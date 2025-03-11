import React, { useEffect, useRef, useState } from "react";

function AudioPlayer({ url }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
console.log(url)
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = url;
      audioRef.current.load();
      setIsPlaying(false);
      setProgress(0);
    }
  }, [url]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgress = () => {
    if (audioRef.current) {
      const currentTime = audioRef.current.currentTime;
      const duration = audioRef.current.duration || 1;
      setProgress((currentTime / duration) * 100);
    }
  };

  return (
    <div style={styles.audioPlayerContainer}>
      <div style={styles.progressBarContainer}>
        <div style={{ ...styles.progressBar, width: `${progress}%` }}></div>
      </div>
      <button onClick={togglePlay} style={styles.playPauseButton}>
        <img src={isPlaying ? require("../assets/pause.png") : require("../assets/play.png")} alt="Play/Pause" />
      </button>
      <audio
        ref={audioRef}
        onTimeUpdate={handleProgress}
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  );
}

const styles = {
    audioPlayerContainer: {
      display: "flex",
      alignItems: "center",
      margin: "10px 0",
      flexDirection: "column",  // Stacks play button and progress bar vertically
      width: "100%",  // Make container take up full width
    },
    playPauseButton: {
      margin: "5px",
      padding: "5px 10px",
      cursor: "pointer",
      border: "none",
      backgroundColor: "white",
    },
    progressBarContainer: {
      width: "80%",  // Adjusts the width of the progress bar container to be wider
      height: "6px",  // Make the progress bar a bit thinner
      backgroundColor: "#ccc",
      borderRadius: "3px",
      overflow: "hidden",
      marginTop: "5px",  // Adds space between the button and the progress bar
    },
    progressBar: {
      height: "100%",
      backgroundColor: "#4caf50",
    },
  };
  

export default AudioPlayer;
