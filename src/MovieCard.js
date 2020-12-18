import React from 'react'
import UsersList from './UsersList'

/*class MovieCard extends React.Component {
  //This component will be called in a loop.
  render(){
    
    const { users, usersWhoLikedMovie, movieInfo } = this.props;
    
    return (
      <span key={movieInfo.id}> 
        <h2>{movieInfo.name}</h2>
        <h3>Liked By:</h3>
        <UsersList usersWhoLikedMovie={usersWhoLikedMovie} users={users} />
      </span>
    );
  }
}*/

const MovieCard = props => {
  //This component will be called in a loop.
  const { users, usersWhoLikedMovie, movieInfo } = props;
    
  return (
    <span key={movieInfo.id}> 
      <h2>{movieInfo.name}</h2>
      <h3>Liked By:</h3>
      <UsersList usersWhoLikedMovie={usersWhoLikedMovie} users={users} />
    </span>
  );
}

export default MovieCard
