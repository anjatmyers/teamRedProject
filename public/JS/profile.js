

db.collection('profileData');
const whenSignedIn = document.getElementById('whenSignedIn');
const whenSignedOut = document.getElementById('whenSignedOut');
const signOutButton = document.getElementById('signOutButton');
const userDetails = document.getElementById('userDetails');
const profileForm = document.getElementById('profileForm');
const submitButton = document.getElementById('submitButton');
signOutButton.onclick = () => auth.signOut();







// userDetails.innerHTML = `<h3>${user.displayName}'s Profile</h3>`;


profileForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    // Sets users last name as doc id in Firebase.  FLAW:  Multiple last names will result in overwrite.
    let userId = `${profileForm.lastname.value}`;
    // + (Math.floor(Math.random() * 1000)); add this to line 23 to generate random number with uer ID to prevent duplicates in last name.  
    
    db.collection("profileData").doc(userId).set({
        firstName : profileForm.firstname.value,
        lastName : profileForm.lastname.value,
        preference : profileForm.cityOrSuburb.value,
        expenses : profileForm.expenses.value, 
        income : profileForm.income.value
    })
    
    .then(function() {
        console.log("profile built!");
    })
    .catch(function(error) {
        console.error("Error building profile: ", error);
    });
})


// var docRef = db.collection("profileData").where("lastName", "==", `${profileForm.lastname.value}`);

// docRef.get().then(function(doc) {
//     if (doc.exists) {
//         console.log("User Profile:", doc.data());
//     } else {
//         // doc.data() will be undefined in this case
//         console.log("Profile does not exist!");
//     }
// }).catch(function(error) {
//     console.log("ERROR:", error);
// });

