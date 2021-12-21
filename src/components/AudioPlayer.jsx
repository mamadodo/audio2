import React, { useEffect, useRef, useState, useContext  } from "react";
import { TrackContext } from "../providers/TrackProvider";

export const AudioPlayer = (props) => {
  const { tracks } = props;
  
  // const intervalRef = useRef(null);
  
  // tracks
  // const [trackIndex, setTrackIndex] = useState(0);
  const { intervalRef, trackIndex, setTrackIndex, isPlay, setIsPlay } = useContext(TrackContext);
  useEffect(() => {
    setTrackIndex(0);
  }, []);
  console.log(trackIndex);
  
  
  const { title, date, duration, thumbnail, epiNum } = tracks[trackIndex];
  
  const trackSrc = tracks[trackIndex].src;

  const musicRef = useRef(new Audio(trackSrc));

  const musicCurrentTime = musicRef.current.currentTime;
  const musicRate = (Math.floor(musicCurrentTime / tracks[trackIndex].duration * 100));
  console.log(musicRate);

  // const [isPlay, setIsPlay] = useState(false); // playing state
  // console.log('isPlay ' + isPlay);
  const [timePosition, setTimePosition] = useState(0); // time position

  const speed = [1.0, 1.3, 1.5, 2.0, 0.5, 0.7];
  const [speedIndex, setSpeedIndex] = useState(0);
  const [speedNextIndex, setSpeedNextIndex] = useState(1);
  
  const musicTime = (time) => {
    let hour = (Math.floor(time / 60 / 60)).toString().padStart( 2, '0');
    let minutes = (Math.floor((time / 60) % 60)).toString().padStart( 2, '0');
    let sec = (Math.floor(time % 60)).toString().padStart( 2, '0');
    let convertTime;
    convertTime = hour + ':' + minutes + ':' + sec;
    return convertTime;
  }

  const start = () => {
    if (intervalRef.current !== null) {
      return;
    }
    
    intervalRef.current = setInterval(() => {
      if (musicRef.current.ended) {
        console.log('nextTrack実行');
        nextTrack();
      } else {
      setTimePosition(musicRef.current.currentTime);
      console.log(isPlay);
      console.log(musicRef.current.currentTime);
      console.log('再生トラック' + trackIndex);
      }
    }, [1000]);
  };


  useEffect(() => {
    musicRef.current = new Audio(trackSrc);
  }, [trackSrc]);

  useEffect(() => {
    if(isPlay) {
      musicRef.current.play();
      start();
      console.log('start');
    } else {
      musicRef.current.pause();
      console.log('pause');
      if (intervalRef.current === null) {
        return;
      }
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, [isPlay]);

  const timeBar = useRef(null);
  let timeBarWidth;
  let timeBarX;

  // play button
  const onClickTogglePlay = () => {
    if (isPlay) {
      setIsPlay(!isPlay);
      console.log(isPlay);
    } else {
      setIsPlay(!isPlay);
      console.log(isPlay);
    }
  }

  // prev 15s
  const onClickBack = () => {
    console.log("playback");
    musicRef.current.currentTime -= 15;
  }
  
  // next 30s
  const onClickSkip = () => {
    console.log("playskip");
    musicRef.current.currentTime += 30;
  }


  // timebar click
  const onClickTime = (e) => {
    timeBarWidth = e.target.getBoundingClientRect().width;
    timeBarX = e.nativeEvent.offsetX;
    console.log(e.target.getBoundingClientRect().width);
    console.log(e.nativeEvent.offsetX);
    musicRef.current.currentTime = (timeBarX / timeBarWidth * tracks[trackIndex].duration);
  }

  // speed change
  const onClickChangeSpeed = () => {
    if (speedIndex === speed.length - 1) {
      setSpeedIndex(0);
      setSpeedNextIndex(speedNextIndex + 1);
    } else {
      setSpeedIndex(speedIndex + 1);
      if (speedNextIndex === speed.length - 1) {
        setSpeedNextIndex(0);
      } else {
        setSpeedNextIndex(speedNextIndex + 1);
      }
    }
    musicRef.current.playbackRate = speed[speedNextIndex];
    console.log(speedIndex);
    console.log(speedNextIndex + 'next');
  }

// next Track
  const nextTrack = () => {
    if(isPlay) {
      setIsPlay(false);
      console.log(isPlay);
      if (trackIndex < tracks.length - 1) {
        console.log( '再生トラック' + trackIndex);
        setTrackIndex(Number(trackIndex) + 1); // 数値変換（なぜ？）
      } else {
        setTrackIndex(0);
        console.log("最初のトラックに戻る");
      }
      setIsPlay(true);
      console.log("次のトラック" + trackIndex);
      console.log(isPlay);
    }
  };

  return (
    <>
    <div id="app" className="app">
    <div id="audio_thumb" onClick={onClickTogglePlay}>
      <img className="ep_img" src={thumbnail} width="160" height="160" alt={epiNum} />

      {isPlay? 
        (
          <i id="pause_ico" className="material-icons">pause_circle_outline</i>
        ) : (
          <i id="play_ico" className="material-icons">play_circle_outline</i>
        )
      }

    </div>
    <div id="audio_desc">
      <div className="ep-date">{date}</div>
      <div className="ep-title">
        {title}<span className="sp-nodisp"></span>
      </div>
      <div id="timebar">
        <div id="timebar-bg" onClick={onClickTime} ref={timeBar}>
          <div id="timebar-past" style={{width: musicRate + '%'}}>
            <div id="timebar-num">{musicRate + '%'}</div>
          </div>
        </div>
      </div>
      <div>
        <span id="time_disp">
        {musicTime(timePosition)}/
        {musicTime(duration)}
        </span>
        <p className="time_control_area">
          <span>
            <img 
              id="playback" 
              src="https://propo.fm/image/rewind.png" 
              width="23" 
              alt="rewind" 
              onClick={onClickBack}
            />
          </span>
          <span>
            <img 
              id="skip" 
              src="https://propo.fm/image/skip.png" 
              width="23" 
              alt="skip"
              onClick={onClickSkip}
            />
          </span>
          <span id="speed_ctrl" onClick={onClickChangeSpeed}>{speed[speedIndex].toFixed(1)}x</span>
        </p>
      </div>
    </div>
    </div>


  </>

  );
}
