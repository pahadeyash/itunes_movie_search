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
  const results = () => props.state.results.map(result => <ResultItem result={result}/>)
  if (props.state.results !== null) {
    return(
      <div>
        <p> Searching for movies under {props.state.movie} ... </p>
        {results()}
      </div>
    )
  }
  return(
    <div>
      <p> Enter Search</p>
    </div>
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
          onChange = {handleMovieInput}
        />
        <button type="submit">save</button>
      </form>
      <MovieResults state={state} />
    </div>
  )
}

export default App;