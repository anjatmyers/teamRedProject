

db.collection('profileDataPROD');
const signOutButton = document.getElementById('signOutButton');




profileForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    let userId = `${profileForm.lastname.value}`;
    db.collection("profileDataPROD").doc(userId).set({
        firstName : profileForm.firstname.value,
        lastName : profileForm.lastname.value,
        preference1 : profileForm.cityOrSuburb.value,
        preference2 : profileForm.cityOrSuburb.value,
        expenses : profileForm.expenses.value, 
        income : profileForm.income.value
    })
    
 
    
    .then(function() {
        console.log("profile built!");
        let docRef = db.collection("profileDataPROD").doc(userId);

docRef.get().then(function(doc) {
    if (doc.exists) {
        console.log(doc.data().lastName);
        localStorage.setItem("currentUser",JSON.stringify(doc.data()));
        console.log("User Profile:", doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("Profile does not exist!");
    }
}).catch(function(error) {
    console.log("ERROR:", error);
});
    })
    .catch(function(error) {
        console.error("Error building profile: ", error);
    });
    let $modal = $('#submittedPopUp');
        $modal.modal('show');
        let $homeButton = $('#homeButton');
        $homeButton.click(function(){
            window.location = "home.html";
        })
})





