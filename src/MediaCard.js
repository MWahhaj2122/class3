import React from "react"
function MediaCard(props) {
    return (
        <div>
          <h2>{props.title}</h2>
          <p>{props.body}</p>
          <img src ={props.ImageURL} alt = {props.ImageAlt}></img>  
          {props.divElement}
        </div>
    )
}
export default MediaCard