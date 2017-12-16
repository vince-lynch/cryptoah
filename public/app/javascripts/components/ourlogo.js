var ourLogo = {
  templateUrl: 'templates/logo/logo2.html',
  controller($scope, $http) {
  	
		var timeline = anime.timeline();

		var timescale = 1;
		var rotation = 25;
		var travel = 0;

		timeline.add({
		  targets: '.coin',
		  transformOrigin: function transformOrigin(e, i) {
		    return i % 2 !== 0 ? '0px 19px' : '0px 19px';
		  },
		  translateY: function translateY(e, i) {
		    return [0, 0];
		  },
		  rotateZ: {
		    value: function value(e, i) {
		      return [i > 0 ? i % 2 === 0 ? -rotation : rotation : 0, 0];
		    },
		    delay: function delay(e, i) {
		      return (500 + i * 100) * timescale;
		    },
		    duration: function duration(e, i) {
		      return 500 * timescale;
		    },
		    easing: 'easeOutElastic'
		  },
		  opacity: {
		    value: [0, 1],
		    delay: function delay(e, i) {
		      return (300 + i * 100) * timescale;
		    },
		    duration: 200 * timescale
		  },
		  duration: 500 * timescale,
		  easing: 'easeInExpo',
		  delay: function delay(e, i) {
		    return i * 100 * timescale;
		  }
		}).add({
		  targets: '.coin__wrapper',
		  translateX: ['5rem', 0],
		  easing: 'easeOutExpo'
		}).add({
		  targets: '.brand-name',
		  translateX: ['-110%', 0],
		  opacity: [0, 1],
		  easing: 'easeOutExpo',
		  offset: '-=1000'
		}).add({
		  targets: '.coin__spark',
		  scale: [.8, 1],
		  rotateZ: [-25, 0],
		  opacity: [0, 1],
		  delay: function delay(e, i) {
		    return i * 100 * timescale;
		  },
		  easing: 'easeOutExpo',
		  duration: 800 * timescale,
		  offset: '-=400'
		}).add({
		  targets: '.coin__spark',
		  scale: [1, 1.2],
		  opacity: [1, 0],
		  delay: function delay(e, i) {
		    return i * 100 * timescale;
		  },
		  easing: 'easeOutExpo',
		  duration: 200 * timescale,
		  offset: '-=500'
		})
		// HACK
		.add({
		  targets: '.coin__spark',
		  opacity: 0,
		  easing: 'easeOutExpo',
		  offset: '-=200',
		  duration: 1000 * timescale
		})

		// Move title
		.add({
		  targets: '.brand',
		  translateY: [0, 0],
		  easing: 'easeInOutQuad',
		  offset: '-=500'
		}).add({
		  targets: '.preview',
		  translateY: [70, 0],
		  opacity: [0, 1],
		  offset: '-=700',
		  easing: 'easeOutSine'
		}).add({
		  targets: '.subtitle',
		  opacity: [0, 1],
		  offset: '-=0',
		  easing: 'easeOutSine'
		});

  	}
};

export default ourLogo;