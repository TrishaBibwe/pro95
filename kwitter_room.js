
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig={
apiKey: "AIzaSyAlsvIPcV6IXtfF8n2uUHSx1slpb6bRuj8",
authDomain: "project93-f2e5d.firebaseapp.com",
databaseURL: "https://project93-f2e5d-default-rtdb.firebaseio.com",
projectId: "project93-f2e5d",
storageBucket: "project93-f2e5d.appspot.com",
messagingSenderId: "28844961275",
appId: "1:28844961275:web:76d8e2dee81bd23dc3ef5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";
function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
      purpose:"Adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - "+Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      
      document.getElementById("output").innerHTML += row ;
      //End code
      });});}

getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";
}
