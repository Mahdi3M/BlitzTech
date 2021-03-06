
 const firebaseConfig = {
    apiKey: "AIzaSyBmOOUVhjKZR-OtyvAUQm07QNPedpIRrT4",
    authDomain: "blitztech-3bde1.firebaseapp.com",
    databaseURL: "https://blitztech-3bde1-default-rtdb.firebaseio.com",
    projectId: "blitztech-3bde1",
    storageBucket: "blitztech-3bde1.appspot.com",
    messagingSenderId: "1087461567798",
    appId: "1:1087461567798:web:9cda029754c6894211d797",
    measurementId: "G-6KDN5H1B1G"
  };

firebase.initializeApp(firebaseConfig);

var database = firebase.database();

function sendMessage(){
    var today = new Date();
    var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    // var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    // var dateTime = date+' '+time;
    var dateTime=date.toString();


    //getting the values to send to the firebase database
    var name = document.getElementById("C_name").value;
    var email = document.getElementById("C_mail").value;
    var message = document.getElementById("comment").value;
    var item = document.getElementById("item").textContent;
console.log(email+name+comment+dateTime)
    var newMessagekey = database.ref().child('comments').push().key;
    database.ref('comments/'+item+'/'+newMessagekey+'/Name').set(name);
    database.ref('comments/'+item+'/'+newMessagekey+'/Email').set(email);
    database.ref('comments/'+item+'/'+newMessagekey+'/Comment').set(message); 
    database.ref('comments/'+item+'/'+newMessagekey+'/Date').set(dateTime);
}

var item = document.getElementById("item").textContent;
var leadsRef = database.ref('comments/'+item);
leadsRef.on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
      // console.log(childData.message)

        var by = document.createTextNode('By ');
        var name = document.createTextNode(childData.Name);
        var comment = document.createTextNode(childData.Comment);
        var date = document.createTextNode(' on '+childData.Date);


        var ult = document.getElementById("comList");
        var lit = document.createElement("li");        
        var pt = document.createElement("p");
        var spant = document.createElement("span");
        lit.setAttribute('class','uls');
        pt.appendChild(comment);
        lit.appendChild(pt);
        lit.appendChild(by);
        spant.appendChild(name);
        lit.appendChild(spant);
        lit.appendChild(date);
        ult.appendChild(lit);
        ult.appendChild(document.createElement('hr'));


    });
});

