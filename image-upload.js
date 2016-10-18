
	.directive('imageUpload', function () {
		'use strict';

		return {
			restrict: 'E',
			scope: {
				getImg: '='
			},
			template: '<input type="file" id="image" >',
			link: function(scope, element){

				var mimeImgType = ['png', 'jpg', 'jpeg', 'tif', 'bmp', 'gif'];

				element.find('input').bind('change', function(e) {

					var file = e.target.files[0];
					var type = file.name.substr(file.name.indexOf('.') + 1 );

					if( mimeImgType.indexOf(type) > -1 ) {
						
						var reader = new window.FileReader();
						reader.readAsDataURL(file);
						reader.onloadend = function() {

							scope.getImg = '<img  src="'+reader.result+'" alt="image" >';

						}

					} else {

						alert('Sorry, this file type not supported!!');

					}

				});
			}
		}
	});
