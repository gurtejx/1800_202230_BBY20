const currentDate = new Date();

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    $("#post").click(function () {
      var save = {
        title: $("#title").val(),
        content: $("#content").val(),
        activity: $("#activity").val(),
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
    window.location.href = 'http://127.0.0.1:5502/Login.html';
    alert ("No user is signed in. Access denied.");
}
});
