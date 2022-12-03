function insertName() {
  firebase.auth().onAuthStateChanged((user) => {
    // Check if a user is signed in:
    if (user) {
      // Do something for the currently logged-in user here:
      console.log(user.uid);
      console.log(user.displayName);
      user_Name = user.displayName;

      $("#name-goes-here").text(user_Name); //using jquery
    } else {
      /**
	  * If user has not signed in, the app will stop user from going to page,
	  * and redirect user back to the login page.
	  */
      window.location.href = "login.html";
      alert("No user is signed in. Access denied.");
    }
  });
}
insertName(); //run the function, read data from the firebase

/**
 * Delete button not functional yet
 */
function deleteButton() {
  firebase.auth().onAuthStateChanged((user) => {
    // Check if a user is signed in:
    if (user) {
      user_Name = user.uid;

      // now check each post
      db.collection("posts")
        .orderBy("postDate", "desc")
        .get()
        .then((result) => {
          result.forEach((doc) => {
            if (doc.data().owner == user_Name) {
              const button = document.querySelector(".deleteButton");
              button.setAttribute("display", "block");
            }
          });
        });
    }
  });
}
deleteButton();
