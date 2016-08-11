	
	impress().init();

	app = angular.module('presentation', []);

	app.directive("scroll", function ($window) {

		return function(scope, element, attrs) {

			// Adding a Event Listener on `impress:stepenter` 

			// More Impress.js Events: 

			// impress:stepenter
			// impress:stepleave
			// impress:init 
			window.addEventListener('impress:stepenter', function() {

				// one() instead of on() will avoid turning this into a roller coaster 

				angular.element($window).one('mousewheel', function(e) {
					
					// Waiting for the transition effect to take place before letting scroll ahead

					setTimeout(function() {

							e.originalEvent.wheelDelta < 0 ? impress().next() : impress().prev();		

					}, 400);

				});

			});

		};

	});