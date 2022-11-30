function insertName() {
  firebase.auth().onAuthStateChanged((user) => {
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
      window.location.href = "login.html";
      alert("No user is signed in. Access denied.");
    }
  });
}
insertName(); //run the function

function deleteButton() {
  firebase.auth().onAuthStateChanged((user) => {
    // Check if a user is signed in:
    if (user) {
      // Do something for the currently logged-in user here:
      // console.log(user.uid);
      user_Name = user.uid;

      // now check each post
      db.collection("posts")
        .orderBy("postDate", "desc")
        .get()
        .then((result) => {
          result.forEach((doc) => {
            if (doc.data().owner == user_Name) {
                const button = document.querySelector('.deleteButton');
                button.setAttribute("display", "block");
            }

          });
        });
    }
  });
}
deleteButton();
