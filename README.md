Flask + React app

Following [some of this](https://medium.com/@chrislewisdev/react-without-npm-babel-or-webpack-1e9a6049714)

To compile the src js to usable js:

```
cd static
npm run build-babel
npm run build-webpack
```

The first step uses Babel to convert the JSX to regular JS.
The second step uses Webpack to deal with dependencies.
