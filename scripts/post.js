//Create a current date.
const currentDate = new Date();


/**
 * When users click post, the information they entered will be save into the firebase.
 * By db into the posts collection then  use add() function to save the information in the 
 * documents. then user will bew redirect to a "thank you" page and then to the main page. 
 */
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
          window.location.href = "thanks.html";
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }
  else {
    // If user has not signed in, they will be redirect back to the login page.
    window.location.href = "login.html";
    alert ("No user is signed in. Access denied.");
}
});
