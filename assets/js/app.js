
$(document).ready(function () {
  $(".burger-icon").on("click", function(){
    $("nav ul").toggleClass("open");
  });




});



  var userFeed = new Instafeed({
      get: 'user',
      userId: '1192556527',
      sortBy: 'most-recent',
      limit: 6,
      resolution:'standard_resolution',
      template: '<img src="{{image}}"/>',
      accessToken: '1192556527.8d20f7f.8215c81b80284d5192f79dbce618c7f8'
  });
  userFeed.run();
