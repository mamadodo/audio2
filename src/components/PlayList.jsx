import React, { useContext } from "react";
import { TrackContext } from "../providers/TrackProvider";


export const PlayList = (props) => {
  const { tracks, setTracks } = props;
  const { intervalRef, trackIndex, setTrackIndex, isPlay, setIsPlay } = useContext(TrackContext);
  console.log(tracks);

  // delete playlist
  const onClickDeleteEpisode = (e) => {
    // console.log(index);
    console.log(e.currentTarget.id);
    const newtracks = [...tracks];
    newtracks.splice(e.currentTarget.id, 1);
    setTracks(newtracks);
  }
  
  const onClickTrack = (e) => {
    console.log("トラックbuttonクリック");
    if (isPlay) {
      console.log("isPlay-true");
      setIsPlay(false); //pause
      
        // console.log('別トラック');
        // const newTrackIndex = e.currentTarget.id
        // setTrackIndex(newTrackIndex);
        // changeTrack();
        // // console.log('new TrackIndex = ' + trackIndex);
        // setIsPlay(true);        
    
    } else {
      console.log("isPlay-false");
      console.log('currentTarget-id=' + e.currentTarget.id);
      setTrackIndex(e.currentTarget.id);
      setIsPlay(true);
    }
  };

  const changeTrack = () => {
    console.log('new trackIndex = ' + trackIndex);
    setIsPlay(true);
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
          {isPlay? 
              (<span>再生中</span>) :
              (<span className="material-icons ico-listen">play_circle_outline</span>)
          }
          {/* {isPlay? 
            (this === trackIndex?
              (<span>再生中</span>) :
              (<span className="material-icons ico-listen">play_circle_outline</span>)
          ) : (<span className="material-icons ico-listen">play_circle_outline</span>)} */}
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

