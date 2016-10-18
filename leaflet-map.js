
	.directive('leafletMap', function () {
		'use strict';

		return {

			restrict: 'E',
			replace: true,
			template: '<div></div>',
			scope: {
				user: '=',
				zoom: '='
			},

			link: function(scope, element){

				let userCoords;

				let userWatch = scope.$watch('user', function(newVal) {
					if(newVal) {
						userCoords = [newVal.latitude, newVal.longitude];
						initMap(userCoords, scope.zoom);
						userWatch();
					}
				});
				
				function initMap(coords, zoom) {

					let map = L.map(element[0], {
						scrollWheelZoom: false,
						dragging: false,
						center: coords,
						zoom: zoom,
						zoomControl: false
					});

					L.tileLayer('https://cartocdn_{s}.global.ssl.fastly.net/base-flatblue/{z}/{x}/{y}.png', {

					}).addTo(map);

					let myIcon = L.divIcon({className: 'marker-icon'});

					L.marker(coords, {icon: myIcon}).addTo(map);
				}
				
			}
		}
		
	});
