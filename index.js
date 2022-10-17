import data from './roskat.json' assert {type: 'json'}
import interact from 'https://cdn.skypack.dev/interactjs';

var peliIndex 
var pisteet = 0
var x = 450
var y = -1200
const poistoLista = []
const roskaLista  = []
const roskaAstiaLista = []
const roskislista = ["roskis1", "roskis2", "roskis3", "roskis4", "roskis5", "roskis6", "roskis7", "roskis8", "roskis9", "roski10", "roskis11", "roskis12", "roskis13", "roskis14"]



pelaa.onclick = function peliMuodonValinta() {
  peliIndex = document.getElementById("peliMuodot").selectedIndex;
  modal.style.display = "none"
  roskistenNimienVaihto()
}



function dragMoveListener (event) {
  var target = event.target

  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy
  
  target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y)
}


interact(".dropzone").dropzone({
  checker: function (
    dragEvent,
    event,            
    dropped,           
    dropzone,          
    dropzoneElement,   
    draggable,         
    draggableElement
  ) {
    var drag = draggableElement.getAttribute("id");
    var drop = dropzoneElement.getAttribute("id")
    for(var i=0; i<roskaLista.length; i++){
      if(peliIndex == 0){
        if(drag == data.yleiset[i].minne + i && drop == data.yleiset[i].minne && dropped == true){
          var pois = data.yleiset[i].minne + i
          if(!poistoLista.includes(pois)){
            poistoLista.push(pois)
          }
        }
      }else if(peliIndex == 1){
        if(drag == data.autoala[i].minne + i && drop == data.autoala[i].minne && dropped == true){
          var pois = data.autoala[i].minne + i
          if(!poistoLista.includes(pois)){
            poistoLista.push(pois)
          }
        }
      }else if(peliIndex == 2){
        if(drag == data.maalari[i].minne + i && drop == data.maalari[i].minne && dropped == true){
          var pois = data.maalari[i].minne + i
          if(!poistoLista.includes(pois)){
            poistoLista.push(pois)
          }
        }
      }else if(peliIndex == 3){
        if(drag == data.rakennusala[i].minne + i && drop == data.rakennusala[i].minne && dropped == true){
          var pois = data.rakennusala[i].minne + i
          if(!poistoLista.includes(pois)){
            poistoLista.push(pois)
          }
        }
      }else if(peliIndex == 4){
        if(drag == data.artesaani[i].minne + i && drop == data.artesaani[i].minne && dropped == true){
          var pois = data.artesaani[i].minne + i
          if(!poistoLista.includes(pois)){
            poistoLista.push(pois)
          }
        }
      }
    }

  }
});

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
  listeners: {
    move: dragMoveListener,
  }
})

btnTarkistus.onclick = function tarkista(){
  while(true){
    var element = document.getElementById(poistoLista[0])
    element.remove()
    poistoLista.splice(0, 1)
    pisteet = pisteet + 1;
    document.getElementById("pisteet").innerHTML = pisteet
    if(poistoLista.length == 0){
      break;
    }
  }
}


function laatikoidenLuonti(numero){
  const uusiDiv = document.createElement("div");
  if(peliIndex == 0){
    uusiDiv.setAttribute("id", data.yleiset[numero].minne + numero)
  }else if(peliIndex == 1){
    uusiDiv.setAttribute("id", data.autoala[numero].minne + numero)
  }else if(peliIndex == 2){
    uusiDiv.setAttribute("id", data.maalari[numero].minne + numero)
  }else if(peliIndex == 3){
    uusiDiv.setAttribute("id", data.rakennusala[numero].minne + numero)
  }else if(peliIndex == 4){
    uusiDiv.setAttribute("id", data.artesaani[numero].minne + numero)
  }

  
  uusiDiv.setAttribute("class", "draggable")
  uusiDiv.setAttribute("data-x", "1020");
  uusiDiv.setAttribute("data-y", "-1100");
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
  uusiDropzone.setAttribute("id", roskaAstiaLista[numero-1])
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
    for(var i=0; i<Object.keys(data.rakennusala).length; i++){
      roskaLista.push(data.rakennusala[i].roska)
      laatikoidenLuonti(i)

    
      if(!roskaAstiaLista.includes(data.rakennusala[i].minne)){
        roskaAstiaLista.push(data.rakennusala[i].minne)
      }
    }
    for(var i=0; i<roskaAstiaLista.length; i++){
        roskistenLuonti(i +1)
        document.getElementById(roskislista[i]).innerHTML = roskaAstiaLista[i];
    }
  } 

  else if(peliIndex == 4){
    for(var i=0; i<Object.keys(data.artesaani).length; i++){
      roskaLista.push(data.artesaani[i].roska)
      laatikoidenLuonti(i)

    
      if(!roskaAstiaLista.includes(data.artesaani[i].minne)){
        roskaAstiaLista.push(data.artesaani[i].minne)
      }
    }
    for(var i=0; i<roskaAstiaLista.length; i++){
        roskistenLuonti(i +1)
        document.getElementById(roskislista[i]).innerHTML = roskaAstiaLista[i];
    }
  }
}