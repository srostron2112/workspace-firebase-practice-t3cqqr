// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
$(".sampleSurvey input[type='submit']").click(function (e) {
  e.preventDefault();

  // get the value of the form using serializeArray method
  var inputdata = $('.sampleSurvey').serializeArray();
  inputdata.forEach((data) => {
    console.log(data.name);
    console.log(data.value);
  });
});

// update the result in table
