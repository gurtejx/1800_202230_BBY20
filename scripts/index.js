
db.collection("posts")
  .get()
  .then((result) => {
    result.forEach((doc) => {
      console.log(doc.data());
      var template = `
      <div class="card-body">
     <h5 class="card-title">${doc.data().title} - ${doc.data().activity}</h5>
        <p class="card-text">${doc.data().content}</p>
        <p class="card-date">${doc.data().date}</P>
        <a href="#" class="btn btn-primary">join</a>
      </div>`;
      $('.card').append(template)
    });
  });
