const lg = console.log
export function Tokenizer(file) {
    this.tokens = [];
    this.Content = file;
    this.Index = 0;
    this.Length = this.Content.length;
    this.timeToGetAttribute = false;
    this.timeToGetInnerText = false;
    this.isFirstLEFT = true
    this.jsxStart = 0
    this.jsxEnd = 0
    this.GetJsxStart = function(){
        return this.jsxStart
    }
    this.GetJsxEnd = function(){
        return this.jsxEnd
    }
    this.GetTokens = function () {
        return this.tokens;
    };
    this.tokAttribute = function () {
        let str = "";
        while (true) {
            if (this.Content[this.Index] === ">") {
                break;
            }
            str += this.Content[this.Index];
            this.Index += 1;
        }
        return str;
    };
    while (true) {
        if (this.Index >= this.Length) {
            return;
        }
        if (this.timeToGetAttribute || this.timeToGetInnerText) {
            if (this.timeToGetAttribute) {
                this.Index += 1;
                if (isChar(this.Content[this.Index])) {
                    const str = this.tokAttribute();
                    let t = new Tok("ATTR", str);
                    this.tokens = this.tokens.concat(t);
                    this.timeToGetAttribute = false;
                }
            }
            if (this.timeToGetInnerText && isChar(this.Content[this.Index])) {
                let str = "";
                while (1) {
                    if (!isChar(this.Content[this.Index])) {
                        break;
                    }
                    str += this.Content[this.Index];
                    this.Index += 1;
                }
                let t = new Tok("INNERTEXT", str);
                this.tokens = this.tokens.concat(t);
                this.timeToGetInnerText = false;
            }
        }
        if (isLeft(this.Content[this.Index])) {
            if( this.isFirstLEFT===true && this.jsxStart === 0){
                this.isFirstLEFT = false
                // record jsx start index
                this.jsxStart = this.Index
            }
            let t = new Tok("LEFT", "<");
            this.tokens = this.tokens.concat(t);
            this.Index += 1;
            continue;
        }
        if (isSlash(this.Content[this.Index])) {
            let str = "/";
            this.Index += 1;
            while (true) {
                if (!isChar(this.Content[this.Index])) {
                    break;
                }
                str += this.Content[this.Index];
                this.Index += 1;
            }
            let t = new Tok("CLOSETAG", str);
            this.tokens = this.tokens.concat(t);
            
            // record for jsx end
            this.jsxEnd = this.Index
        }
        if (isRight(this.Content[this.Index])) {
            let t = new Tok("RIGHT", ">");
            this.tokens = this.tokens.concat(t);
            this.Index += 1;
            this.timeToGetInnerText = true;
            continue;
        }
        if (isLeftParen(this.Content[this.Index])){
            let t = new Tok("LEFTPAREN", "(")
            this.tokens = this.tokens.concat(t)
            this.Index += 1
            continue
        }
        if (isRightParen(this.Content[this.Index])){
            let t = new Tok("RIGHTPAREN", ")")
            this.tokens = this.tokens.concat(t)
            this.Index += 1
            continue
        }
        if (isChar(this.Content[this.Index])) {
            let str = "";
            while (true) {
                if (!isChar(this.Content[this.Index])) {
                    break;
                }
                str += this.Content[this.Index];
                this.Index += 1;
            }
            if (str === "div") {
                let t = new Tok("TAG", str);
                this.tokens = this.tokens.concat(t);
                this.timeToGetAttribute = true;
            }
            if (str === "function"){
                let t = new Tok("FN", str)
                this.tokens = this.tokens.concat(t)
            }
            if (str === "return"){
                let t = new Tok("RETURN", str)
                this.tokens = this.tokens.concat(t)
            }
            continue;
        }
        this.Index += 1;
    }
}
function Tok(symbol, value) {
    this.symbol = symbol;
    this.value = value;
}
function isChar(c) {
    let n = c.charCodeAt(0);
    return (n >= 65 && n < 91) || (n >= 97 && n < 123);
}
function isLeft(c) {
    return c === "<";
}
function isRight(c) {
    return c === ">";
}
function isSlash(c) {
    return c === "/";
}
function isLeftParen(c){
    return c === "("
}
function isRightParen(c){
    return c === ")"
}

