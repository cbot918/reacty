const ast = {
  type: "Program",
  comments: [],
  tokens: [],
  range: [16, 34],
  loc: {
    start: {
      line: 2,
      column: 0,
    },
    end: {
      line: 7,
      column: 0,
    },
  },
  templateNodes: [
    {
      value: "\n",
      sourceSpan: {
        start: {
          file: {
            content: "<!DOCTYPE html>\n<html>\n\n\n\n</html>\n",
          },
          offset: 16,
          line: 1,
          col: 0,
        },
        end: {
          file: {
            content: "<!DOCTYPE html>\n<html>\n\n\n\n</html>\n",
          },
          offset: 16,
          line: 1,
          col: 0,
        },
        fullStart: {
          file: {
            content: "<!DOCTYPE html>\n<html>\n\n\n\n</html>\n",
          },
          offset: 15,
          line: 0,
          col: 15,
        },
        details: null,
      },
      type: "Text$3",
      loc: {
        start: {
          line: 2,
          column: 0,
        },
        end: {
          line: 2,
          column: 0,
        },
      },
      range: [16, 16],
    },
    {
      name: "html",
      attributes: [],
      inputs: [],
      outputs: [],
      children: [
        {
          value: "\n\n\n\n",
          sourceSpan: {
            start: {
              file: {
                content: "<!DOCTYPE html>\n<html>\n\n\n\n</html>\n",
              },
              offset: 26,
              line: 5,
              col: 0,
            },
            end: {
              file: {
                content: "<!DOCTYPE html>\n<html>\n\n\n\n</html>\n",
              },
              offset: 26,
              line: 5,
              col: 0,
            },
            fullStart: {
              file: {
                content: "<!DOCTYPE html>\n<html>\n\n\n\n</html>\n",
              },
              offset: 22,
              line: 1,
              col: 6,
            },
            details: null,
          },
          type: "Text$3",
          loc: {
            start: {
              line: 6,
              column: 0,
            },
            end: {
              line: 6,
              column: 0,
            },
          },
          range: [26, 26],
        },
      ],
      references: [],
      sourceSpan: {
        start: {
          file: {
            content: "<!DOCTYPE html>\n<html>\n\n\n\n</html>\n",
          },
          offset: 16,
          line: 1,
          col: 0,
        },
        end: {
          file: {
            content: "<!DOCTYPE html>\n<html>\n\n\n\n</html>\n",
          },
          offset: 33,
          line: 5,
          col: 7,
        },
        fullStart: {
          file: {
            content: "<!DOCTYPE html>\n<html>\n\n\n\n</html>\n",
          },
          offset: 16,
          line: 1,
          col: 0,
        },
        details: null,
      },
      startSourceSpan: {
        start: {
          file: {
            content: "<!DOCTYPE html>\n<html>\n\n\n\n</html>\n",
          },
          offset: 16,
          line: 1,
          col: 0,
        },
        end: {
          file: {
            content: "<!DOCTYPE html>\n<html>\n\n\n\n</html>\n",
          },
          offset: 22,
          line: 1,
          col: 6,
        },
        fullStart: {
          file: {
            content: "<!DOCTYPE html>\n<html>\n\n\n\n</html>\n",
          },
          offset: 16,
          line: 1,
          col: 0,
        },
        details: null,
      },
      endSourceSpan: {
        start: {
          file: {
            content: "<!DOCTYPE html>\n<html>\n\n\n\n</html>\n",
          },
          offset: 26,
          line: 5,
          col: 0,
        },
        end: {
          file: {
            content: "<!DOCTYPE html>\n<html>\n\n\n\n</html>\n",
          },
          offset: 33,
          line: 5,
          col: 7,
        },
        fullStart: {
          file: {
            content: "<!DOCTYPE html>\n<html>\n\n\n\n</html>\n",
          },
          offset: 26,
          line: 5,
          col: 0,
        },
        details: null,
      },
      type: "Element$1",
      loc: {
        start: {
          line: 2,
          column: 0,
        },
        end: {
          line: 6,
          column: 7,
        },
      },
      range: [16, 33],
    },
    {
      value: "\n",
      sourceSpan: {
        start: {
          file: {
            content: "<!DOCTYPE html>\n<html>\n\n\n\n</html>\n",
          },
          offset: 34,
          line: 6,
          col: 0,
        },
        end: {
          file: {
            content: "<!DOCTYPE html>\n<html>\n\n\n\n</html>\n",
          },
          offset: 34,
          line: 6,
          col: 0,
        },
        fullStart: {
          file: {
            content: "<!DOCTYPE html>\n<html>\n\n\n\n</html>\n",
          },
          offset: 33,
          line: 5,
          col: 7,
        },
        details: null,
      },
      type: "Text$3",
      loc: {
        start: {
          line: 7,
          column: 0,
        },
        end: {
          line: 7,
          column: 0,
        },
      },
      range: [34, 34],
    },
  ],
  value: "<!DOCTYPE html>\n<html>\n\n\n\n</html>\n",
};

// Create a new DOM document
const yale = document.implementation.createHTMLDocument();

// Function to recursively build the DOM
function buildDOM(node, parent) {
  if (node.type === "Program") {
    // The top-level program node represents the entire HTML document.
    // We'll skip it and focus on its children.
    for (const child of node.templateNodes) {
      buildDOM(child, yale);
    }
  } else if (node.type === "Text$3") {
    // Text node
    const textNode = yale.createTextNode(node.value);
    parent.appendChild(textNode);
  } else if (node.type === "Element$1") {
    // Element node
    const element = yale.createElement(node.name);
    for (const child of node.children) {
      buildDOM(child, element);
    }
    parent.appendChild(element);
  }
  // You can handle other node types and properties as needed
}

// Start building the DOM from the AST
buildDOM(ast, yale);

// Now 'document' contains the DOM representation of your AST
console.log(yale.documentElement.outerHTML);
