# DUMB COMPONENTS

## Introduction
When you’re working with React.js or React Native, you’ll notice the power and versatality that comes with components. Components are the building blocks of a React application. Individual components are created and then nested together to build up an app. These components save us time by decomposing the user interface into reusable code, and this, makes our code easier to read and understand. 
There are two different types of Components. 
1. Smart Components
2. Dumb Components

## What makes components smart or dumb?
Smart component are app-level components that perform functions and handle data, while dumb components are primarily concerned with the user interface. Let's dive deep into what this actually means.

### Dumb Components
Dumb components, or ‘presentational’ components can be defined as a stateless component which only presents something to the DOM. It displays exactly what it is provided with. No changes, no modifications 😌. 

These stateless components are much more efficient than a stateful one, because they don't require as many computer resources to render (memory, CPU, and GPU in terms of graphic-intensive apps).

Some common examples for dumb components are: Header and footer. The component can be written in one place and used several times throughout the app, just render, and each instance of that component will look the same. If you want to change how it looks, you only have to change it in one place. This change is then reflected in all the places this component is used.


### Smart Components
Smart components, or 'container' components on the other hand are stateful components. They keep track of the state and all the changes. As a best design practice, the smart components are separated from the dumb components and each handles their own side of things. The container components do the heavy lifting and pass the data down to the presentational components as props.
These components maintain state and also often contain callback functions to update the state. These states can then be passed down to their child components as props.
The app component is an example of a smart component. The app component is responsible for maintaining several pieces of state for the entire app. It also passes down additional functions to its child components so that the state can be updated when a user interacts with the site.

### More examples
1. A TextInput Component: Dumb
2. A Dropdown Component: Smart

A text input component expects props such as value, labelText and an onChange function. This input component can be used in different places by just modifying the props that are being passed. All of the props are 'Contextually Relevant' i.e., they are relevant to the context in which they're placed. This component is dumb and only renders what is being passed to it, without any changes. 

Now moving to a dropdown component. A dropdown component can expect props such as labelText, options (options to choose from), selected (the selected option), onChange, expanded (boolean to keep track of whether the dropdown is expanded or collapsed). All the props except for expanded are contextually relevant and can be passed from the parent to this child component. But the expanded prop is contextually irrelevant. Our Dropdown will always need to be able to expand or collapse the list to allow the user to change its value. If this is passed down from the parent, it would make the code very difficult to manage and every single parent component that uses this dropdown has to copy the same code. This is maintained as a state in the component. And this is what makes this component smart.


## Benefits of having smart and dumb components
1. Separation of concerns. The app is easier to manage and modify.
2. Better reusability. You can use the same presentational component with completely different sources that can be used in multiple places.
3. Presentational components allows the designer tweak all their variations without touching the app’s logic. This allows us to extract “layout components” such as Sidebar, Page, Header, Footer and use props to determine what to display instead of duplicating the same markup and layout in several container components.