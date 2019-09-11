import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const SavedList = (props) => (
  <div className="saved">

    <h2>Saved:</h2>
  
    {props.list.map((movie, index) => (
      <NavLink to={`/movies/${movie.id}`} activeClassName="saved-active">{movie.title}</NavLink>
    ))}
    <Link to={`/`}>
      <div className="home-button">Home</div>
    </Link>
  </div>
);


export default SavedList;
