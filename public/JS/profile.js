

const auth = firebase.auth();
// const db = firebase.firestore();

const profileForm = document.getElementById('profileForm');
const submitButton = document.getElementById('submitButton');



profileForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    db.collection('profileData').add({
        firstName: profileForm.firstName.value,
        lastName: profileForm.lastName.value

    });

})


