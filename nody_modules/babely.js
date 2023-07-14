import { Jsxy } from "./jsxy.js";
import { Reacty } from "./reacty.js";
import { readFileSync, writeFileSync } from 'node:fs'
const lg = console.log

export function Babely(content){
  const jsxyObj = Jsxy(content)
  const jsx = jsxyObj[0]
  const jsxStart = jsxyObj[1]
  const jsxEnd = jsxyObj[2]
  lg("");lg(`jsx: ${jsx}`);lg(`jsxStart: ${jsxStart}  jsxEnd: ${jsxEnd}`);lg("")

  let index = 0
  let result = ""
  while(true){
    if (index >= content.length){
      break
    }
    if (index === jsxStart){
      result += jsx
      index += jsxEnd - jsxStart +1
    }
    result += content[index]
    index += 1
    
  }
  return result
}
