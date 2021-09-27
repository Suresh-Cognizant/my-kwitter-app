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
       roomname=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
name:username,
massage:msg,
like:0
      });
}