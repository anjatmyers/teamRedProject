const auth = firebase.auth();

const whenSignedIn = document.getElementById('whenSignedIn');
const whenSignedOut = document.getElementById('whenSignedOut');
const signInButton = document.getElementById('signInButton');
// const signOutButton = document.getElementById('signOutButton');
const userDetails = document.getElementById('userDetails');
const signUpButton = document.getElementById('signUpButton');


const provider = new firebase.auth.GoogleAuthProvider();


signInButton.onclick = () => auth.signInWithPopup(provider);

// signOutButton.onclick = () => auth.signOut();

auth.onAuthStateChanged(user => {
    if (user) {
        window.location.href="home.html"
        // signed in... send to financials page
        whenSignedIn.hidden = false;
        whenSignedOut.hidden = true;
        userDetails.innerHTML = `<h2> Welcome, ${user.displayName}!`;
        signInButton.hidden = true;
        // signOutButton.hidden = false;
        signUpButton.hidden = true;


    } else {
        // not signed in.  Prompt log-in.
        whenSignedIn.hidden = true;
        whenSignedOut.hidden = true;
        signInButton.hidden = false;
        // signOutButton.hidden = true;
        signUpButton.hidden = false;
        userDetails.innerHTML = '';
    }
});

