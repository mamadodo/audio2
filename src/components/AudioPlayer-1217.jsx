import React, { useEffect, useRef, useState  } from "react";

import episode1 from "../20210806_102244_222_radiohistory_ep0544.mp3";
import episode2 from "../20210430_113621_533_radiohistory_ep0518.mp3";
import episode3 from "../20210424_105237_279_radiohistory_ep0517.mp3";
import episode4 from "../20210424_105226_180_radiohistory_ep0516.mp3";
import episodeImg from "../radireki_thumbnail.jpeg";

export const tracks = [
  {
    src: episode1,
    date: "2021.08.10",
    title: "0544_イスラム教の六信五行から考える日本人にとっての「聖典」と「行動規範」",
    thumbnail: episodeImg,
    epiNum: "epi544",
    duration: 1247,
  },
  {
    src: episode2,
    date: "2021.05.11",
    title: "0518_中国の第2三国志。智勇兼備・音容兼美のイケメン皇族蘭陵王は不敗の名将",
    thumbnail: episodeImg,
    epiNum: "epi518",
    duration: 911,
  },
  {
    src: episode3,
    date: "2021.05.07",
    title: "0517_「多数決が民主主義ではない」と説いたルソーの社会契約論",
    thumbnail: episodeImg,
    epiNum: "epi517",
    duration: 952,
  },
  {
    src: episode4,
    date: "2021.05.04",
    title: "0516_「見えざる手」に隠されたアダム・スミスの経済へのアツい思い",
    thumbnail: episodeImg,
    epiNum: "epi516",
    duration: 1115,
  }
];

export const AudioPlayer = () => {
  const intervalRef = useRef(null);

  const [trackIndex, setTrackIndex] = useState(0);
  const { title, date, duration, thumbnail, epiNum } = tracks[trackIndex];
  // const trackTitle = tracks[trackIndex].title;
  // const trackDate = tracks[trackIndex].date;
  // const trackDuration = tracks[trackIndex].duration;
  // const trackThumbnail = tracks[trackIndex].thumbnail;
  // const trackEpiNo = tracks[trackIndex].epiNum;

  const trackSrc = tracks[trackIndex].src;

  // const musicRef = useRef(null);
  const musicRef = useRef(new Audio(trackSrc));

  const musicCurrentTime = musicRef.current.currentTime;
  const musicRate = (Math.floor(musicCurrentTime / tracks[trackIndex].duration * 100));
  console.log(musicRate);

  const [isPlay, setIsPlay] = useState(false); // playing state
  console.log('isPlay ' + isPlay);
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
    } else {
      musicRef.current.pause();
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


  //episode click
  const onClickEpisode = (e) => {
    if (isPlay) {
      setIsPlay(false);
      musicRef.current.pause(); //audio pause
      if (intervalRef.current === null) {
        return;
      }
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      
      setTrackIndex(e.currentTarget.id);
      // musicRef.current.play(); //audio play
      // start();
      onClickTogglePlay();

    } else {
      setTrackIndex(e.currentTarget.id);
    }
  };

  // next Track
  const nextTrack = () => {
    if(isPlay) {
      setIsPlay(false);
      console.log(isPlay);
      if (trackIndex < tracks.length - 1) {
        console.log( '再生トラック' + trackIndex);
        setTrackIndex(trackIndex + 1);
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

    <ul className="allContents-list">
    {tracks.map((track, index) => (

    <li className="contentItem episodeContent" key={track.epiNum} onClick={onClickEpisode} id={index}>
							<div className="content-inner1">
								<div className="content-text">
									<div className="content-ttl-wrap">
										<h2 className="content-ttl">
											{track.title}
										</h2>
									</div>
								</div>
								<div className="content-linkItem">
									<span className="material-icons ico-listen">play_circle_outline</span>
									<span className="play-text listen">聴く</span>
								</div>

							</div>
							<div className="content-inner2 content-info">
								<span className="date">{track.date}</span>
								<span> / </span>
								<span className="time">{musicTime(track.duration)}</span>
							</div>
      </li>
    ))}
    </ul>

  </>

  );
}