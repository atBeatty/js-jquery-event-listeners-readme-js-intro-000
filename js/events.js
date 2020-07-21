//define functions here

function getIt() {
  $("p").on('click', function() {
    alert('Hey!')
  })
}

function frameIt() {
  $("img").on('load', function() {
    $("img").addClass('tasty')
  })
}

function pressIt() {
  $("input").on('keydown', function(key) {
    if(key === 'G'\c)
  })
}

$(document).ready(function(){

// call functions here

});
