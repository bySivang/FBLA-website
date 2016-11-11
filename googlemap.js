var marker1, marker2;
var poly, geodesicPoly;
      
  //FUNCTION THAT CREATES THE MAP
  function initialize() {
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var directionsService = new google.maps.DirectionsService;
    var mapCanvas = document.getElementById('map');
    var mapOptions = {
        center: new google.maps.LatLng(40.4755297,-74.2967194),
        zoom: 15,
        //STYLING THE MAP
		    styles:[{"featureType":"all","elementType":"geometry","stylers":[{"color":"#4a221a"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"gamma":0.01},{"lightness":20}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"saturation":-31},{"lightness":-33},{"weight":2},{"gamma":0.8}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative.country","elementType":"all","stylers":[{"saturation":"-2"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#be5d16"},{"visibility":"on"},{"saturation":"-20"},{"lightness":"-48"},{"weight":"0.01"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"lightness":30},{"saturation":30}]},{"featureType":"landscape.natural.landcover","elementType":"geometry.fill","stylers":[{"saturation":"2"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry.fill","stylers":[{"saturation":"-14"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"saturation":20}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"lightness":20},{"saturation":-20}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":10},{"saturation":-30}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"saturation":25},{"lightness":25}]}] }
        
	      //CREATES A WRITTEN POPUP THAT EXPLAINS WHAT BREADIBLE IS
        var map = new google.maps.Map(mapCanvas, mapOptions)
     
        var contentString = 
          '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h1 id="firstHeading" class="firstHeading">Breadible:Bakery and Restaurant</h1>'+
          '<div id="bodyContent">'+
          '<p><b>Breadible</b> is a local ' +
          'gluten-free restaurant and bakery in the eastern part of '+
          'Middlesex County, NJ. Recently chef Adam Jones has brought a rise in customer ratings and appreciation of healthy eating. '+
          'Breadible is best known for its sweet pastries and gluten-free baked goods, '+
          'freshly made every day. Breadible is listed as the go to healthy restaurant in '+
          'Central New Jersey.</p><p>Check Breadible&#8217s Menu: <a href="http://breadible.tk">http://www.breadible.tk</a></p>'+
          '</div>'+
          '</div>'; 
     
        //SHOWS THE DIRECTIONS ON BREADIBLE PAGE
        directionsDisplay.setMap(map);
        directionsDisplay.setPanel(document.getElementById('right-panel'));

        var control = document.getElementById('floating-panel');
        control.style.display = 'block';
        map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);

          var onChangeHandler = function() {
            calculateAndDisplayRoute(directionsService, directionsDisplay);};
            
            
        document.getElementById('start').addEventListener('change', onChangeHandler);
        document.getElementById('end').addEventListener('change', onChangeHandler);
     
        var infowindow = new google.maps.InfoWindow({content: contentString});
     
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(40.4755297,-74.2967194),
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Breadible Bakery and Restaurant'});
    
        marker.addListener('click', function() {
        infowindow.open(map, marker);});}


  //LOADS THE MAP
  google.maps.event.addDomListener(window, 'load', initialize);



 
  //DOES THE BACKGROUND MATH FOR DIRECTIONS TO BREADIBLE
  function calculateAndDisplayRoute(directionsService, directionsDisplay) {
      var start = document.getElementById('start').value;
      var end = "3620 Washington Rd, Sayreville";
      directionsService.route({
          origin: start,
          destination: end,
          travelMode: google.maps.TravelMode.DRIVING}, 
      function(response, status) {
          if (status === google.maps.DirectionsStatus.OK) {
              directionsDisplay.setDirections(response);} 
          else {
              window.alert('Directions request failed due to ' + status);}
      });
  }