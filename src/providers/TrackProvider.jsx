import React, { createContext, useState, useRef } from "react";

export const TrackContext = createContext({});

export const TrackProvider = (props) => {
  const { children } = props;

  const intervalRef = useRef(null);
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlay, setIsPlay] = useState(false); // playing state

  return (
    <TrackContext.Provider
      value={{ 
        intervalRef,
        trackIndex, 
        setTrackIndex,
        isPlay,
        setIsPlay }}>
      {children}
    </TrackContext.Provider>
  );
};
