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
const currentDate = new Date();

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    $("#post").click(function () {
      var save = {
        title: $("#title").val(),
        content: $("#content").val(),
        activity: $("#activity").val(),
        time: $("#time").val(),
        date: $("#date").val(),
        postDate: currentDate.toLocaleString('en-us'),
        owner: user.uid,
        email: user.email,
      };
      db.collection("posts")
        .add(save)
        .then(() => {
          window.location.href = "/main.html";
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }
  else {
    // No user is signed in.
    alert ("No user is signed in");
}
});
