import React, {useState} from 'react'
import MovieResults from './MovieResults'
import axios from 'axios'
import { MDBInput } from "mdbreact";


const SearchBody = () => {
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
      <div class="container">
          <form onSubmit={useRequestCallback}>
            <MDBInput
              hint="Search movie title"
              type="text"
              containerClass="active-pink active-pink-2 mt-0 mb-3"
              onChange = {handleMovieInput}
            />
            <button class="btn btn-primary" type="submit"> Search</button>
          </form>
          <MovieResults state={state} />
      </div>
  )
}

export default SearchBody