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
    if($("input:first") === 'G') {
      alert ('You pressed a G')
    }
  })
}

$(document).ready(function(){

// call functions here

});
