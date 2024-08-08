import Constants from "expo-constants";

const settings = {
    dev: {
        apiUrl: 'https://awesome.scot',
        authCallbackURL: 'oauth2/callback',
        clientId: 'be121740bf988b2225a313fa1f107ca1',
        discovery: {
            authEndpoint: 'https://awesome.scot/en_GB/oauth2/authorize',
            tokenEndpoint: 'https://awesome.scot/en_GB/oauth2/token',
        },
        scheme: 'bone',
        xDebugHeader: true,
    },
    staging: {
        apiUrl: 'https://awesome.scot',
        authCallbackURL: 'oauth2/callback',
        clientId: '',
        discovery: {
            authEndpoint: '',
            tokenEndpoint: '',
        },
        scheme: 'bone',
        xDebugHeader: false,
    },
    prod: {
        apiUrl: 'https://awesome.scot',
        authCallbackURL: 'oauth2/callback',
        clientId: '',
        discovery: {
            authEndpoint: '',
            tokenEndpoint: '',
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
