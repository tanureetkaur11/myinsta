const msalConfig = {
    auth: {
        clientId: "YOUR_APP_CLIENT_ID",
        authority: "https://YOUR_B2C_TENANT.b2clogin.com/YOUR_B2C_TENANT.onmicrosoft.com/YOUR_SIGN_IN_POLICY",
        knownAuthorities: ["YOUR_B2C_TENANT.b2clogin.com"],
    },
    cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: false,
    },
};

const myMSALObj = new msal.PublicClientApplication(msalConfig);
