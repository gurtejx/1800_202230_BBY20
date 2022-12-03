var currentUser;

function populateInfo() {
	firebase.auth().onAuthStateChanged(user => {
		// Check if user is signed in:
		if (user) {

			//go to the correct user document by referencing to the user uid
			currentUser = db.collection("users").doc(user.uid)
			console.log(currentUser);
			//get the document for current user.
			currentUser.get()
				.then(userDoc => {
					//get the data fields of the user
					var userName = userDoc.data().name;
					var userSchool = userDoc.data().school;
					var userCountry = userDoc.data().country;
					var userEmail = userDoc.data().email;

					//if the data fields are not empty, then write them in to the form.
					if (userName != null) {
						document.getElementById("nameInput").value = userName;
					}
					if (userSchool != null) {
						document.getElementById("schoolInput").value = userSchool;
					}
					if (userCountry != null) {
						document.getElementById("countryInput").value = userCountry;
					}
					if (userEmail != null) {
						document.getElementById("emailInput").value = userEmail;
					}
				})
		} else {
			// If user has not signed in, they will be redirect back to the login page.
			window.location.href = "login.html";
			alert("No user is signed in. Access denied.");
		}
	});
}
//call the function to populate the info to the profile template
populateInfo();

function editUserInfo() {
	//the edit will be disabled by default and only useabl when user click one to the "edit button"
	document.getElementById('personalInfoFields').disabled = false;
}

function saveUserInfo() {
	userName = document.getElementById('nameInput').value; //get the value of the field with id="nameInput"
	userSchool = document.getElementById('schoolInput').value; //get the value of the field with id="schoolInput"
	userCountry = document.getElementById('countryInput').value; //get the value of the field with id="CountryInput"
	userEmail = document.getElementById('emailInput').value; //get the value of the field with id="cityInput"

	currentUser.update({
			name: userName,
			school: userSchool,
			country: userCountry,
			email: userEmail
		})
		.then(() => {
			console.log("Document successfully updated!");
			document.getElementById('personalInfoFields').disabled;
		})

	document.getElementById('personalInfoFields').disabled = true;
}