import React from 'react'
import Video from './Video'
import style from './VideoList.css'
import { videoListRef } from './database'
import ReactPlayer from 'react-player'

function VideoOne({ url }) {
    return (
        <div className={style.VideoOne} >
            <Video url={url} />
        </div>
    )
}
class VideoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            url: 'https://vimeo.com/channels/181019/21245292'
        }



    }
    componentDidMount = () => {
        videoListRef.on('value', snapshot => {
            let listTemp = snapshot.val()
            let hunterList = [], halo = [];
            hunterList = Object.keys(listTemp).map(k => {
                halo.push(listTemp[k])
            });
            console.log()
            this.setState({ list: halo })
        })
        fetch('https://www.googleapis.com/youtube/v3/videos?id=qQorV6J4Dz4&key=AIzaSyBSSUsN1Mnf1eFCF7W9tmnqPJ7HIFGQxCg%20&part=snippet,contentDetails,statistics,status')
            .then((response) => {
                console.log(response)
            }).
            then((recurso) => { console.log(recurso) })
    }
    _onClick = (url, event) => {
        event.preventDefault();
        this.setState({ url })
        console.log(url)
    }

    render() {
        if (this.state.list.length > 0) {
            return (
                <div className={style.VideoView}>
                    <VideoOne url={this.state.url} />
                    <div className={style.VideoList}>
                        {this.state.list.map((video, index) => {
                            return (
                                <VideoListItem video={video} key={index} index={index + 1} onClick={this._onClick} />
                            );
                        })}
                    </div>

                </div>
            )

        } else {
            return <p className={style.VideoView}>Cargando ...</p>
        }
    }
}
function VideoListItem({ index, video, onClick }) {
    var index = index < 10 ? `0${index}.` : `${index}.`
    return (
        <div className={style.VideoListItem} onClick={onClick.bind(null, video.url)} > 
            <h4>{index} {video.title} - {video.duration}</h4>
        </div>
    )
}


export default VideoList;