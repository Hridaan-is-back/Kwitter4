
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBvRkfjXFn-6_32BfoRMf7WiEG-CLcixxA",
      authDomain: "class-test-17b1a.firebaseapp.com",
      projectId: "class-test-17b1a",
      storageBucket: "class-test-17b1a.appspot.com",
      messagingSenderId: "322863929829",
      appId: "1:322863929829:web:c0790dd98347df1073f70c"
    };

    function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child("room name").update({
          purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html"
  }

     
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

       console.log("Room Name -" + Room_names);
       row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" +Room_names+ "</div><hr>";
       document.getElementById("output").innerHTML+= row;

      });});}
getData();

function redirectToRoomName(name) 
{
    console.log(name);
    localStorage.setItem("room_name", name)
    window.location="kwitter_page.html"
}
