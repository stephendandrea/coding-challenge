# Facebook React Commit Graph

##### Summary

This is a coding challenge solved by [Julian Piñeiro](https://github.com/julian-pineiro). It implements a commit graph for the [Facebook/React](https://github.com/facebook/react) repository using Github's API.
This project is hosted at [https://commit-graph-challenge.vercel.app](https://commit-graph-challenge.vercel.app).

## Project setup

##### Prerequisites

- Must have [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) installed on your system.
- Git CLI

#### Instructions

1. Open your terminal, navigate to the desired directory and clone the repository using the GitHub CLI:
   ```
   git clone https://github.com/stephendandrea/coding-challenge
   ```
2. Navigate to the project directory:
   ```
   cd coding-challenge
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm run dev
   ```
5. Open your web browser and navigate to `http://localhost:5173/` to see the running application.

## Features

The Facebook React Commit Graph project offers the following features:

Users can view the commit graph, where commits are represented as squares on a grid.
Commits are color-coded based on the intensity of commits on a particular day. The graph is divided into four intensity levels, each represented by a different gradient of green. This is achieved by splitting the amount of commits in the most intensive day into four ranges, and using those numbers to grade intensity.

Hovering over a commit square displays the number of commits and the specific date when they were done.

There is a loader that is briefly presented while the data is being fetched from the API.

Errors are handled and elegantly presented to the user in case of server side errors.

## Technologies and implementation

- [Styled-components](https://styled-components.com): This library helps reduce inline styling and keep the code cleaner.
- [Shadcn-ui](https://ui.shadcn.com): UI Library used to import the popover. Requires [Tailwind css](https://tailwindcss.com) to work.
- Custom hooks: Created a _useCommitHistory_ hook to handle data fetching outside of the CommitGraph component. This implements the [Container/Presentational Pattern](https://www.patterns.dev/react/presentational-container-pattern) to separate handling application logic with the view and add _separation of concerns_ (SoC). This goes hand in hand with the "S" in SOLID principles: _Single Responsibility Principle_.
- Code structure: Although this specific project is very simple,a clean and organized project structure is crucial if scalability is required.
- Data fetching: Fetch API was good enough for the requirements of this project. A common alternative would Axios that can be used to achieve the same functionality.

#### Possible improvements
- [Proxy pattern](https://www.patterns.dev/vanilla/proxy-pattern/): There is an opportunity to make use of this pattern in the fetch data hook, by calculating the color of each commit square and appending it to the API response objects. This could abstract the parent component from doing this calculation, thus improving SoC.
