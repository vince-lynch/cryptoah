var FirestoreService = function () {

  console.log('Firestore loaded')
  var db = firebase.firestore();

  // uid = user.uid  //user
  this.getUserWallet = function(userId, userInfo){
    console.log('called fireStore, getUserWallet()', userId);

    var walletRef = db.collection("wallets").doc(userId);

    walletRef.get().then(function(doc) {
      if (doc.exists) {
        console.log("Document data:", doc.data());
      } else {
        console.log("Cryptoah Wallet doesn't exist, creating now!");
        // if wallet doesn't exist in database, then create one and store their information there

        //generateWallet
        const {address, privateKey} = Accounts.create();
        const cryptoahWallet = { address, privateKey };

        walletRef.set({
          cryptoahWallet,
          userInfo
        });
      }
    }).catch(function(error) {
      console.log("Error getting document:", error);
    });
  }




  // db.collection('wallets').get().then((querySnapshot) => {
  //   querySnapshot.forEach((doc) => {
  //     console.log(`Firestore -> ${doc.id} => ${doc.data()}`)
  //   })
  // })


}

export default FirestoreService;
