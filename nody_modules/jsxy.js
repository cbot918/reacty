import Compiler from './compiler/compiler.js';


const lg = console.log

export function Jsxy(input) {
    const c = new Compiler(input);
    const tokens = c.GetTokens();    
    lg(tokens)
    const node = c.GetNode(tokens);
    const translate = c.GetTranslate(node)
    // const element = Reacty.createElement(node.tag, node.attr, node.innertext);
    // lg(element)
    return [translate, c.GetJsxStart(), c.GetJsxEnd()];
}