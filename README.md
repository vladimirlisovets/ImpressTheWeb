# ImpressTheWeb
Impress.js adaptation as a web page (https://github.com/impress/impress.js/)


# Basic DOM

https://gist.github.com/vladimirlisovets/b64310e353dd439317c8f0fb0d8fe895

# Basic Styling

<code>
.step {
width: 100vw;
height: 100vh;
}
</code>


# Manipulating Navigation Between Steps

<code>
	impress().init();

	app = angular.module('presentation', []);

	app.directive("scroll", function ($window) {

		return function(scope, element, attrs) {

			// Adding a Event Listener on `impress:stepenter` 

			/* 


				other impress.js events:
				impress:init
				impress:stepenter
				impress:stepleave


			*/

			window.addEventListener('impress:stepenter', function() {

				// one() will allow user to scroll ahead only after loading next step

				angular.element($window).one('mousewheel', function(e) {
					
					// Waiting for the transition effect to take place before letting scroll ahead

					setTimeout(function() {

							// Using mousewheel event to understand if scrolling UP or DOWN invoke impress:next() and impress:prev() 

							e.originalEvent.wheelDelta < 0 ? impress().next() : impress().prev();		

					}, 300);

					// Look for: transition: all 250ms; ease; in the .scss 
					// Add a slightly larger interval so user don't scroll by mistake without realizing there is a step

				});

			});

		};

	});
</code>
