# ImpressTheWeb
Impress.js adaptation as a web page


# The How To ?


<strong>Basic DOM</strong>

<code>
    <!DOCTYPE html>

    <html ng-app="presentation" scroll>

		<head>

			<!-- <head> content here -->

		</head>

		<body>
		
	        <div
	        id="impress"
	        class="presentation"
	        data-min-scale="1"
	        data-max-scale="1"
	        data-scale="1">

	            <div
	            id="first"
	            class="step"
	            data-x="0"
	            data-y="0"
	            data-z="0"
	            data-rotate-x="0"
	            data-rotate-y="0"
	            data-rotate-z="0">

	            	<!-- Step Content -->

	            </div>

			</div>

		</body>

	</html>
	</code>


<strong>Styling</strong>

<code>
width: 100vw;
height: 100vh;
</code>

<strong>Manipulating Navigation Between Steps</strong>

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

							// Using mousewheel event to understand if scrolling UP or DOWN 

							e.originalEvent.wheelDelta < 0 ? impress().next() : impress().prev();		

					}, 300);

					// Look for: transition: all 250ms; ease; in the .scss 
					// Add a slightly larger interval so user don't scroll by mistake without realizing there is a step

				});

			});

		};

	});
	</code>
