
import './Card.css'
import { videoURL } from './config'
function Card(props) {
    return (
        <div className = 'card'>
            <img src = { props.imgUrl } style=  {{ width: '100%', height: '200px' }}></img>
            <a href = { videoURL+props.videoId } className = 'description' style = {{ color: 'rgb(0, 230, 230)', marginTop: '0px', fontSize: '15px' }}>{props.title}</a>
            <h5>{ props.about }</h5>
            <h4 style = {{ color: 'red' }}>{ props.authorName }</h4>
            <h5>{ props.publishedAt }</h5>
        </div>
    )

}

export { Card }