# react-graphql-boilerplate

Web app boilerplate using cutting edge web technologies

- [What's included and Why](#What's-included-and-Why)
- [Project Structure](#Project-Structure)
- [How to create a new component](#How-to-create-a-new-component)
- [TODOS](#TODOS)

## What's included and Why
### Front-End
- [React](https://reactjs.org/) (Building the user interface)
- [Apollo](https://www.apollographql.com/) (Data Management with GraphQL)
- [Next.js](https://nextjs.org/) (Server Side Rendering and Code Splitting)
- [styled-components](https://www.styled-components.com/) (Styling components)
- [Storybook](https://storybook.js.org/) (Quickly creating components in isolation)
- [Enzyme](https://airbnb.io/enzyme/) (React components testing)

### Back-End
- [GraphQL Yoga](https://github.com/prisma/graphql-yoga) (Express [GraphQL](https://graphql.org/) Server)
- [Prisma](https://www.prisma.io/) (GraphQL Database Interface)
  - Automatically generate CRUD (**C**reate **R**ead **U**pdate **D**elete)

### General
- [GraphQL](https://graphql.org/) (REST alternative / querying data)
- [TypeScript](https://www.typescriptlang.org/) (Type system for JavaScript)
- [Jest](https://jestjs.io/) (Test runner)
- [GraphQL Code Generator](https://graphql-code-generator.com/) (Generate TypeScript definitions from GraphQL)

---

## Project Structure
### Front-End
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

### Back-End
- **src**
  - **generated** : Prisma generated CRUD
  - **resolvers** : Custom Mutations/Queries
- **.graphqlconfig.yml** : GraphQL configuration
- **variables.env** : Environment variables (ie. Stripe/Prisma secrets)

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
1. Enable **TypeScript** on ~~**storybook**~~ and ~~**backend**~~
2. Setup **test runner** properly (Missing TypeScript support)
3. Integrate **Jest** with **Storybook**
4. ~~**Prettier** config~~
5. ~~**TSLint** config~~
6. **Editor config** in README (Prettier format on save and other)
7. ~~Setup custom **_app** (Next.js)~~
8. ~~Setup custom **_document** (Next.js)~~
9. ~~**Page.tsx** component~~
10. ~~**Global styles**~~
11. Setup **nProgress** (Loading bar + spinner on page transitions)
12. ~~**Stylelint**~~
13. **Extension pack** for VSCode
14. More **docs** + example on key features
15. **Backend Testing**

---

##Useful links

- [React TypeScript Guide](https://github.com/piotrwitek/react-redux-typescript-guide#tslintjson)
- [Authentication in GraphQL](https://www.youtube.com/watch?v=4_Bcw7BULC8)