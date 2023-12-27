function addRoom()
{
    room_name = document.getElementById("room_name").ariaValueMax;

    firebase.database().ref("/").child(room_name).update({

    });
    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";

}
function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
row = "<div class='#AddRoom' id="+AddRoom+" onclick='redirectToRoomName(this.id)'>#"+AddRoom+"</div><hr>";
//End code
});});}
getData();
function redictToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}