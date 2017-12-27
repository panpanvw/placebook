var container_dark = document.getElementById('dark-container');

window.onclick = function(event) {
    if (event.target == container_dark) {
        disable_input();
        location.href="/";
    }
}

// will make page seem to load faster
function disable_input() {
  container_dark.style.display = "none";
}

$(document).ready(function(){
  $('.info-button').on('click', function() {
    $('.infodiv').toggle();
    return false;
  });

  $('.close-button').on('click', function() {
    $('.infodiv').hide();
    return false;
  });

  $('#back').on('click', function() {
    disable_input();
  });

  $(document).on('click', '.mapbutton', function() {
    // var val1 = $(this).siblings('h2').text().split(' ').join('+');
    var val1 = $(this).closest('.card').find('#location').text().split(' ').join('+');
    var str = "https://maps.googleapis.com/maps/api/staticmap?center="+ val1 + "&zoom=12&scale=2&size=600x300&maptype=terrain&key=AIzaSyCdJieNVjZkVK1snuD_zRrruMd-ktMhZBU&format=jpg&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7C" + val1;
    console.log(val1);
    $(".map").toggle().attr("src",str); //toggle map instead of seperate hide/show
    return false;
  });
});
