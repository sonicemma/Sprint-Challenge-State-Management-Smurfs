1. What problem does the context API help solve?

    Context API is great because it lets you pass through components without passing props down manually at every level. I find it easier to use.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Actions are payloads of information. They send data from your application to your store, and they're the only source of information to the store. 

    Reducers help specify how the state changes in response to actions sent to the store for your application. 

    Store holds the state tree, and the only way you can change it is to dispatch an action onto it.

    Stores are the single source of truth because it is not rewritten or reshaped. It lets you retrieve information and not mutate it or anything like that.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Component state is stored locally within a component, and not accessible unless passed as props. Application state is global, and an example is store to hold data. This means that any component can access it.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Redux thunk is middleware that checks incoming actions with a dispatch, and whether it's a type object or type function. If it's a normal action object, it passes it to the root reducer, and if it's a function it executes it.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

    Context is my favorite because it's easier, and it's not overkill. I don't need Redux for this project. I don't think I'd need it unless I had a lot of data. 
