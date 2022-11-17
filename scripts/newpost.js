function populateInfo() {
    firebase.auth().onAuthStateChanged(user => {
        // Check if user is signed in:
        if (user) {

            //go to the correct user document by referencing to the user uid
            currentUser = db.collection("posts").doc(post.uid)
            //get the document for current user.
            currentUser.get()
            
            .then(userDoc => {
                    //get the data fields of the user
                    var activity = userDoc.data().details;
                    var location = userDoc.data().location;
                    var time = userDoc.data().time;

                    //if the data fields are not empty, then write them in to the form.
                    if (userName != null) {
                        document.getElementById("activityInput").value = activity;
                    }
                    if (userSchool != null) {
                        document.getElementById("locationlInput").value = location;
                    }
                    if (userCity != null) {
                        document.getElementById("timeInput").value = time;
                    }
                })
        } else {
            // No user is signed in.
            console.log ("No user is signed in");
        }
    });
}

//call the function to run it 
populateInfo();


function writePost() {
    console.log("in");
    let Title = document.getElementById("title").value;
    let Sports = document.getElementById("sport").value;
    let Description = document.getElementById("description").value;
    let Location = document.getElementById("location").value;

    console.log(Title, Sports, Description, Location);
  
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        var currentUser = db.collection("posts").doc(user.uid);
        var userID = user.uid;
        //get the document for current user.
        currentUser.get().then((userDoc) => {
          var userEmail = userDoc.data().email;
          db.collection("posts")
            .add({
              title: Title,
              activity: Sports,
              content: Description,
              location: Location,

              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            })
            .then(() => {
              window.location.href = "thanks.html"; //new line added
            });
        });
      } else {
        // No user is signed in.
      }
    });
  }
