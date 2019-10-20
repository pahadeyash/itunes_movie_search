import React from 'react'

const ResultItem = (props) => {
    const result = props.result
    console.log(result)
    return(
      <div class="container">
        <img src={result.artworkUrl100}></img>
        <h5> {result.trackName} </h5>
        <h6>${result.collectionPrice}</h6>
        <p>{result.shortDescription}</p>
      </div>
    )
  }

export default ResultItem