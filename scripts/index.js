
db.collection("posts")
.orderBy("postDate","desc")
  .get()
  .then((result) => {
    result.forEach((doc) => {
      console.log(doc.data());
      var template = `<div class="card">
      <div class="card-header">
      ${doc.data().title}
      </div>
      <div class="card-body">
        <h5 class="card-title">${doc.data().activity}</h5>
        <p class="card-text">${doc.data().content}<br>${doc.data().date}
        ${doc.data().email}<br></p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>`
      $('.container').append(template)
    });
  });
//<div class="card">//
  //<div class="card-header">
    //Featured
  //</div>
  //<div class="card-body">
    //<h5 class="card-title">Special title treatment</h5>
    //<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    //<a href="#" class="btn btn-primary">Go somewhere</a>
  //</div>
//</div>
//`
//<div class="card-body">
//<h5 class="card-title">${doc.data().title} - ${doc.data().activity}</h5>
//  <p class="card-text">${doc.data().content}</p>
//  <p class="card-date">${doc.data().date}</P>
//  <a href="#" class="btn btn-primary">join</a>
//</div>`;