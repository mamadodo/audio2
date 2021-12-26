import React, { useContext, useState } from "react";
import { TrackContext } from "../providers/TrackProvider";


export const PlayList = (props) => {
  const { tracks, setTracks } = props;
  const { intervalRef, trackIndex, setTrackIndex, isPlay, setIsPlay } = useContext(TrackContext);

  // delete playlist
  const onClickDeleteEpisode = (e) => {
    const newtracks = [...tracks];
    newtracks.splice(e.currentTarget.id, 1);
    setTracks(newtracks);
  }
  
  const onClickTrack = (e) => {
    // console.log(typeof e.currentTarget.id);
    console.log("☆ trackボタンクリック");
    const newIndex = e.currentTarget.id;

    if (isPlay) {
      // 再生中のトラックを停止
      // console.log("isPlay-true");
      const changeTrack = async () => {
        await new Promise((resolve) => {
          setIsPlay(false); //pause
          setTimeout(() => {
            resolve(console.log('500'));
          }, 500);
          const prevTrack = tracks[trackIndex];
          prevTrack.playing = false;
        });
        const currentTrack = tracks[newIndex];
        currentTrack.playing = true;
        console.log(currentTrack);
        console.log('別トラック');
        console.log('newIndex =' + newIndex);
        setTrackIndex(newIndex);
        console.log(trackIndex);
        setIsPlay(true);
      }
      changeTrack();
      
    } else {
      setTrackIndex(e.currentTarget.id);
      setIsPlay(true);
      const currentTrack = tracks[e.currentTarget.id];
      // console.log('play track ' + currentTrack);
      currentTrack.playing = true;
    }
  };

  return (
    <>
    <ul className="playlists">
    {tracks.map((track, index) => (

      <li className="playlists-item" key={index}>
              <h2 className="content-ttl">
                {track.title}
              </h2>
        <div className="content-inner2 content-info">
          <span className="date">{track.date}</span>
          {/* <span> / </span>
          <span className="time">{musicTime(track.duration)}</span> */}
        </div>
        <div className="content-listItem playBtn" onClick={onClickTrack} id={index}>
          {track.playing === false ? 
              (<span className="material-icons ico-listen">play_circle_outline</span>) :
              (<span>再生中</span>)
          }
        </div>
        <div className="content-listItem playBtn" onClick={onClickDeleteEpisode} id={index}>
            <span className="material-icons ico-listen">delete</span>
            <span className="play-text listen">削除</span>
        </div>
      </li>
      ))}
    </ul>
    </>
  );
}

