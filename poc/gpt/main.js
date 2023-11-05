// Tokenizer.js
function tokenize(input) {
  const tokens = [];
  let index = 0;

  while (index < input.length) {
    if (input[index] === "<") {
      const start = index;
      index++;

      if (input[index] === "/") {
        // Closing tag
        index++;
        while (input[index] !== ">") {
          index++;
        }
        const end = index + 1;
        tokens.push({
          type: "CLOSE_TAG",
          content: input.substring(start, end),
        });
      } else {
        // Opening tag
        while (input[index] !== ">") {
          index++;
        }
        const end = index + 1;
        tokens.push({
          type: "OPEN_TAG",
          content: input.substring(start, end),
        });
      }
    } else {
      // Text
      const start = index;
      while (index < input.length && input[index] !== "<") {
        index++;
      }
      const end = index;
      tokens.push({
        type: "TEXT",
        content: input.substring(start, end),
      });
    }
  }

  return tokens;
}

// AST.js
function buildAST(tokens) {
  const ast = {
    type: "ROOT",
    children: [],
  };

  const stack = [ast];
  let currentElement = ast;

  for (const token of tokens) {
    if (token.type === "OPEN_TAG") {
      const element = {
        type: "ELEMENT",
        tag: token.content,
        children: [],
      };
      currentElement.children.push(element);
      stack.push(element);
      currentElement = element;
    } else if (token.type === "CLOSE_TAG") {
      stack.pop();
      currentElement = stack[stack.length - 1];
    } else if (token.type === "TEXT") {
      currentElement.children.push({
        type: "TEXT",
        content: token.content,
      });
    }
  }

  return ast;
}

// Example usage
const inputHTML = `
<div className="hihi">
  <ul>
     <li>1</li>
     <li>2</li>
  </ul>
</div>
`;

const tokens = tokenize(inputHTML);
const ast = buildAST(tokens);

console.log(tokens);
console.log(JSON.stringify(ast, null, 2));
