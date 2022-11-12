function insertName() {
    firebase.auth().onAuthStateChanged(user => {
        // Check if a user is signed in:
        if (user) {
            // Do something for the currently logged-in user here: 
            console.log(user.uid);
            console.log(user.displayName);
            user_Name = user.displayName;

            //method #1:  insert with html only
            //document.getElementById("name-goes-here").innerText = user_Name;    //using javascript
            //method #2:  insert using jquery
            $("#name-goes-here").text(user_Name); //using jquery

        } else {
            // No user is signed in.
        }
    });
}
insertName(); //run the function
<<<<<<< HEAD


=======
<<<<<<< HEAD

function writeHikes() {
    //define a variable for the collection you want to create in Firestore to populate data
    var hikesRef = db.collection("hikes");

    hikesRef.add({
        details:"play soccer",
        location: "bosor",    //replace with your own city?
        date: "Nov 24, 2022",
        time: "7pm",
        category: "outdoor",
        participate: "0001, 0002, 0003",
        owner: "123456",
        
        last_updated: firebase.firestore.FieldValue.serverTimestamp()  
    });
    hikesRef.add({
        details:"play soccer",
        location: "bosor",    //replace with your own city?
        date: "Nov 24, 2022",
        time: "7pm",
        category: "outdoor",
        participate: "0001, 0002, 0003",
        owner: "123456",
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
   });
   hikesRef.add({
    details:"play soccer",
    location: "bosor",    //replace with your own city?
    date: "Nov 24, 2022",
    time: "7pm",
    category: "outdoor",
    participate: "0001, 0002, 0003",
    owner: "123456",
        last_updated: firebase.firestore.Timestamp.fromDate(new Date("March 10, 2022"))
   });
}
=======
>>>>>>> f961ff9b1e62d8c06f2275a84645e6c5d7de237a
>>>>>>> d17a13688a35d0a6bfbb77c9e69f9e98c523264c
