export const b2cPolicies = {
    names: {
        signUpSignIn: 'B2C_1_signupandsigninflow',
        forgotPassword: 'B2C_1_reset-password',
        editProfile: 'B2C_1_edit-profile',
    },
    authorities: {
        signUpSignIn: {
            authority: 'https://utradib2c.b2clogin.com/utradib2c.onmicrosoft.com/B2C_1_signupandsigninflow',
        },
        forgotPassword: {
            authority: 'https://utradib2c.b2clogin.com/utradib2c.onmicrosoft.com/B2C_1_reset-password',
        },
        editProfile: {
            authority: 'https://utradib2c.b2clogin.com/utradib2c.onmicrosoft.com/B2C_1_edit-profile',
        },
    },
    authorityDomain: 'utradib2c.onmicrosoft.com',
};

export const msalConfig = {
    auth: {
        clientId: '7aa1c720-d0a1-4798-a8f9-a7346a6bcd07',
        authority: 'https://utradib2c.b2clogin.com/utradib2c.onmicrosoft.com/B2C_1_signupandsigninflow', 
        //knownAuthorities: ['https://utradib2c.b2clogin.com/utradib2c.onmicrosoft.com/B2C_1_signupandsigninflow/oauth2/v2.0/authorize'],
        knownAuthorities: ['https://utradib2c.b2clogin.com/utradib2c.onmicrosoft.com'],
        redirectUri: '/',
        postLogoutRedirectUri: '/',
        navigateToLoginRequestUrl: false,
    },
    cache: {
        cacheLocation: 'sessionStorage',
        storeAuthStateInCookie: false, 
    },
};

export const protectedResources = {
    apiList: {
        endpoint: 'will provide later',
        scopes: {
            read: ['scope1'],
            write: ['scope2'],
        },
    },
};
export const loginRequest = {
    scopes: ['openid'],
};
