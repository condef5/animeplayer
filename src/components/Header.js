import React, { Component } from 'react'
import './Header.css'
import { addVideo } from './database'

class Input extends Component {

    _onKeyPress(e) {
        if (e.keyCode === 13) {
            this.getDataYoutube(this.getIdYoutube(this.url.value))
        }
    }
    getIdYoutube(url) {
        url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
        return (url[2] !== undefined) ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
    }
    
    getTimeYoutube(time) {
        let time_extractor = /([0-9]*)M([0-9]*)S$/;
        let extracted = time_extractor.exec(time);
        let minutes = parseInt(extracted[1], 10); 
        let seconds = parseInt(extracted[2], 10);
        seconds = seconds > 10 ? seconds : '0' + seconds
        return `${minutes}m:${seconds}s`
    }
    
    getDataYoutube(url) {
        let urlApi = `https://www.googleapis.com/youtube/v3/videos?id=${url}&key=AIzaSyClu0blTka0lH7eNUt_jkqXX2dudAP8xMw&part=snippet,contentDetails`
        fetch(urlApi)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                let videoInfo = {
                    'url': this.url.value,
                    'title': data.items[0].snippet.title,
                    'duration': this.getTimeYoutube(data.items[0].contentDetails.duration),
                    'img': data.items[0].snippet.thumbnails.default.url
                }
                addVideo(videoInfo)
                this.url.value = ''
            })
    }
    render() {
        return (
            <div className="group" >
                <input
                    type="text"
                    placeholder="Ingrese una url"
                    onKeyDown={this._onKeyPress.bind(this)}
                    ref={(url) => this.url = url}
                />
            </div>
        )
    }
}

function Header() {
    return (
        <header>
            <Input />
        </header>
    )
}
export default Header;
