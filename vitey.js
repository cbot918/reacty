import { readFileSync, writeFileSync, mkdirSync, rmdirSync, copyFileSync } from 'node:fs'
import { Babely } from "./nody_modules/babely.js"

const lg = console.log

/* start concating files to output */

// first append react
const reactyRaw = readFileSync('./nody_modules/reacty.js', 'utf8')
const reacty = reactyRaw.match("(.|\n)*export")[0].replace("export","")

// second append app
const app = readFileSync('./src/app.js', 'utf8')
const babeledApp = Babely(app) /* babely transform */
const resultApp = babeledApp.match("function(.|\n)*")[0]

// third append main
const mainRaw = readFileSync('./src/main.js', 'utf8')
const main = mainRaw.match("Reacty.render(.|\n)*")[0]

const output = reacty + resultApp + main
lg(output)


// deal with output folder
try {
  mkdirSync('build')
} catch(err) {
  if(err.code === 'EEXIST'){
    rmdirSync('build',{recursive: true,})
    mkdirSync('build')
  }
}

// write output to build/main.js and copy src/index.html to build/index.html
writeFileSync("./build/main.js", output)
copyFileSync('src/index.html', 'build/index.html');
