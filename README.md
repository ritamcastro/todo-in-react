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


### Initial Render for the ToDo app

The first test for the application is a "simple" render of our page.

This test introduced the concepts of the [ARIA Roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles) and why they matter.

In particular, this test focused on having the [landmark roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles) in application as early as possible in the development phase. 


🔜 🚧 

### Displays a complete ToDo with a different style

### Adds new ToDos to the list

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
