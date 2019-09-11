import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    /*Prevent Saving Multiples */
    (!savedList.includes(movie))&& 
    /* Use spread operator for props */
    setSavedList( [...savedList, movie] );
  };
 /* return the App Class, id returned on one line function with props params */
  return (

    <div className="App">
      <Link to='/SavedList'><SavedList list={savedList} /></Link>
      <Route path='/' component={MovieList} />
      <Route path='/movies/:id' render={(props) => <Movie {...props} addToSavedList={addToSavedList} />} />
    </div>
  )
};

export default App;
