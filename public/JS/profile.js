


db.collection('profileData')
const whenSignedIn = document.getElementById('whenSignedIn');
const whenSignedOut = document.getElementById('whenSignedOut');
const signOutButton = document.getElementById('signOutButton');

signOutButton.onclick = () => auth.signOut();

// const auth = firebase.auth();


const profileForm = document.getElementById('profileForm');
const submitButton = document.getElementById('submitButton');

profileForm.addEventListener('submit', (e) =>{
    e.preventDefault();


    db.collection("profileData").add({
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


