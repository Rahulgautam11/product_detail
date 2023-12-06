import React from 'react'
import './style.scss'
const Video = ({ src, play, onPlay, gride, onSound, mute, onFullScreen }) => {
    return (
        <div className='video_wrap'>
            <video loop src={src} type="video/mp4" />
            {gride ?
                <div className="controler_wrap_grid">
                    <div className="pause_play_btn" onClick={onPlay}>
                        {play ?
                            <i className="icon_play" /> :
                            <i className="icon_pause" />
                        }
                    </div>
                </div> :
                <div className="controler_wrap">

                    <div className="pause_play_btn" onClick={onPlay}>
                        {play ?
                            <i className="icon_play" /> :
                            <i className="icon_pause" />
                        }
                    </div>
                    <div className="pause_play_btn" onClick={onSound}>
                        {mute ?
                            <i className="icon_mute" /> :
                            <i className="icon_unmute" />
                        }
                    </div>
                    <div className="pause_play_btn" onClick={onFullScreen}>
                        <i className="icon_fullScreen" />
                    </div>

                </div>}
        </div>
    )
}

export default Video