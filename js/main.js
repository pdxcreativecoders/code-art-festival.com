
$(document).ready(bg)

function bg(){


  var page = Math.floor(Math.random()*3)

  $('html').removeClass('full0 full1 full2');

  $('html').addClass('full'+page)


  //setTimeout(bg, 3333)

}
