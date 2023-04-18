//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyB9xVb5XK9sA8uJTRYLvvkWj0pVxid7vqQ",
      authDomain: "lets-chat-bebea.firebaseapp.com",
      databaseURL: "https://lets-chat-bebea-default-rtdb.firebaseio.com",
      projectId: "lets-chat-bebea",
      storageBucket: "lets-chat-bebea.appspot.com",
      messagingSenderId: "879422707766",
      appId: "1:879422707766:web:7037154121eac15f25a097"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
      user_name=localStorage.getItem("user_name");
      room_name=localStorage.getItem("room_name");
function send(){
      msg=document.getElementById("message").value ;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      })
      document.getElementById("message").value=""
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}