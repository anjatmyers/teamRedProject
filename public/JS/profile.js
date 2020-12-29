

db.collection('profileData');
const whenSignedIn = document.getElementById('whenSignedIn');
const whenSignedOut = document.getElementById('whenSignedOut');
const signOutButton = document.getElementById('signOutButton');
const userDetails = document.getElementById('userDetails');
const profileForm = document.getElementById('profileForm');
const submitButton = document.getElementById('submitButton');
signOutButton.onclick = () => auth.signOut();



profileForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    // Sets users last name as doc id in Firebase.  FLAW:  Multiple last names will result in overwrite.
    let userId = `${profileForm.lastname.value}`;
    // + (Math.floor(Math.random() * 1000)); add this to line 23 to generate random number with uer ID to prevent duplicates in last name.  
    // lastName = profileForm.lastname.value;
    db.collection("profileData").doc(userId).set({
        firstName : profileForm.firstname.value,
        lastName : profileForm.lastname.value,
        preference : profileForm.cityOrSuburb.value,
        expenses : profileForm.expenses.value, 
        income : profileForm.income.value
    })
    
 
    
    .then(function() {
        console.log("profile built!");
        let docRef = db.collection("profileData").doc(userId);

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
})



