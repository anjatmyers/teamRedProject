const signOutButton = document.getElementById('signOutButton');
const signOutButton1 = document.getElementById('signOutButton1');
const signOutButtonAU = document.getElementById('signOutButtonAU');
signOutButton.onclick = () => auth.signOut();
signOutButton1.onclick = () => auth.signOut();