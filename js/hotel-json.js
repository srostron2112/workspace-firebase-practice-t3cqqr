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
// object examples
var testJson = {};
testJson['lastname'] = 'zhang';
testJson['location'] = 'aiken';
console.log(testJson);

// enter data in
$("input[type='button']").click(function (e) {
  //get the value of form
  const inputdata = $('form').serializeArray();
  console.log(inputdata);

  /* save the data to database */
  firebase.firestore().collection;

  var inputJson = {};
  for (var i = 0; i < inputdata.length; i++) {
    var n = inputdata[i]['name'];
    var v = inputdata[i]['value'];
    console.log(n + ' ' + v);
    inputJson[n] = v;
  }

  firebase.firestore().collection('hotelreservation').add(inputJson);

  /* clear the entry */
  $('form')[0].reset();
});

/* array example
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));
*/

/* read the data from the database */

firebase
  .firestore()
  .collection('hotelreservation')
  .onSnapshot((querySnapshot) => {
    console.log(querySnapshot.size);
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      console.log(doc.data().room);
      console.log(doc.data().checkout);
    });
  });
