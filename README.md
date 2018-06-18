# React Lending APP
This project is generated as a POC for boilerplate purposes. This project uses NodeJS > 8. The purpose of this project is to keen a lending with a scoring profiler and save results into a database.

## TechStack
This project uses:
- Gitflow repository workflow. The repository workflow is based on [Git flow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
- [React](https://reactjs.org/) with [Redux](https://redux.js.org/introduction) Architecture
- [Webpack](https://webpack.js.org/) as a bundler
- [Typescript](https://www.typescriptlang.org/) language
- [Jest](https://facebook.github.io/jest/) as a Test Framework
- [Ant Design](https://ant.design/) UI Framework
- [CSS BEM](http://getbem.com/naming/) naming convention
- [Axios](https://github.com/axios) as a Rest API client library

## Start project
Run `npm install` to install dependencies and `npm start` to start a server on port `http://localhost:8080`.
If you want, use [Docker](https://www.docker.com/) to setup the environment
```
docker run -it --rm --network host-v ${PWD}/:/app -w /app node sh
```
***run the command at the ROOT project folder***

## Caveats
If you experience C.O.R.S. problems, try use chrome with:
```
$ chrome --disable-web-security --user-data-dir --allow-running-insecure-content
```

## TODO's
- TODO: separate dev from prod building
- TODO: Implement performance test reports with lighthouse
- TODO: add unit test
- TODO: add e2e testing
- TODO: React hash routing
- TODO: i18Next internationalization
- TODO: Implement ActionCreators
- TODO: Implement reselect
- TODO: Use wiremock to test
- TODO: CSSModules
- TODO: Demo using github pages