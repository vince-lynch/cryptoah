var AuthService = function(FirestoreService){

  console.log('authService loaded');

  // check if they are already signedin
  if(firebase.auth().currentUser) {
    console.log('logged in', firebase.auth().currentUser);
    this.loggedIn = firebase.auth().currentUser;

    const userInfo = {
      displayName: this.loggedIn.displayName,
      phoneNumber: this.loggedIn.phoneNumber,
      photoUrl: this.loggedIn.photoURL
    }
    // get associated data of the users wallet from the DB
    FirestoreService.getUserWallet(this.loggedIn.uid, userInfo);
  }

  this.signinViaGoogle = function() {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/plus.login');
    firebase.auth().signInWithRedirect(provider);
  }

  this.signOut = function() {
    firebase.auth().signOut();
    this.loggedIn = undefined;
  }

}

export default AuthService;
