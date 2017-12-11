const headerNav = {
  template: `
  <header>
  <div class="container">
    <nav class="navbar navbar-expand-md">
      <a class="navbar-brand" href="#!/">
        <our-logo></our-logo>
      </a>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav3" aria-controls="navbarNav3" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav3">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#!/">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#!team">Team</a>
          </li>
        </ul>

        <a class="btn btn-empty ml-md-3" href="#!fund">The Fund</a>
      </div>
    </nav>
  </div>
</header>

 `,
  controller($scope, $http) {


  	}
};

export default headerNav;