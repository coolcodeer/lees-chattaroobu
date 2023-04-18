function addUser(){
    var p =document.getElementById("user_name").value ;

    localStorage.setItem("user_name",p);

    window.location="kwitter_room.html"
}