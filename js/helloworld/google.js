define(
	[ "async!http://maps.google.com/maps/api/js?key=AIzaSyDBVbskIUDkTwDCK359euk52FDtsve-SuI&sensor=true!callback" ],
	function() {
		return {
			addMapToCanvas: function( mapCanvas ) {
				var myOptions = {
					center: new google.maps.LatLng( 30.345695,-97.739703 ),
					zoom: 8,
					mapTypeId: google.maps.MapTypeId.ROADMAP
				};

				var map = new google.maps.Map( mapCanvas, myOptions );	
  var ctaLayer = new google.maps.KmlLayer({
      url: 'https://raw.github.com/SteveMunLeeuw/HeyImInADryCounty/master/texasCounties.kml'
  });
  ctaLayer.setMap(map);		
			}		
		}
	}
);