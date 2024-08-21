import Constants from "expo-constants";

const apiUrl = process.env.EXPO_PUBLIC_API_URL;
const clientId = process.env.EXPO_PUBLIC_API_CLIENT_ID;

const settings = {
    dev: {
        apiUrl: apiUrl,
        authCallbackURL: 'oauth2/callback',
        clientId: clientId,
        discovery: {
            authEndpoint: apiUrl + '/en_GB/oauth2/authorize',
            tokenEndpoint: apiUrl + '/en_GB/oauth2/token',
        },
        scheme: 'bone',
        xDebugHeader: false,
    },
    staging: {
        apiUrl: apiUrl,
        authCallbackURL: 'oauth2/callback',
        clientId: clientId,
        discovery: {
            authEndpoint: apiUrl + '/en_GB/oauth2/authorize',
            tokenEndpoint: apiUrl + '/en_GB/oauth2/token',
        },
        scheme: 'bone',
        xDebugHeader: false,
    },
    prod: {
        apiUrl: apiUrl,
        authCallbackURL: 'oauth2/callback',
        clientId: clientId,
        discovery: {
            authEndpoint: apiUrl + '/en_GB/oauth2/authorize',
            tokenEndpoint: apiUrl + '/en_GB/oauth2/token',
        },
        scheme: 'bone',
        xDebugHeader: false,
    }
}

const getCurrentSettings = () => {
    if (__DEV__) {
        return settings.dev;
    }

    if (Constants.manifest.releaseChannel === 'staging') {
        return settings.staging;
    }

    return settings.prod;
};

export default getCurrentSettings();
