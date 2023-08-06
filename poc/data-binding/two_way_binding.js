window.onload = ()=>{
  const root = document.querySelector("#root")
  const val = document.createElement("div")
  const addOne = document.createElement("input")
  const minusOne = document.createElement("input")

  /* 實現 data binding */
  const data = {
    value: 0
  }

  Object.defineProperty(data, 'prop', {
    get : function(){
      return this.value
    },
    set : function(value){
      this.value = value
      setValue(val)
    }
  })
  function setValue(el){
    el.innerText = data.prop
  }
  /**/


  root.appendChild(val)
  val.innerText = 0
  addOne.setAttribute("type","button")
  addOne.setAttribute("value","+1")
  root.appendChild(addOne)
  addOne.onclick = ()=>{
    data.prop += 1
  }
  
  minusOne.setAttribute("type","button")
  minusOne.setAttribute("value","-1")
  root.appendChild(minusOne)
  minusOne.onclick = ()=>{
    data.prop -= 1
  }

}