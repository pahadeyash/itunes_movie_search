import React, {useState} from 'react'
import axios from 'axios'


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

  if (state.results) {
    console.log(state)
    console.log("yippe ki yay motherfucker")
  }

  return(
    <div>
      <form onSubmit={useRequestCallback}>
        <input
          onChange = {handleMovieInput}
        />
        <button type="submit">save</button>
      </form> 
    </div>
  )
}

export default App;