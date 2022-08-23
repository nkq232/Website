import React, {useState} from "react";
import song from './den_loinho.mp3'

const Music = () => {
    const [songs, setSongs] = useState({
        audio: new Audio(song),
        isPlaying: false,
    })
    const playPause = () => {
        let isPlay = songs.isPlaying;
        if (isPlay) {
            songs.audio.pause();
        } else {
            songs.audio.play();
        }
        setSongs({isPlaying: !isPlay});
    }
    return(
        <div>
            {/* Show state of song on website */}
            <p>
                {songs.isPlaying ?
                    "Song is Playing" :
                    "Song is Paused"}
            </p>

            {/* Button to call our main function */}
            <button onClick={playPause}>
                Play | Pause
            </button>
        </div>
    )
}
export default Music;
