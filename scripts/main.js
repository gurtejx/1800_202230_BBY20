// firebase.auth().onAuthStateChanged(user => {
//     if (user) {
//         var currentUser = db.collection("users").doc(user.uid)
//         var userID = user.uid;
//         //get the document for current user.
//         currentUser.get()
//             .then(userDoc => {
//                 var userEmail = userDoc.data().email;
//                 db.collection("Reviews").add({
//                     code: hikeID,
//                     userID: userID,
//                     title: Title,
//                     level: Level,
//                     season: Season,
//                     description: Description,
//                     flooded: Flooded,
//                     scrambled: Scrambled,
//                     timestamp: firebase.firestore.FieldValue.serverTimestamp()
//                 }).then(()=>{
//                     window.location.href = "thanks.html"; //new line added
//                 })
//             })
               
//     } else {
//         // No user is signed in.
//     }
// });

// firebase.auth().onAuthStateChanged(user => {
//     // Check if user is signed in:
//     if (user) {

//         //go to the correct user document by referencing to the user uid
//         currentUser = db.collection("posts").doc(post.uid)
//         //get the document for current user.
//         currentUser.get()
        
//         .then(userDoc => {
//                 //get the data fields of the user
//                 var activity = userDoc.data().details;
//                 var location = userDoc.data().location;
//                 var time = userDoc.data().time;

//                 //if the data fields are not empty, then write them in to the form.
//                 if (userName != null) {
//                     document.getElementById("activityInput").value = activity;
//                 }
//                 if (userSchool != null) {
//                     document.getElementById("locationlInput").value = location;
//                 }
//                 if (userCity != null) {
//                     document.getElementById("timeInput").value = time;
//                 }
//             })
//     } else {
//         // No user is signed in.
//         console.log ("No user is signed in");
//     }
// });

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

