# wp-quickstart-caller-example
Usage example of [webpack-typescript-lib-quickstart](https://github.com/shellyln/webpack-typescript-lib-quickstart).


[![npm](https://img.shields.io/npm/v/wp-quickstart-caller-example.svg)](https://www.npmjs.com/package/wp-quickstart-caller-example)
[![GitHub release](https://img.shields.io/github/release/shellyln/wp-quickstart-caller-example.svg)](https://github.com/shellyln/wp-quickstart-caller-example/releases)
[![Travis](https://img.shields.io/travis/shellyln/wp-quickstart-caller-example.svg)](https://travis-ci.org/shellyln/wp-quickstart-caller-example)
[![GitHub forks](https://img.shields.io/github/forks/shellyln/wp-quickstart-caller-example.svg?style=social&label=Fork)](https://github.com/shellyln/wp-quickstart-caller-example/fork)
[![GitHub stars](https://img.shields.io/github/stars/shellyln/wp-quickstart-caller-example.svg?style=social&label=Star)](https://github.com/shellyln/wp-quickstart-caller-example)

---

### Features
* Use and extend `webpack-typescript-lib-quickstart` library.  
  See `src/index.ts` and `src/lib/MathTwo.ts`.
* Extend `webpack-typescript-lib-quickstart`'s stylesheet.  
  See `src/assets/scss/main.scss`.


* Compile TypeScript source and output as CommonJS format with declaration information and source map.
* Compile TypeScript source and output as CommonJS format single file with declaration information source map.  
  (Declaration information settings are disabled. See tsconfig-webpack-node-dist.json.)
* Compile TypeScript source and output as AMD format single file with source map.
* Compile SCSS, auto-prefixing (PostCSS), and output as single CSS file with source map.


* Run unit tests ([jasmine-node](https://www.npmjs.com/package/jasmine-node)).


* Include CI configurations
  ([Travis CI](https://travis-ci.org/),
   [bitbucket pipelines](https://www.atlassian.com/software/bitbucket/features/pipelines),
   [Wercker](http://www.wercker.com/),
   [AWS CodeBuild](https://aws.amazon.com/codebuild/)).
* Include Visual Studio Code debugger and tasks configurations.




# Usage (runs on Node)
1. Fork and clone me.
1. Edit package informations of `package.json`.  
   Don't remember to change repository url, author, homepage.
1. Write your code.
1. and build it.  
  ```sh
  npm run build
  npm test
  ```




# Usage (runs on browsers)
1. Fork and clone me.
1. Edit package informations of `package.json`.  
   Don't remember to change repository url, author, homepage.
1.  Edit `webpack.config.js`.  
    ```javascript
    // [Node-single-js-file]: Packing a Node single Javascript file.
    {
        entry: {
            // TODO: YOU SHOULD REPLACE THE LIBRARY OUTPUT NAME!
            <your-output-name>: path.resolve(__dirname, 'src/index.ts')
        },
        output: {
            // TODO: YOU SHOULD REPLACE THE LIBRARY NAME!
            library: '<your-library-name>',
            ...
        },
        module: {
            rules: [{
                test: /\.tsx?$/,
                ...

                // TODO: You should add/remove the referenced packages paths.
                // TODO: YOU SHOULD REPLACE THE PACKAGE NAME!
                exclude: /node_modules[\/\\](?!(webpack-typescript-lib-quickstart)|(wp-quickstart-caller-example)).*$/
            }, {
                test: /\.jsx?$/,
                ...

                // TODO: You should add/remove the referenced packages paths.
                // TODO: YOU SHOULD REPLACE THE PACKAGE NAME!
                exclude: /node_modules[\/\\](?!(webpack-typescript-lib-quickstart)|(wp-quickstart-caller-example)).*$/
            }, {
            ...
    },

    // [Browser-single-js-file]: Packing a library Javascript file.
    {
        entry: {
            // TODO: YOU SHOULD REPLACE THE LIBRARY OUTPUT NAME!
            <your-output-name>: path.resolve(__dirname, 'src/index.ts')
        },
        output: {
            // TODO: YOU SHOULD REPLACE THE LIBRARY NAME!
            library: '<your-library-name>',
            ...
        },
        module: {
            rules: [{
                test: /\.tsx?$/,
                ...

                // TODO: You should add/remove the referenced packages paths.
                // TODO: YOU SHOULD REPLACE THE PACKAGE NAME!
                exclude: /node_modules[\/\\](?!(webpack-typescript-lib-quickstart)|(wp-quickstart-caller-example)).*$/
            }, {
                test: /\.jsx?$/,
                ...

                // TODO: You should add/remove the referenced packages paths.
                // TODO: YOU SHOULD REPLACE THE PACKAGE NAME!
                exclude: /node_modules[\/\\](?!(webpack-typescript-lib-quickstart)|(wp-quickstart-caller-example)).*$/
            }, {
            ...
    },

    // Packing a library CSS file.
    {
            ...
            // TODO: You should add/remove the referenced packages assets paths.
            alias: {
                "../images": "webpack-typescript-lib-quickstart/src/assets/images"
            },
            ...

            ...
            // TODO: You should add/remove the referenced packages assets paths.
            includePaths: [
                path.resolve("./node_modules/webpack-typescript-lib-quickstart/src/assets/scss")
            ],
            ...
    }
    ```
1. Write your code.
1. and build it.  
   ```sh
   npm run build
   npm test
   ```
1. Deploy `dist/<your-library-name>.min.js`.




# Usage (Compile SCSS Stylesheets to single CSS file)
1. Fork and clone me.
1. Edit package informations of `package.json`.  
   Don't remember to change repository url, author, homepage.
1. Write your code.
1. and build it.  
   ```sh
   npm run build
   ```
1. Deploy `dist/style.min.css`.




# Directory structure
* /bin/ : Output directory of Node module javascript file (CommonJS) that build with tsc.
* /bin/index_single.js : Node module javascript single file (CommonJS) that build+packed by Webpack.
* /dist/ : Output directory of distribution javascript file (AMD ; for browsers) and stylesheet file that build+packed by Webpack.
* /declarations/ : Output directory of TypeScript declaration.
* /src/index.ts : Library main file.
* /src/app.ts : Debugger entry point file.
* /src/lib/ : Directory of library program codes.
* /src/spec/ : Directory of unit test codes. We use [jasmine-node](https://www.npmjs.com/package/jasmine-node).
* /src/assets/scss/ : Directory of stylesheet source.
* /src/assets/ : Assets requiring from example code (lib/AssetsLoader) that packed to JS file by Webpack.
* /src/views/ : Assets requiring from example code (lib/AssetsLoader) that packed to JS file by Webpack.
* /.babelrc : Babel configuration.
* /.gitignore : git ignore list.
* /.npmignore : NPM ignore list.
* /package.json : NPM package configuration.
* /tsconfig.json : [TypeScript compiler options](https://www.typescriptlang.org/docs/handbook/compiler-options.html) for Node module output. it also uses for IDEs' error checking and coding assistance.
* /tsconfig-webpack-node.json : [TypeScript compiler options](https://www.typescriptlang.org/docs/handbook/compiler-options.html) for Node module single file output.
* /tsconfig-webpack-dist.json : [TypeScript compiler options](https://www.typescriptlang.org/docs/handbook/compiler-options.html) for distribution single file output.
* /webpack.config.js : [Webpack2 build configuration](https://webpack.js.org/configuration/).
* /.travis.yml : [Travis CI](https://travis-ci.org/) test and deploying pipeline configuration.
* /bitbucket-pipelines.yml : [bitbucket pipelines](https://www.atlassian.com/software/bitbucket/features/pipelines) test and deploying pipeline configuration.
* /bitbucket-heroku-deploy.sh : bitbucket test and deploying pipeline helper shell script.
* /wercker.yml : [Wercker](http://www.wercker.com/) test and deploying pipeline configuration.
* /buildspec.yml : AWS CodeBuild test and deploying pipeline configuration.
* /buildspec-heroku-pre-deploy.sh : AWS CodeBuild test and deploying pipeline helper shell script.
* /buildspec-heroku-deploy.sh : AWS CodeBuild test and deploying pipeline helper shell script.




# NPM scripts
* build : Build for production.
* rebuild : Clean all output and build for production.
* build:node:dev : Build Node module output (CommonJS) for develop.
* build:node:prod : Build Node module output (CommonJS) for production.
* build:dist:dev : Build distribution output (AMD) for develop.
* build:dist:prod : Build distribution output (AMD) for production.
* clean : Clean all output.
* test : Run unit tests.
* start : Run codes for debugging (bin/app.js).




# License
MIT
