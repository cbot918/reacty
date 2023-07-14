import { Tokenizer } from "./tokenizer.js";
import { Noder } from "./noder.js";
import { Translater } from "./translater.js";

const lg = console.log
function Compiler(file) {
    this.file = file;
    this.jsxStart = 0
    this.jsxEnd = 0
    this.GetTokens = function () {
        const tokenizer = new Tokenizer(this.file);
        const tokens = tokenizer.GetTokens();
        this.jsxStart = tokenizer.GetJsxStart()
        this.jsxEnd = tokenizer.GetJsxEnd()
        return tokens;
    };
    this.GetNode = function (tokens) {
        return Noder(tokens);
    };
    this.GetTranslate = function (node) {
        return Translater(node);
    };
    this.GetJsxStart = function(){
        return this.jsxStart
    }
    this.GetJsxEnd = function(){
        return this.jsxEnd
    }
}
export default Compiler;
