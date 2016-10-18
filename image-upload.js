
	.directive('imageUpload', function () {
		'use strict';

		return {
			restrict: 'E',
			scope: {
				getImg: '='
			},
			template: '<input type="file" id="image" >',
			link: function(scope, element){

				let mimeImgType = ['png', 'jpg', 'jpeg', 'tif', 'bmp', 'gif'];

				element.find('input').bind('change', function(e) {

					let file = e.target.files[0];
					let type = file.name.substr(file.name.indexOf('.') + 1 );

					if( mimeImgType.indexOf(type) > -1 ) {
						
						let reader = new window.FileReader();
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
