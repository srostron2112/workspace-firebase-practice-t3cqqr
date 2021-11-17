const firebaseConfig = {
  apiKey: 'AIzaSyCnTiONA5kJi8Hroxd3dimv-AlRHeLnpOM',
  authDomain: 'csci225-bab55.firebaseapp.com',
  projectId: 'csci225-bab55',
  storageBucket: 'csci225-bab55.appspot.com',
  messagingSenderId: '145918814164',
  appId: '1:145918814164:web:8bdf18387236af79699841',
  measurementId: 'G-CRJL29Q68X',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// save the data
$('#Login').submit(function (e) {
  e.preventDefault();
  // get the user name and password from form
  // You need to change this.
  var email = $("#Login-form input[name=login']").val();
  var password = $("#Login-form input[name=pwd']").val();
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((success) => {
      // Signed in
      // ...
      console.log('login in');
      let user = firebase.auth().currentUser;

      //user.updateProfile({ displayName: "Not sure" });
      if (user != null) {
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        console.log(name + email + emailVerified);
      }
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
});
