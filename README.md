# Facebook React Commit Graph
##### Summary
This is a coding challenge solved by [Julian Piñeiro](https://github.com/julian-pineiro) for [Concourse](https://concourse.co). It implements a commit graph for the [Facebook/React](https://github.com/facebook/react) repository using Github's API.

## Running the project
##### Prerequisites
- Must have [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) installed on your system.
- Git CLI (recommended)

#### Instructions
##### Using Git CLI
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

##### Without Git CLI
1. Download the project folder (Code > Download ZIP) and place it where you desire to save it and unzip it.
2. Navigate to your downloaded folder using your desired terminal (i.e `cd /your/folder/coding-challenge`)
3. Follow steps 3-5 on the "With Git CLI" section.

## Features
The Facebook React Commit Graph project offers the following features:

Users can view the commit graph, where commits are represented as squares on a grid.
Commits are color-coded based on the intensity of commits on a particular day. The graph is divided into four intensity levels, each represented by a different gradient of green. This is achieved by splitting the amount of commits in the most intensive day into four ranges, and using those numbers to grade intensity.

Hovering over a commit square displays the number of commits and the specific date when they were done.

## Technologies and implementation
- [Styled-components](https://styled-components.com): This library helps reduce inline styling and keep the code cleaner.
- [Shadcn-ui](https://ui.shadcn.com): UI Library used to import the popover. Requires [Tailwind css](https://tailwindcss.com) to work.
- Custom hooks: Created a *useCommitHistory* hook to handle data fetching outside of the CommitGraph component.
- Code structure: Although this specific project is very simple,a clean and organized project structure is crucial if scalability is required.
- Data fetching: Fetch API was good enough for the requirements of this project. A common alternative would Axios that can be used to achieve the same functionality.
