
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDwMuJpwhDLwnQWmYWslAq3OQPy55ryslE",
    authDomain: "practice-1ea51.firebaseapp.com",
    databaseURL: "https://practice-1ea51-default-rtdb.firebaseio.com",
    projectId: "practice-1ea51",
    storageBucket: "practice-1ea51.appspot.com",
    messagingSenderId: "1014681240613",
    appId: "1:1014681240613:web:3a3f1d55a0df0cf570ebcc"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  


function addUser(){
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
}
