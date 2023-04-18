
//ADD YOUR FIREBASE LINKS HERE
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
  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "welcome "+ user_name + "?";

  function add_room(){
      room_name = document.getElementById("room_name").value ;

      firebase.database().ref("/").child(room_name).update({
            purpose:"add room_name"
      });

      localStorage.setItem("room_name",room_name);

      window.location = "kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_name" + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";

}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}