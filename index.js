import data from './files/yleiset.json' assert {type: 'json'}
import interact from 'https://cdn.skypack.dev/interactjs';

const roskaLista = []
const roskaAstiaLista = []
const roskislista = ["roskis1", "roskis2", "roskis3", "roskis4", "roskis5", "roskis6", "roskis7", "roskis8", "roskis9", "roski10", "roskis11"]


interact('.draggable').draggable({
  listeners: {

    move: dragMoveListener,
    end: endEvent 

  }
})

function dragMoveListener (event) {
  var target = event.target

  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy
  
  target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y)
}

function endEvent (event){
  
}

interact(".dropzone").dropzone({
  ondropactivate: function (event) {
    event.target.classList.add('drop-active')
  },
  ondropdeactivate: function (event){
    event.target.classList.remove('drop-active')
  },
})

interact('.draggable').draggable({
  modifiers: [
    interact.modifiers.restrictRect({
      restriction: 'parent',
      endOnly: true
    })
  ],
  listeners: {move: dragMoveListener}
})

window.dragMoveListener = dragMoveListener

function addElement(numero){
  const uusiDiv = document.createElement("div");
  uusiDiv.setAttribute("id", "drag-" + numero,)
  uusiDiv.setAttribute("class", "draggable")
  uusiDiv.setAttribute("data-x", "450");
  uusiDiv.setAttribute("data-y", "-1200")
  const content = document.createTextNode(roskaLista[i])
  uusiDiv.appendChild(content)
  const nykyinen = document.getElementById(testi)

  document.body.insertBefore(uusiDiv, nykyinen)
}

//Roskisten nimien vaihto

for(var i=0; i<Object.keys(data.Roskat).length; i++){
  roskaLista.push(data.Roskat[i].roska)
  addElement(i)
  if(!roskaAstiaLista.includes(data.Roskat[i].minne)){
    roskaAstiaLista.push(data.Roskat[i].minne)
  }
}
for(var i=0; i<roskaAstiaLista.length; i++){
  try {
    document.getElementById(roskislista[i]).innerHTML = roskaAstiaLista[i];
  }
  catch (error) {
    continue
  }
}

