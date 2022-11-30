db.collection("posts")
.orderBy("postDate","desc")
  .get()
  .then((result) => {
    result.forEach((doc) => {
      console.log(doc.data());
      var template = `<div class="card">
      <div class="card-header  modified-header">
      ${doc.data().title}
      </div>
      <div class="card-body">
        <h5 class="card-title">${doc.data().activity}</h5>
        <p class="card-text">${doc.data().content}<br><b>Event takes place at:</b> ${doc.data().date}<span>,</span> ${doc.data().time}
        <br><b>Email address: </b> ${doc.data().email}<br></p>
        <a href="http://gmail.com" target="_blank" class="btn btn-primary">Try Contact</a>
<<<<<<< HEAD
        <a class="btn btn-danger deletepost" onclick="deletePost()">Delete Post</a>
=======
        <a class="btn btn-danger deletepost" id="deletebutton">Delete Post</a>
>>>>>>> d1347012d5ec4232558c5b551f704f64d6b6574a
      </div>
    </div>`
      $('.container').append(template)
    });
  });



  