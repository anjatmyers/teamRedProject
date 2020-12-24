
const auth = firebase.auth();
const whenSignedIn = document.getElementById('whenSignedIn');
const whenSignedOut = document.getElementById('whenSignedOut');
const signOutButton = document.getElementById('signOutButton');
const userDetails = document.getElementById('userDetails');
signOutButton.onclick = () => auth.signOut();

const auth = firebase.auth();
// const db = firebase.firestore();

const profileForm = document.getElementById('profileForm');
const submitButton = document.getElementById('submitButton');



profileForm.addEventListener('submitButton',(e)=>{
    e.preventDefault();
    db.collection('profileData').add({
        firstName: profileForm.firstName.value,
        lastName: profileForm.lastName.value

    });

})




