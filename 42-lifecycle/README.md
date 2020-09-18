# Bey-Slay


## Questions:

- Optimistic vs Pessimistic
- setState during requests
- PATCH 






To Start: 
1. install JSON server (if you haven't already)
2. run `json-server -w db.json` from your top-level directory
3. This will boot up a JSON API on localhost: 4000

You are given an api that responds with an array of objects that look like this:
  > `{ "id": 1, "name": "All Day Slay", "img": "https://media.giphy.com/media/3o6gb7cN7bwDxAbnS8/giphy.gif", "favorite": false }`

# Deliverables:

- Render a list of all Beyonce images

- When a User clicks on a Beyonce image in `BeyContainer` it should change the `favorite` key of that object to `true`, which should then add that Beyonce to the FavoritesContainer. 

- When a User clicks on a Beyonce image in the `Favorites` container, it should change the `favorite` key of that object to `false` via a `PATCH` request, which should then remove it from the FavoritesContainer and send an alert saying "I got a hot sauce in my bag, swag"

- Add a Create form that allows a User to create a new gif. The new gif should persist if the page is refreshed.

# Bonus

- Display the gif's `num_of_clicks` next to it's image
- Each time an image is clicked, the `num_of_clicks` should increase by 1
- A `PATCH` request should be sent so that the `num_of_clicks` persist when the page refreshes

# Hint

- The gif below will give you an idea of what the app should look like
- Look up the window.alert() function

![beyonce gif](bey-slay.gif)


