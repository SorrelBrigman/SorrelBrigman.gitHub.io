app.controller('technologiesCtrl', function(){

//find any nav links with the active class
$('a.active').removeClass("active");
//remove active class
//apply actice class to about nav link
$("a.about").addClass("active");

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

});
