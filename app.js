// Sign in
// Sign in
function signIn() {
    const loginRequest = {
      scopes: ["openid", "profile"],
    };
  
    myMSALObj
      .loginPopup(loginRequest)
      .then((response) => {
        console.log(response);
        const account = myMSALObj.getAccount();
        handleUserState(account);
        // Redirect to instahome.html after successful sign-in
        window.location.href = "instahome.html";
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
  function handleUserState(account) {
    if (account) {
      // Handle the case when the user is logged in
      console.log("User is logged in:", account);
    } else {
      // Handle the case when the user is not logged in
      console.log("User is not logged in.");
    }
  }

// Sign out
function signOut() {
    myMSALObj.logout();
}



myMSALObj.handleRedirectPromise().then((response) => {
    const account = myMSALObj.getAccount();
    handleUserState(account);
}).catch((error) => {
    console.error(error);
});
