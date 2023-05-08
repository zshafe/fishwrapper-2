*The Fishwrapper 2.0 is a new satire paper/creative project that is awaiting a new name. This is that organization's website's codebase*
# How to Add An Article
Make a copy of `~/article-template.md`, and fill out your information. Pay attention to what you name the file, as that will be the URL path that takes you to that article. Then move that file to the `~/articles` directory. Make a PR and once approved, merge to main. If you don't want to figure all that out though, just send it to any of the developers.

# Developer Stuff

## Node
You'll need to have [Node](https://nodejs.org/en/download) installed to run this project. I highly recommend installing the at least v16.x

## Yarn
I highly recommend installing [yarn](https://yarnpkg.com/) as I find it to be much faster and overall easier to use than npm. You can install yarn classic globally with npm by using `npm install --global yarn`, and then you should be able to use the project. It should be noted that this project uses modern version of yarn [(yarn berry)](https://yarnpkg.com/), but there shouldn't be additional setup required. **Please lmk if you find this to not be the case as I haven't tested it**.

## React
The app is based in React. The modern React Documentation can be found [here](https://react.dev/). Always check the dates on other resources you find online, as there have been a lot of iterations of best practices over the years. The [tic-tac-toe tutorial](https://react.dev/learn) is a great place to start if you need a refresher on React or are new to the technology.

## Next.js
This application uses [Next.js](https://nextjs.org/) as a framework for React. The structure and techniques of this application are very heavily based on things from the [tutorial](https://nextjs.org/learn/foundations/about-nextjs?utm_source=next-site&utm_medium=homepage-cta&utm_campaign=next-website) for Next.js. **I would highly recommend moving through this tutorial, as it gives a good understanding of how the structure of a Next.js application works**

## VS Code
I highly recommend using [VSCode](https://code.visualstudio.com/) as your IDE, as this will probably make your use of our linter and code formatter a lot easier. You should install the [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) as well as the [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

## Additional Dependency Documentation
- [TypeScript](https://www.typescriptlang.org/)
- [date-fns](https://date-fns.org/)
- [Material-UI](https://mui.com/material-ui/getting-started/overview/)
### Dependencies Specific to Processing Markdown (Will eventually be removed)
- [Gray Matter](https://github.com/jonschlinkert/gray-matter)
- [Remark](https://github.com/remarkjs/remark)
- [Remark HTML](https://github.com/remarkjs/remark-html)

# Commands
Upon first cloning and opening the repository run `yarn set version latest` to make sure you're on the correct version.
- `yarn` or `yarn install` to install all project dependencies **Do this before anything else!**
- `yarn add [package]` to add a dependency. If dependency if a dev dependency (only used in development) make sure to flag `--dev`
- `yarn remove [package]` to remove a dependency.
- `yarn dev` to start up a development version of the application
- `yarn build` to create a production build
- `yarn start` to start that production build
- `yarn lint` to run ESLint
- `yarn pretty-check` to find code formatting issues
- `yarn pretty-fix` to automatically fix any code formatting issues *you can also save your project to automatically fix formatting issues in any given file*

# File Structure
## articles
Storage for the markdown article files (will be gone eventually)
## src
Source code
### components
Individual components that are designed for reuse
### lib
Utility functions
### pages
Holds actual `_app.tsx` and `index.tsx` files.
#### api
Holds Next.js's serverless API endpoint routes
#### articles
Holds template for article components
### styles
Holds all `.module.css` files
