[![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)](https://stenciljs.com)

# Stencil Storybook Sample
This is a starter project for building a standalone Web Component using Stencil and showcasing it with Storybook.


## Usage

### Prerequisites

- [Node](https://nodejs.org/en/) v14 or older.
- [Yarn](https://classic.yarnpkg.com/en/) v1.22.10 or older, or [Npm](https://www.npmjs.com/) v6.14.13 or older.

At the root of your project, create an ```.npmrc```file with following configuration:

```@vr33ni:registry=https://npm.pkg.github.com```

This will make sure that the package is installed from Github packages. To consume Github packages, you need a [PAT (Personal Access Token)](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

Set the PAT locally on your computer: ```npm config set '//npm.pkg.github.com/:_authToken' '<YOUR_PAT>'```

### Installation on React, Vue or Angular

#### With NPM

1. ```npm install --save @vr33ni/stencil-storybook-sample```

#### With Yarn

1. ```yarn add @vr33ni/stencil-storybook-sample```

#### Import the module inside your entry point file.

For React: <b>index.js</b> <br />
For Vue: <b>main.js</b> <br />
For Angular: <b>main.ts</b>

```bash
import { defineCustomElements } from "@vr33ni/stencil-storybook-sample/loader";

defineCustomElements(window);
```

##### Additional steps for Angular

Inside <b>app.modules.ts</b> file:

```bash
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
 ...
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
 ...
})
```

#### Installation of SASS
<!-- For React projects only, run:  -->
```bash
npm install sass
```

## Usage of components

Explore our currently available web components in Storybook. You will also find the code snippets needed to include them in your application.

https://vr33ni.github.io/stencil-storybook-sample/


<p align="right"><a href="#tableContent">back to top</a></p>


## Local development

To start building a new web component using Stencil and live testing it on Storybook, follow the steps below:

```bash
git clone git@github.com:vr33ni/stencil-storybook-sample.git
```

and run:

```bash
npm install
npm run dev
```

To run the unit tests for the components, run:

```bash
npm test
```

### Contributing

+ Create an issue with your new feature description on Github
+ Go to the issue and create a branch from it. (Naming convention: 'feature/name-of-component'). 
+ Make sure to update the version in the package.json before creating a new release.
+ After the feature is ready for testing, create a pull request and request review => On each new pull request, github actions trigger the deployment to a github pages preview url as well as a canary release that can be used to include and test the new feature in another web application