import React, { useState, useContext } from "react";
import { programs } from "./programs";
import { PlayList } from "./PlayList";
import { AudioPlayer } from "./AudioPlayer";
import { TrackContext } from "../providers/TrackProvider";

// import { onClickTracks } from "./PlayList";

export const ProgramList = () => {
  const [tracks, setTracks] = useState([]);
  // console.log(tracks);
  const {trackIndex} = useContext(TrackContext);
  // console.log('trackIndex=' + trackIndex);


  // add playlist
  const onClickAdd = (e) => {
    const newTracks = [...tracks, programs[e.currentTarget.id]];
    setTracks(newTracks);
    // console.log(tracks);
    // console.log(newTracks);
  };

            
  // useEffect(() => {
  //   const dTimer = setTimeout(() => {
  //     console.log(tracks);
  //   }, 500);
  //   return () => clearTimeout(dTimer);
  // },);

  return (
    <>
    <section className="program">
    <h1>ラジレキ番組一覧</h1>
    <ul className="allContents-list">
    {programs.map((program, index) => (

      <li className="contentItem episodeContent" key={program.epiNum}>
        <div className="content-inner1">
          <div className="content-text">
            <div className="content-ttl-wrap">
              <h2 className="content-ttl">
                {program.title}
              </h2>
            </div>
          </div>
        </div>
        <div className="content-listItem addBtn" onClick={onClickAdd} id={index}>
            {/* <span className="material-icons ico-listen">play_circle_outline</span> */}
            <span className="play-text listen">プレイリストに追加</span>
        </div>

      </li>
      ))}
    </ul>
    </section>
    <section className="playlist-sec">
    <h2>プレイリスト</h2>
    {tracks.length > 0 ?
    <PlayList 
      tracks={tracks}
      setTracks={setTracks}
    />
    : <p>プレイリストはまだありません。</p>
    }
    </section>
    {tracks.length > 0 &&
      <AudioPlayer
        tracks={tracks}
        
       />
    }


  </>

  );
}
