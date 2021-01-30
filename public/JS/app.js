const auth = firebase.auth();
const signInButton = document.getElementById('signInButton');
const provider = new firebase.auth.GoogleAuthProvider();

signInButton.onclick = () => auth.signInWithPopup(provider);

auth.onAuthStateChanged(user => {
    if (user) {
        window.location.href="home.html"
        // signed in... send to financials page
        userDetails.innerHTML = `<h2> Welcome, ${user.displayName}!</h2>`;

    } else {
        // not signed in.  Prompt log-in.
       auth.signOut();
       
    }
});

