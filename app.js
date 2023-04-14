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
  function handleUserState(account) {
    if (account) {
      // User is logged in
      console.log(account);
    } else {
      // User is logged out
    }
  }
  
  myMSALObj.handleRedirectPromise().then((response) => {
    const account = myMSALObj.getAccount();
    handleUserState(account);
  }).catch((error) => {
    console.error(error);
  });
  