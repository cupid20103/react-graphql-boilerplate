# react-graphql-boilerplate

React boilerplate using cutting edge web technologies

- [What's included and Why](#What's-included-and-Why)
- [Project Structure](#Project-Structure)
- [How to create a new component](#How-to-create-a-new-component)
- [TODOS](#TODOS)

## What's included and Why
- [React](https://reactjs.org/) (Building the user interface)
- [Apollo](https://www.apollographql.com/) (Data Management with GraphQL)
- [Next.js](https://nextjs.org/) (Server Side Rendering and Code Splitting)
- [styled-components](https://www.styled-components.com/) (Styling components)
- [Storybook](https://storybook.js.org/) (Quickly creating components in isolation)
- [Enzyme](https://airbnb.io/enzyme/) (React components testing)

### General
- [GraphQL](https://graphql.org/) (REST alternative / querying data)
- [TypeScript](https://www.typescriptlang.org/) (Type system for JavaScript)
- [Jest](https://jestjs.io/) (Test runner)
- [GraphQL Code Generator](https://graphql-code-generator.com/) (Generate TypeScript definitions from GraphQL)

---

## Project Structure
- **.storybook** : Storybook's configuration
- **components** : Every React Component that isn't a page
- **lib** : Reusable utility functions
- **node_modules** : Packages from npm
- **pages** : Every component here will be the starting component for a route matching the name of the file
- **static** : Every static files served for the website (ie. favicon.png)
- **config.js** : Public config variables (ie. backend baseUrl)
- **jest.setup.js** : Test Runner configuration
- **next.config.js** : Next.js configuration (currently making sure TypeScript works with Next.js)
- **tsconfig.json** : TypeScript configuration

---

## How to create a new component

1. Create a folder named *YourComponentName*
2. Write your component in a *YourComponentName.tsx*
3. To help you develop your component, create a *YourComponentName.stories.tsx*. 
4. Create as many story to cover the important use cases of your new component

Example: 

```Javascript
storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
```

5. You can now run :

```Shell
npm run storybook
```

6. Test your component in a *YourComponentName.test.tsx* file if needed.

Component directory example:

- /**components**
  - /*YourComponentName*
    - /YourComponentName.**tsx**
    - /YourComponentName.**stories.tsx**
    - /YourComponentName.**test.tsx**

### Motivation

**Storybook driven development** is the way to go when building a UI

- **Browse the storybook** to see if a component already exists and fits your needs
- **Quickly understand** a component you haven't written
- Build in **isolation**
- Hot Module Replacement **speeds up** the development process
- **No component duplicates**

---

## TODOS
1. Enable **TypeScript** with **Jest**
2. Integrate **Jest** with **Storybook**
3. Setup **TypeScript** properly (**@types**)
4. Make sure TSLint rules are being respected
5. Fix current TSLint errors
6. Setup **nProgress** (Loading bar + spinner on page transitions)
7. **Extension pack** for VSCode
8. More **docs** + example on key features

---

##Useful links

- [React TypeScript Guide](https://github.com/piotrwitek/react-redux-typescript-guide#tslintjson)
- [Authentication in GraphQL](https://www.youtube.com/watch?v=4_Bcw7BULC8)