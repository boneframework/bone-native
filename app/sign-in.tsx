import {Redirect, router} from 'expo-router';
import { Text, View } from 'react-native';
import * as WebBrowser from "expo-web-browser";
import {exchangeCodeAsync, makeRedirectUri, useAuthRequest} from "expo-auth-session";
import WelcomeScreen from '@boneframework/native-components/screens/WelcomeScreen';
import useAuth from "@boneframework/native-components/hooks/useAuth";
import useApi from "@boneframework/native-components/hooks/useApi";
import usersApi from "@boneframework/native-components/api/users";

import {useEffect} from "react";
import settings from "@/config/settings";

WebBrowser.maybeCompleteAuthSession();

export default function SignIn() {
    const { login, isLoading } = useAuth();
    const profileApi = useApi(usersApi.getProfile);

    const discovery = {
        authorizationEndpoint: settings.discovery.authEndpoint,
        tokenEndpoint: settings.discovery.tokenEndpoint,
    };

    const redirectUri = makeRedirectUri({
        scheme: settings.scheme,
        path: settings.authCallbackURL
    });

    const [request, response, promptAsync] = useAuthRequest(
        {
            clientId: settings.clientId,
            response_type: 'code',
            scopes: ['basic'],
            usePKCE: true,
            redirectUri: redirectUri,
        },
        discovery
    );

    useEffect(() => {
        if (response?.type === 'success') {
            const { code } = response.params;
            getAccessToken(code);
        }

    }, [response]);

    const beginLogin = () => {
        try {
            promptAsync();
        } catch (e) {
            console.error(e);
        }
    }

    const getAccessToken = async (code: string) => {
        await exchangeCodeAsync({
            clientId: settings.clientId,
            grant_type: 'authorization_code',
            redirectUri: redirectUri,
            usePKCE: true,
            code: code,
            extraParams: { code_verifier: request.codeVerifier }
        }, discovery)
            .then(async response => {
                await login(response);
                router.navigate('/');
            })
            .catch(error => console.error(error));
    }



    return (
        <WelcomeScreen
            loginOnPress={beginLogin}
            registerOnPress={() => router.navigate('/register')}
            isLoading={isLoading}
        ></WelcomeScreen>
    );
}
