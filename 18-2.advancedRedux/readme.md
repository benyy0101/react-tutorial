# 18.Introduction to Redux

## what is Redux?

It is designed to be a state management system across multiple platforms.
There are three types of states in React, although we have not been distinguished so far.

1. **Local State**
    
    It can only be used within a component as the name indicates. <br>It should be managed with useState and useReducer<br>
2. **Cross-component State**

    state that is accessed from multiple components.
    <br> We have managed those states by passing props from one comp to another.
    <br>This was the point where the Reacts went messy...

3. **App-wide State**
    
    We have not been through this kind of state: Authentication.
    <br> It is also managed by passing props to components

Redux is therefore to minimize the process of passing states by props across the apps or components.
However, it brings us to a question: Do we already have such system called Context? What makes Redux differentiable to Context?

## Context vs. Redux

Context has several downside compared to Redux.
<br> It goes viral when it comes to a high level production where it has hundreds of cross-wide states.
This issue brings us to another problem: performance. The more states the context should manage across the app, the more time will be spent.

## How does Redux work?

Contrast to other state handlers, there is only one central data storage in Redux. 
<br> Basically, a component retrieves an authentication to the central storage by subscribing it.
Once a component successfully gets subscription from the storage, it is able to read and manipulate the states freely. but with some procedures.
The data may be manipulated(mutated) via a function called Reducer Function, which is a **distinct** function to what we have learned previously.
Although they are different concepts from each other, the process that handles data is similar: trigger, action, and reducer.
<br> Data always changes from a certain action from user by clicking, hovering, or typing something etc. Those actions **trigger** components to change data (Dispatching), and it invokes the reducer function to perform (Forwarding).





    