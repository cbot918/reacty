const lg = console.log
// style="color:red"
// { style: "color:red" }
function attrToObject(input){

  const style = input.match(".*=")[0].replace("=","")
  
  const color_red = input.match("=.*")[0].replace("=","").replace("\"","").replace("\"","")
  const color = color_red.match(".*:")[0].replace(":","")
  const red = color_red.match(":.*")[0].replace(":","")

  return {style:`${color}:${red}`}
}

lg(
  attrToObject('style="color:red"')
)