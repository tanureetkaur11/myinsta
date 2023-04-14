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
        handleUserState(account, true);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
  // Sign out
  function signOut() {
    myMSALObj.logout();
  }
  
  // Handle user state
  function handleUserState(account, shouldRedirect) {
    if (account) {
      // User is logged in
      console.log(account);
      if (shouldRedirect) {
        // Redirect to home.html after successful sign-up or sign-in
        window.location.href = "home.html";
      }
    } else {
      // User is logged out
    }
  }
  
  myMSALObj.handleRedirectPromise().then((response) => {
    const account = myMSALObj.getAccount();
    handleUserState(account, false);
  }).catch((error) => {
    console.error(error);
  });
  