## Available Scripts

In the project directory, you first run:

### `npm install`

This installs all the required packages. You then run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Process To Make Request

Perform a get request to the itunes serach API, with the appropraite parameters.
```
get('https://itunes.apple.com/search?',{
      params: {
      'term': state.movie,
      'entity': 'movie'
      }
  })
```

Then take the ouput and set component state 

```
setState({
          movie: state.movie,
          results: response.data.results
          })
```

Once state is set, then the movie state can be unpacked and then used to create 
child components using the map function. The child components display the results

```
resultsItemGenerator = () => movies.map( (movie, i) => <ResultItem result={movie} key={i}/>)
```

### Improvements

Given more time a lot of neat things could be implemented. 

* Cleaner UI: The current UI is pretty simple. I feel like I could make something better designed with more time  
* Saving Watched Movies: I could implement a backend and database that keeps track of the movies that 
my coworkers watched.
* Users: This is an extension on the previous point. Each coworker could have a unique profile with a login so that
their personal watch history is available to them.
* Movie Recommendar: If the history of the movies watched are stored for each coworker (or maybe even the whole company), I could leverage that information to recommend movies based off of previosly watched movies.

### Time Taken

This was an interesting challenge and it took me approximately 7-8 hours to complete. 

### Other Information

In the case of a movie not havingt a short description, I decided to pass the long description instead.
