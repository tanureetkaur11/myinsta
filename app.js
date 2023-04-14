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
  
  function signOut() {
    myMSALObj.logout({
      postLogoutRedirectUri: "index.html",
    });
  }
  
  // Handle user state
  function handleUserState(account) {
    if (account) {
      // User is logged in
      console.log(account);
      // Redirect to home.html if the user is logged in
      window.location.href = "home.html";
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
  