# Instructions

Let's do something a little bit more complicated. Instead of displaying a
list of users and their movies, this time you need to display a list of movies.

For each movie in the list, there are two options:

1. If the movie has been favorited, then display a list of all of the users who said that this movie was their favorite.
2. If the movie has *not* been favorited, display some text stating that no one favorited the movie.

As you go about tackling this project, try to make the app *modular* by breaking it into resusable React components.

## Example

```html
<h2>Forrest Gump</h2>
<p>Liked By:</p>
<ul>
  <li>Nicholas Lain</li>
</ul>

<h2>Get Out</h2>
<p>Liked By:</p>
<ul>
  <li>John Doe</li>
  <li>Autumn Green</li>
</ul>

<h2>Autumn Green</h2>
<p>None of the current users liked this movie</p>
```


The algorithm used just to display all datas manually
```js
let usersByMovie = {};

//We manually map 
for (const {favoriteMovieID, userID} of profiles) {

    const movieID = favoriteMovieID

    if (usersByMovie[movieID]) { 
        usersByMovie[movieID].push(userID);
    } else {
        usersByMovie[movieID] = [userID];
    }
}

console.log(usersByMovie)  //{1: Array(2), 2: Array(1), 4: Array(1), 5: Array(2)} breaking it more {1: ["1", "2"], 2: ["5"], 4: ["6"], 5: ["3", "4"]}

Object.keys(movies).map(key => {
    const userIDs = usersByMovie[movies[key].id];

    console.log(movies[key].name)

    return (!userIDs ? (
        console.log('None of the current users liked this movie<')
    ) : (
        console.log(userIDs) //key: ["1" "2"] the key is the refers to a movieID, and the array contains usersID that liked the movie

        userIDs.map(userId => console.log(users[userId].name)) //we just map it with a list of users get the names. So we have a new array with the names of the users rather than index

    ))
})
```

What we printed after breaking our algorithm into components
```html
<div> <!-- ListMovieCard: This is printed in a loop, where a movieInfo, list of users, (list of profiles maped by favouriteID as index for list. Some index might me missing in this new map) -->
    <span> <!-- MovieCard-->
        <h2>Get Out</h2>
        <p>Liked By:</p>
        <ul> <!-- UserList: either it prints a Userist or it prints a paragraph when there is not list of usersWhoLikedMovie to use to map users info to -->
            <li>John Doe</li>
            <li>Autumn Green</li>
        </ul>
    </span>
</div>
```
The main thing here was having a new map where the users(items) were arranged by movie(unique mapKey)

FYI: a JSX that a compopent will render must must have a opening and closing tag

using the map function at ListMovieCard

```js
profiles.map ( (favoriteMovieID, userID) => {
      const movieID = favoriteMovieID
      
      if (this.usersByMovie[movieID]) { //if an index already exist that represent the movie, we push the new userID inside the array we have that represents what user(s) liked the movie eg: with 5 being the newuserID {2: ["4", "5"]}
          this.usersByMovie[movieID].push(userID);
      } else {
          this.usersByMovie[movieID] = [userID]; //the index, dont exit, so we instatiate a new index and add this user as the first person to like the movie  eg: {5: ["4"]}
      }
      return
    })
```