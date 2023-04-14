import React , { useState } from 'react';
import './gallery.css'

const Gallery = () => { 

  const [ imges, setImges ] = useState([{id:1 , name:"img1" } , {id:2 , name:"img2" } , {id:3 , name:"img3" } ,{id:4 , name:"img4" } , {id:5 , name:"img5" } ,{id:6 , name:"img6" }])
  return(
    <div className="img-container">
    {
      imges.map((img) => {
        return(
          <div className="img-card" key={img.id}>
            <img />
          </div>
        )
      })
    }
    </div>
  )
}

export default Gallery;