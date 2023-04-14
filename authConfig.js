const msalConfig = {
    auth: {
        clientId: "e8ae9bb8-e0db-4540-bd24-cdd0a7b3df64",
        authority: "https://myinstaa.b2clogin.com/myinstaa.onmicrosoft.com/B2C_1_signupsignin",
        knownAuthorities: ["myinstaa.b2clogin.com"],
    },
    cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: false,
    },
};

const myMSALObj = new msal.PublicClientApplication(msalConfig);
