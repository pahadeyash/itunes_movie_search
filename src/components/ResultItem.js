import React from 'react'

const ResultItem = (props) => {
    const result = props.result
    var description = ''

    if (result.shortDescription == null){
      description = result.longDescription
    } else {
      description = result.shortDescription
    }

    return(
      <div className="container">
        <img src={result.artworkUrl100} alt="Movie Art Work"></img>
        <h5> {result.trackName} </h5>
        <h6>${result.trackPrice}</h6>
        <p>{description}</p>
      </div>
    )
  }

export default ResultItem