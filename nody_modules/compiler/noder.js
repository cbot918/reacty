export function Noder(tokens) {
    let node = {};
    tokens.forEach(ele => {
        switch (ele.symbol) {
            case 'TAG':
                node['tag'] = ele.value;
                break;
            case 'ATTR':
                node['attr'] = attrToObject(ele.value);
                break;
            case 'INNERTEXT':
                node['innertext'] = ele.value;
                break;
        }
    });
    return node;
}

const lg = console.log
// style="color:red"  to  { style: "color:red" }
function attrToObject(input){
  const style = input.match(".*=")[0].replace("=","")

  const color_red = input.match("=.*")[0].replace("=","").replace("\"","").replace("\"","")
  const color = color_red.match(".*:")[0].replace(":","")
  const red = color_red.match(":.*")[0].replace(":","")
  
  return {style:`${color}:${red}`}
}