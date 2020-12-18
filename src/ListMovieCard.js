import React, { Component } from 'react'
import MovieCard from './MovieCard'

class ListMovieCard extends Component {
  
  constructor(props){
    super(props);
    
    const { users, profiles, movies } = this.props;
    
    this.usersByMovie = {}; //stores new map where the users(items) were arranged by movie(unique mapKey). The current profiles data is not in a map form. The users and movies is in a map form ;)
    this.users = users;
    this.profiles = profiles;
    this.movies = movies;
    
    /*
    We can manually map the users by the movieID they liked. Calling the built-in map function will still do what we want but arrow functions expects a return value.
    So lets not abuse the map function. Use map function when you dont have areturn value and you want to print a new array or compare the keys of the listArray you use to map against another list with its keys
    Remember the good thing about using map is adding data with a key along it. eg { key: [1, 2]} or { 2: {name: "me", pass: 123}} the key can be anything you want.
    
    So we return a have a new list of profiles. The indexes of this list will represent a movieID.
    if a moviID as index dont exist, it will be because in the profiles, none of the user has the movie as favourite
    
    From the profiles
    
    */
    for (const {favoriteMovieID, userID} of profiles) {
      const movieID = favoriteMovieID

      if (this.usersByMovie[movieID]) { //if an index already exist that represent the movie, we push the new userID inside the array we have that represents what user(s) liked the movie eg: with 5 being the newuserID {2: ["4", "5"]}
          this.usersByMovie[movieID].push(userID);
      } else {
          this.usersByMovie[movieID] = [userID]; //the index, dont exit, so we instatiate a new index and add this user as the first person to like the movie  eg: {5: ["4"]}
      }
    }

  }
  
  render(){
    
    const movieCards = Object.keys(this.movies).map(id => (
        //we print the movieCards in a loop
      <MovieCard
        key={id}
        users={this.users}
        usersWhoLikedMovie={this.usersByMovie[id]} //eg ["1", "2"]
        movieInfo={this.movies[id]}
      />
    ));
    return <div>{movieCards}</div>
  }
}

export default ListMovieCard