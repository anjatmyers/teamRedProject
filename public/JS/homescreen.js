const auth = firebase.auth();
const whenSignedIn = document.getElementById('whenSignedIn');
const whenSignedOut = document.getElementById('whenSignedOut');
const signOutButton = document.getElementById('signOutButton');
const userDetails = document.getElementById('userDetails');



signOutButton.onclick = () => auth.signOut();


auth.onAuthStateChanged(user => {
    if (user) {
       
        // signed in... send to financials page
        // whenSignedIn.hidden = false;
        // whenSignedOut.hidden = true;
        // userDetails.innerHTML = `<h2> Welcome, ${user.displayName}!`;
        // signInButton.hidden = true;
        // signUpButton.hidden = true;

    } else {
        // not signed in.  Prompt log-in.
        whenSignedIn.hidden = true;
        whenSignedOut.hidden = true;
        signOutButton.hidden = true;
        userDetails.innerHTML = '';
    }
});