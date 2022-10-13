import data from './roskat.json' assert {type: 'json'}
import interact from 'https://cdn.skypack.dev/interactjs';

var peliIndex 
const roskaLista = []
const roskaAstiaLista = []
const roskislista = ["roskis1", "roskis2", "roskis3", "roskis4", "roskis5", "roskis6", "roskis7", "roskis8", "roskis9", "roski10", "roskis11", "roskis12", "roskis13", "roskis14"]



pelaa.onclick = function peliMuodonValinta() {
  peliIndex = document.getElementById("peliMuodot").selectedIndex;
  modal.style.display = "none"
  roskistenNimienVaihto()
}


interact('.draggable').draggable({
  listeners: {

    move: dragMoveListener,
    end: endEvent, 

    autoScroll: true
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





function laatikoidenLuonti(numero){
  const uusiDiv = document.createElement("div");
  uusiDiv.setAttribute("id", "drag-" + numero,)
  uusiDiv.setAttribute("class", "draggable")

  if(numero<12){
    uusiDiv.setAttribute("style", "transform: translate(450px, -1200px)");
    uusiDiv.setAttribute("data-x", "450");
    uusiDiv.setAttribute("data-y", "-1200")
  }else if(numero>11){
    uusiDiv.setAttribute("style", "transform: translate(600px, -1835px)");
    uusiDiv.setAttribute("data-x", "600");
    uusiDiv.setAttribute("data-y", "-1835")
  }

  const content = document.createTextNode(roskaLista[numero])
  uusiDiv.appendChild(content)
  const nykyinen = document.getElementById(laatikot)

  document.body.insertBefore(uusiDiv, nykyinen)
}

function roskistenLuonti(numero){
  const insert = document.getElementById("roskaboxi")
  const uusiDiv = document.createElement("div");
  uusiDiv.setAttribute("class", "roskis")
  
  const uusiP = document.createElement("div");
  uusiP.setAttribute("id", "roskis" + numero)
  uusiDiv.appendChild(uusiP)

  const uusiDropzone = document.createElement("div")  
  uusiDropzone.setAttribute("class", "dropzone")
  uusiDropzone.setAttribute("id", "dropzone" + numero)
  uusiDiv.appendChild(uusiDropzone)

  insert.insertAdjacentElement("afterbegin", uusiDiv)
}

//modal

var modal = document.getElementById("peliModal");

var span = document.getElementsByClassName("close")[0];




//Roskisten nimien vaihto
function roskistenNimienVaihto(){
  if(peliIndex == 0){
    for(var i=0; i<Object.keys(data.yleiset).length; i++){
      roskaLista.push(data.yleiset[i].roska)
      laatikoidenLuonti(i)

    
      if(!roskaAstiaLista.includes(data.yleiset[i].minne)){
        roskaAstiaLista.push(data.yleiset[i].minne)
      }
    }
    for(var i=0; i<roskaAstiaLista.length; i++){
        roskistenLuonti(i +1)
        document.getElementById(roskislista[i]).innerHTML = roskaAstiaLista[i];
    }
  }

  else if(peliIndex == 1){
    for(var i=0; i<Object.keys(data.autoala).length; i++){
      roskaLista.push(data.autoala[i].roska)
      laatikoidenLuonti(i)

    
      if(!roskaAstiaLista.includes(data.autoala[i].minne)){
        roskaAstiaLista.push(data.autoala[i].minne)
      }
    }
    for(var i=0; i<roskaAstiaLista.length; i++){
        roskistenLuonti(i +1)
        document.getElementById(roskislista[i]).innerHTML = roskaAstiaLista[i];
    }
  }

  else if(peliIndex == 2){
    for(var i=0; i<Object.keys(data.maalari).length; i++){
      roskaLista.push(data.maalari[i].roska)
      laatikoidenLuonti(i)

    
      if(!roskaAstiaLista.includes(data.maalari[i].minne)){
        roskaAstiaLista.push(data.maalari[i].minne)
      }
    }
    for(var i=0; i<roskaAstiaLista.length; i++){
        roskistenLuonti(i +1)
        document.getElementById(roskislista[i]).innerHTML = roskaAstiaLista[i];
    }
  }

  else if(peliIndex == 3){
    for(var i=0; i<Object.keys(data.putkiasentaja).length; i++){
      roskaLista.push(data.putkiasentaja[i].roska)
      laatikoidenLuonti(i)

    
      if(!roskaAstiaLista.includes(data.putkiasentaja[i].minne)){
        roskaAstiaLista.push(data.putkiasentaja[i].minne)
      }
    }
    for(var i=0; i<roskaAstiaLista.length; i++){
        roskistenLuonti(i +1)
        document.getElementById(roskislista[i]).innerHTML = roskaAstiaLista[i];
    }
  } 

  else if(peliIndex == 4){
    for(var i=0; i<Object.keys(data.sahkoasentaja).length; i++){
      roskaLista.push(data.sahkoasentaja[i].roska)
      laatikoidenLuonti(i)

    
      if(!roskaAstiaLista.includes(data.sahkoasentaja[i].minne)){
        roskaAstiaLista.push(data.sahkoasentaja[i].minne)
      }
    }
    for(var i=0; i<roskaAstiaLista.length; i++){
        roskistenLuonti(i +1)
        document.getElementById(roskislista[i]).innerHTML = roskaAstiaLista[i];
    }
  }
}