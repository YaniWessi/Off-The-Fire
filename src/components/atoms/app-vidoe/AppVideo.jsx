import  React from "react";

const AppVideo = ({ source, title }) => {

  return(
    <iframe source={source} title={title} />
  )
}

export default AppVideo;