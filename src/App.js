import React, {useState} from 'react'
import axios from 'axios'

const ResultItem = (props) => {
  const result = props.result
  return(
    <div>
      <p> {result.trackName} </p>
    </div>
  )
}

const MovieResults = (props) => {
  const results = props.state.results
  const resultsItemGenerator = () => results.map(result => <ResultItem result={result}/>)
  
  if (results !== null){
    if (Object.keys(results).length === 0) {
      return(
        <div>
          <p>No Results Found</p>
        </div>
      )
    } else{
      return(
        <div>
          {resultsItemGenerator()}
        </div>
      )
    }
  }
  
  return (
    <div> </div>
  )
}

const App = () => {
  const startingData = {
    movie: '',
    results: null
  };
  const [state, setState] = useState(startingData)

  const useRequestCallback = React.useCallback((event) => {
    event.preventDefault()  //prevents the default action of submitting a form.
    axios.get('https://itunes.apple.com/search?',{
      params: {
        'term': state.movie,
        'entity': 'movie'
      }
    })
    .then(function (response) {
      setState({
        movie: state.movie,
        results: response.data.results
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }, [state.movie]);

  const handleMovieInput = (event) => {
    setState({movie: event.target.value, results: state.results})
  }

  return(
    <div>
      <form onSubmit={useRequestCallback}>
        <input
          placeholder="enter something"
          onChange = {handleMovieInput}
        />
        <button type="submit">Search</button>
      </form>
      <MovieResults state={state} />
    </div>
  )
}

export default App;