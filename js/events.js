//define functions here

function getIt() {
  $("p").on('click', function() {
    alert('Hey!')
  });
}

function frameIt() {
  $("img").on('load', function() {
    $("img").addClass('tasty')
  });
}

function pressIt() {
  $("form").on('keydown', function(key) {
    if($("input:first").val() === 'G') {
      return alert ('G was pressed')
    }
  })
}

function submitIt() {
  $("form").on('submit', function() {
    alert ('Your form is going to be submitted now.');
  })
}

$(document).ready(function(){

// call functions here
frameIt()
getIt();
pressIt();


});
