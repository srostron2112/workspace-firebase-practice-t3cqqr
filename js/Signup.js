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
$('#signup-form').submit(function (e) {
  e.preventDefault();
  //get the username(email) and password from the form
  // change the following code
  var email = $("#signup-form input[name='username']").val();
  var password = $("#signup-form input[name='password']").val();
  var douppass = $("#signup-form input[name='cpassword']").val();

  if (password != douppass) {
    alert('The Passwords do not match.');
  } else {
    // create a user with email address and password
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        // Signed in
        // ...

        console.log('You are signed up');
        window.location.href = 'Login.html';
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error.code);
        console.log(errorMessage);
      });
  }
});
