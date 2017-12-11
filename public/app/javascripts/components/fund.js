const fund = {
  template: `
<section class="fdb-block fdb-viewport" style="">
    <div class="container align-items-center justify-content-center d-flex">
      <div class="row align-items-left text-left">
        <div class="col-6">
          <h1>The Fund</h1>
          <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there.</p>
          <p class="mt-5"><a href="" class="btn btn-shadow">Call to Action</a> <a href="https://www.froala.com" class="btn btn-white btn-shadow">Button</a></p>
        </div>
        <div class="col-6">
          <div id="orbitsWrap"/>
            <ul class="orbit">
              <li class="center"></li>
              <li class="planet"></li>
              <li class="planet highlight"></li>
              <li class="planet outline square"></li>
              <li class="planet outline"></li>
            </ul>
          </div>
       </div>
    </div>
  </section>
  <footer-nav></footer-nav>

  <style>
/*= #########################
    STYLES TO DRAW THE ORBITS
    ######################### */
 
/* container dimensions */
#orbitsWrap {
  max-width: 300px;
  height: 300px;
  margin: 0 auto; /* center container */
  position: relative;
}
 
/* end of demo page */
 
/*= ORBITS CSS */
  .orbit {
    /* remove default styles of ul tag */
    margin: 0;
    padding: 0;
    list-style-type: none;
 
    /* set orbit dimensions & position */
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
 
/*
  · The connection lines are the element themself
  · The rounded elements (the planet) are located
    in the pseudo-element :before
*/
 
  /* center planet: rest planets orbit CSS */
  .orbit .center {
    /* set position of center planet in the middle
    of the orbit */
    position: absolute;
    z-index: 9;
    top: 50%;
    left: 50%;
  }
 
    .orbit .planet, .orbit .center:before, .orbit .planet:before {
      position: absolute;
      content: " ";
      /* color for planet and conection line */
      background:#ffc46f;
      border-radius: 50%; /* make planets rounded */
    }
      /* The connection lines */
      .orbit .planet {
        top: 50%;
        height: 1px;
        border-radius: 0;
 
        /* default position and size for a planet */
        /* it'll be overwrite for the rest of planet */
        left: 25%;
        width: 35%;
      }
        .orbit .planet:nth-child(2) {
          width: 27%;
          left: 33%;
        }
        .orbit .planet:nth-child(3) {
          width: 20%;
          left: 40%;
        }
        .orbit .planet:nth-child(4) {
          width: 20%;
          left: 40%;
        }
 
      .orbit .center:before {
        width: 32px;
        height: 32px;
        margin-top: -16px;
        margin-left: 16px;
      }
 
      .orbit .planet:before {
        top:-12px;
        left:-24px;
        width: 24px;
        height: 24px;
      }
        /*  planet with no background,
            only border */
        .orbit .planet.outline:before {
          background:transparent;
          border:solid 1px #fd9920;
        }
 
        /* planet with ring */
        .orbit .planet.highlight:before {
          border: solid 10px rgba(253, 153, 32, 0.52);
          top:-14px;
          left:-14px;
          width: 15px;
          height: 15px;
 
          /* you need it to make visible the ring */
          /* The background is clipped to the padding box */
          -webkit-background-clip: padding-box;
              background-clip: padding-box;
        }
 
        /* remove rounded to the square planet */
        .orbit .square:before {
          border-radius: 0;
        }

/*= ############################
    STYLES TO ANIMATE THE ORBITS
    ############################ */

/* The connection lines */
    .orbit .planet {
      animation-iteration-count:infinite;
          -webkit-animation-iteration-count:infinite;
 
        animation-timing-function:linear;
          -webkit-animation-timing-function:linear;
 
        transform-origin: center right;
          -webkit-transform-origin: center right;
 
        animation-duration:12s;
          -webkit-animation-duration:12s;
 
        /*  default duration &amp; rotation start position
            for each planet.
            it'll be overwrite for the rest of planet */
        animation-name:orbit;
          -webkit-animation-name:orbit;
    }
 
      /* settings for rest of planets */
      .orbit .planet:nth-child(2) {
        animation-duration:15s;
        animation-name:orbit2;
          -webkit-animation-duration:15s;
          -webkit-animation-name:orbit2;
      }
      .orbit .planet:nth-child(3) {
        animation-duration:20s;
        animation-name:orbitSmall;
          -webkit-animation-duration:20s;
          -webkit-animation-name:orbitSmall;
      }
      .orbit .planet:nth-child(4) {
        animation-duration:9s;
        animation-name:orbit3;
          -webkit-animation-duration:9s;
          -webkit-animation-name:orbit3;
      }
 
@keyframes orbit {
  from { transform:rotate(0deg); }
  to { transform:rotate(-360deg); }
}
    @-webkit-keyframes orbit {
      from { -webkit-transform:rotate(0deg); }
      to { -webkit-transform:rotate(-360deg); }
    }
 
@keyframes orbit2 {
  from { transform:rotate(120deg); }
  to { transform:rotate(-240deg); }
}
  @-webkit-keyframes orbit2 {
    from { -webkit-transform:rotate(120deg); }
    to { -webkit-transform:rotate(-240deg); }
  }
 
@keyframes orbit3 {
  from { transform:rotate(-160deg); }
  to { transform:rotate(200deg); }
}
  @-webkit-keyframes orbit3 {
    from { -webkit-transform:rotate(-160deg); }
    to { -webkit-transform:rotate(200deg); }
  }
 
@keyframes orbitSmall {
  from { transform:rotate(-240deg); }
  to { transform:rotate(120deg); }
}
  @-webkit-keyframes orbitSmall {
    from { -webkit-transform:rotate(-240deg); }
    to { -webkit-transform:rotate(120deg); }
  }
  </style>
  `,
  controller($scope, $http) {


  }
};

export default fund;