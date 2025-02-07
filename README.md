# To-Do in React

## Purpose and Scope

This repository showcases the incremental development of a _simple_ ToDO app in React.

It uses [Test Driven Development](https://martinfowler.com/bliki/TestDrivenDevelopment.html) (TDD) as a guide and follows the base principle of the [Testing Library](https://testing-library.com/):

> The more your tests resemble the way your software is used, the more confidence they can give you.

Along the way there are several topics being covered:

- core React concepts
- semantic html
- ?

There is little to no styling applied to the app and it is intentional.
The focus is on the core concepts of the app and not on CSS magic shenanigans.

## Setup

The [frontend](/frontend/) is developed using React (and typescript) and bundled [Vite](https://vite.dev/) with and the [end to end tests](/e2e/) have been created using [Playwright](https://playwright.dev/). The code is lint using [Biome](https://biomejs.dev/).

The IDE used in the development was [VS Code](https://code.visualstudio.com/) and its [settings](./vscode/) are available in the repository.

### Running the project

1. Run the frontend on your local machine

```bash
cd frontend 
npm i
npm run dev
```

1. Run the end-to-end against your frontend dev

```bash
cd e2e
npm i
npm run test
```

## Test driven development as our guide

### Some considerations about `App.tsx`

When Vite scafolds the React app it creates a set of files, in particular `App.tsx` that contains a single React components that is the backbone of our application.

This component is declared using a traditional funcion declaration rather than the arrow function expression. The key differences between using one or the other are:

- [Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)

    TLDR: hoising is the possibility of a function or variable to be called before it is defined in the code. Function declarations are hoisted, arrow functions are not.

- [`this`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) context

    TLDR: arrow functions are good at preserving context and keeping it contained and no not have a `this` binding; function declaration have their own `this` scope. The main remark with React is that when using [class components](https://react.dev/reference/react/Component) the `this` could easily get us in trouble.

- Consistency with Hooks

    TLDR: [React hooks](https://react.dev/reference/react/hooks) have been coded using a functional paradigm, so writing React components with arrow functions ensures consistency.

### Initial Render for the ToDo app

The first test for the application is a "simple" render of our page.

This test introduced the concepts of the [ARIA Roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles) and why they matter.

In particular, this test focused on having the [landmark roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles) in application as early as possible in the development phase.

### Displays a complete ToDo with a different style

This test is an example of the few occasions in which styling can - and should be tested.

As per the test definition, when the ToDo is completed the text becomes striked-through. This can be acheived by using _inline styles_ or applying different _CSS classes_ to the `<input type="text" />` according to the value of the `checkbox`. This means that user's interaction with the `checkbox` triggers a change on what they are seeing on their screen. In React this is called a [re-render](https://react.dev/reference/react/hooks). In order to trigger a re-render it is necessary to keep track of the value of the checkbox. In React this is done with a state variable and by using the [`useState`](https://react.dev/reference/react/useState) hook.

#### Hooks

Hooks were introduced in [React v16.8](https://legacy.reactjs.org/blog/2019/02/06/react-v16.8.0.html) and they solve several problems:

- Extract common logic (like form handling or data fetching)
- Maintain state and related functions
- Use this same logic in multiple components without duplicating code

Kent C. Dodds has a great [tutorial on creating our own useState hook](https://www.epicreact.dev/tutorials/build-react-hooks/introduction-to-usestate).

### Adds new ToDos to the list

Adding a new ToDo item is a user interaction that should be ensured by the [button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) element by having an event handler associated with your `button`. React and JSX ease this process with its `onClick` prop that invokes the necessary logic.



There is a specific ARIA role that is used to identify a list of items - the [list role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/list_role). Each item on the list takes the [listitem role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/listitem_role).

Our application contains a list of todo items, i.e., the state of our application is an array of ToDo Items. Each item is defined by its status and its name and the applicaiton needs to keep track of these properties.



🔜 🚧 

### Sorts the ToDos according to their status

### Deletes a ToDo item from the list 

### Keeps the todos when reloading the page

### Sees more information for a ToDo item on a new page

### Sees an error page for an unexisting ToDo and is able to get back to the home page

### Sees a generic error page for an unexisting route in the ToDo app

🚧 ⬅️


## Open points

🔜 Update to React 19

🔜 Add a backend service to deploy the app "for real"

🔜 Explore the possibility of Unit Tests using the [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

---
Made with 💜 

©️ Rita Castro
