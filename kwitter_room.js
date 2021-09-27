
const firebaseConfig = {
      apiKey: "AIzaSyD3d4Oa2aW7lGEbzfyc_LbzB8y8CNTMCdc",
      authDomain: "kwitterpage-2f4b8.firebaseapp.com",
      databaseURL: "https://kwitterpage-2f4b8-default-rtdb.firebaseio.com",
      projectId: "kwitterpage-2f4b8",
      storageBucket: "kwitterpage-2f4b8.appspot.com",
      messagingSenderId: "1076125856279",
      appId: "1:1076125856279:web:f57dac739c50d4b3036252"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
 username=localStorage.getItem("username");
 document.getElementById("username").innerHTML="wellcome "+ username+"!!!";
 function addRoom(){
       Roomname=document.getElementById("room_name").value;
       firebase.database().ref("/").child("roomname").update({
        purpose:"adding roomname"

       });
localStorage.setItem("room_name",Roomname);
window.location="kwitter_page.html";

 }
 function getData() {
       firebase.database().ref("/").on('value', function (snapshot) {
             document.getElementById("output").innerHTML = "";
             snapshot.forEach(function (childSnapshot) {
                   childKey = childSnapshot.key;
                   Room_names = childKey;
                   console.log("Room Name - " + Room_names);
                   row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                   document.getElementById("output").innerHTML += row;
             });
       });
 }
 getData();

 function redirectToRoomName(name) {
       console.log(name);
       localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html";
 }
function logout(){
   localStorage.removeItem("username");
   localStorage.removeItem("room_name");
   window.location="index.html";
}