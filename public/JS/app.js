const auth = firebase.auth();

const whenSignedIn = document.getElementById('whenSignedIn');
const whenSignedOut = document.getElementById('whenSignedOut');

const signInButton = document.getElementById('signInButton');
const signOutButton = document.getElementById('signOutButton');

const userDetails = document.getElementById('userDetails');

const provider = new firebase.auth.GoogleAuthProvider();


signInButton.onclick = () => auth.signInWithPopup(provider);

signOutButton.onclick = () => auth.signOut();

auth.onAuthStateChanged(user => {
    if (user) {
        // signed in... send to financials page
        whenSignedIn.hidden = false;
        whenSignedOut.hidden = true;
        userDetails.innerHTML = `<h2> Hello ${user.DisplayName}!</h2>`
    } else {
        // not signed in.  Prompt log-in.
        whenSignedIn.hidden = true;
        whenSignedOut.hidden = false;
        userDetails.innerHTML = '';
    }
});