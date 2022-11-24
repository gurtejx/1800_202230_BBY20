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


function writePost() {
    //define a variable for the collection you want to create in Firestore to populate data
    var postsRef = db.collection("posts");

     postsRef.add({
        details:"play soccer",
        location: "bosor",    //replace with your own city?
        date: "Nov 24, 2022",
        time: "7pm",
        category: "outdoor",
        participate: "0001, 0002, 0003",
        owner: "123456",
        
        last_updated: firebase.firestore.FieldValue.serverTimestamp()  
    });
    postsRef.add({
        details:"play soccer",
        location: "bosor",    //replace with your own city?
        date: "Nov 24, 2022",
        time: "7pm",
        category: "outdoor",
        participate: "0001, 0002, 0003",
        owner: "123456",
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
   });
   postsRef.add({
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

function populateCardsDynamically() {
    let postCardTemplate = document.getElementById("postCardTemplate");
    let postCardGroup = document.getElementById("postCardGroup");
    
    db.collection("posts").get()
        .then(allPosts => {
            allPosts.forEach(doc => {
                var postDetails = doc.data().details; //gets the details field
                var postID = doc.data().code; //gets the unique CODE field
                var postDate = doc.data().date; //gets the date field
                var postLocation = doc.location().location; //gets the location field
                var postCategory = doc.data().category; //gets the category field
                let testPostCard = postCardTemplate.content.cloneNode(true);
                testPostCard.querySelector('.card-details').innerHTML = postDetails;     //equiv getElementByClassName
                testPostCard.querySelector('.card-date').innerHTML = postDate;      //equiv getElementByClassName
                testPostCard.querySelector('.card-location').innerHTML = postLocation;      //equiv getElementByClassName
                testPostCard.querySelector('.card-category').innerHTML = postCategory;
                testPostCard.querySelector('a').onclick = () => setPostData(postID);//equiv getElementByTagName
                postCardGroup.appendChild(testPostCard);
            })

        })
}
populateCardsDynamically();
