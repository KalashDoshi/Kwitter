//YOUR FIREBASE LINKS

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter_page.html";
}

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(Room_names).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value="";
}
//End code
      } });  }); }
getData();