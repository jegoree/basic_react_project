# First React app

[Github pages demo](https://jegoree.github.io/basic_react_project/)

This app was build as a part of eductional course on react. Following principles were applied here:

- React core syntax & JSX
- Components
- Working with data
- React state & events
- Dynamicly and conditionally generated content

## App functionality

Initialy a form will be rendered. This data gets collected and validated. If it doesn't meet a certain criteria then a pop-up windows will be displayed.

Conditions for criteria:

- All fields must be filled
- Age can be only between 0-99

If data meets the criteria, it'll then be passed onto another component that will add 'id' to the object, parce it to the component with state and clear the form. State is then updated and a new element will be rendered in the list below.

List with data is rendered base on the state of the component.

## Learned from this experience

Having build this project I've realised that working with react seems quite similiar to MVC design pattern, which I've previosly used in PHP. Technically react app can be constructed in the similiar way, where you have 'View' element which is rendered based on the state of the component. Any manipulation can be processed with a component that resembels 'Controller' and state can be updated with a components that are serving as a 'Model' which manipulates the state of the app.

## What coule be done better?

- More reusable UI components can be created.
- Structure app in MVC pattern.
