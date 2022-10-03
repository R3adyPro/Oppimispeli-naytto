import data from './files/yleiset.json' assert {type: 'json'}
import interact from 'https://cdn.skypack.dev/interactjs';


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