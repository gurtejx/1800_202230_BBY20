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
            window.location.href = 'http://127.0.0.1:5502/Login.html';
            alert ("No user is signed in. Access denied.");
        }
    });
}
insertName(); //run the function

