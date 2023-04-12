import React, { useState } from 'react';
import './artist.css';

const Artist = () => {

  const [artist , setArtist ] = useState([{ id: 1, name:"TIME"}, { id: 2, name:"GMoney"},{ id: 3, name:"ACE"}, { id: 4, name:"shells"}])

  return(
    <div className="act-container">
      {
        artist.map((talent) => {
          return(
            <div className="act-card" key={talent.id}>
              <h2>{talent.name}</h2>
            </div>
          )
        })
      }
   </div>
  )
}

export default Artist;