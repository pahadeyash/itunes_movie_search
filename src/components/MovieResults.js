import React from 'react'
import ResultItem from './ResultItem'

const MovieResults = (props) => {
    const results = props.state.results
    const resultsItemGenerator = () => results.map( (result, i) => <ResultItem result={result} key={i}/>)

    if (results !== null){
        if (Object.keys(results).length === 0) {
            return(
                <div>
                <h2>No Results Found</h2>
                </div>
            )
        } else{
            return(
                <div className="container">
                    <br></br>
                    {resultsItemGenerator()}
                </div>
            )
        }
    }

    return (
        <div> </div>
    )
}

export default MovieResults