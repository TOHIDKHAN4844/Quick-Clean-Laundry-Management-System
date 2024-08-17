let globalEmail = "";
function login() {
  console.log('Attempting to login user ...');
  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;
  const auth = firebase.auth();
  const promise = auth.signInWithEmailAndPassword(userEmail, userPass);
  
  promise.then((response) => {
    globalEmail = response.user.email;
    // Redirect to firebase.html after successful login
    window.location.href = '../../Quick-Clean-Laundry-Management-System/admin/firebase.html';
  });

  promise.catch((err) => errorNotification(err.message));
}

// C:\Users\VICTUS\Downloads\creaseart_website-master\creaseart_website-master\index.html
// C:\Users\VICTUS\Downloads\creaseart_website-master\creaseart_website-master\admin\firebase.html