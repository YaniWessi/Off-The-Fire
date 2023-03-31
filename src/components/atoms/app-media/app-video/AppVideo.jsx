import  React from "react";
import '../../atomStyles.css'


const AppVideo = ({ src, title }) => {

  return(
    <iframe className="app-video" src={src} title={title} />
  )
}

export default AppVideo;