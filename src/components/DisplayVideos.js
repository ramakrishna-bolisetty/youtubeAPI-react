

import React from 'react';
import {Card} from './Card'
import './DisplayVideos.css';
class DisplayVideos extends React.Component{
    
    constructor(props){
        super(props)
    }

    render(){
         return (<div className = 'display-videos'>
                        {
                            this.props.data !== ''&&
                                this.props.data.items.map((item) => (<Card imgUrl = { item.snippet.thumbnails.medium.url } 
                                            title = { item.snippet.title } 
                                            about = { item.snippet.description }
                                            videoId = { item.id.videoId }
                                            authorName = { item.snippet.channelTitle } 
                                            publishedAt = { item.snippet.publishTime }/>))
                        }
                </div>)
    
    }


}

export {DisplayVideos}




