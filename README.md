# Reacty

a dependency free practice project that includes react/jsx/babel/vite minimal level poc implementation

## Getting Started

1. clone project

```
git clone https://github.com/cbot918/reacty && cd reacty
```

2. build project

```
npm run build
```

3. see the result with build/index.html ( can open with live server)

## Edit Code

- in src/app.js, can edit innertext and style (support one attribute currently :< )

## Project Structure (top down view)

- vitey.js: mainly to build all code in one main.js file

- mody_modules/babely.js: mainly injecting transformed jsx
  content into return ( ) statement

- mody_modules/jsxy.js: transform jsx syntax to Reacty.createElement syntax

- mody_modules/compiler: html-jsxy parser lib

- src/app.js: user define reacty syntax

- src/app.js: js entry binding to index.html

- src/index.html: html template file, will direct copy to build

## reference

https://pomb.us/build-your-own-react/
https://github.com/inikulin/parse5
https://astexplorer.net/
https://github.com/jackiewillen/blog/issues/19

// html parser
https://github.com/HenrikJoreteg/html-parse-stringify
