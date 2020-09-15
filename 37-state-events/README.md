# react-stateevents-practice1


# Questions

- Debugging
- e.persist()
  - persist the event 
    - as needed 
- `.bind()`*****
  - `this`
  - arrow functions => no need for `.bind(this)`
- When to invoke functions vs reference
  - invoke if we want to immediately act on the function
  - reference: if we want the function to be called later 
- super()
  - inheritance/extends
  - looks for a parent function of the same name 
  - pulls in all of the parent function's code 
- Event Pooling
- Function vs Class 
  



# Deliverables

You have a fake api response that is being exported from `api.js`. The response is an array of multiple `dog` objects that look like this:

  > `{ "id": 1, "name": "Happy Slay", "img": "https://www.sciencenews.org/sites/default/files/2018/08/main/articles/082918_lh_crispr-beagles_feat_REV.jpg", "breed": "Beagle"}`

- You have a regular component called DogCard, a container component called DogsList, an App component
- On the DOM your application should show a list of dog images and a button for each image with an innerText that says "Bark"
- When a User clicks on the "Bark" button it should render an `<h2>` to the screen with an innerText that says "Bark"
- When a User clicks on the button a second time the "Ruff" should be removed from the DOM

Below you will find a gif of the completed app

# What are we practicing?

- Making decisions about when we need state and which component should hold state
- mapping through an array to render a list of components
- setState
- Event Handling in React

![dog gif](state-pairing-gif.gif)
