$(document).ready(function(){
  $('.get_location').on('click', function(){

    navigator.geolocation.getCurrentPosition(positionSuccess, positionError);

      var latitude;
      var longitude;

    // Gets the user's location

    function positionSuccess(position){
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;

      $('#lat').replaceWith(latitude);
      $('#long').replaceWith(longitude);
    }

    function positionError(error){
      console.warn('ERROR: ' + error.code + ': ' + error.message);
    }

    // Uses the location to pull the nearest bus stops

    


  })
})