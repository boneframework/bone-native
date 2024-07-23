import useAuth from '@boneframework/native-components/hooks/useAuth';
import { Redirect, Stack } from 'expo-router';
import {Text} from "react-native";

export default function AppLayout() {
    const { user, isLoading } = useAuth();

    // You can keep the splash screen open, or render a loading screen like we do here.
    if (isLoading) {
        console.log('loading...')
        return <Text>Loading...</Text>;
    }

    console.log('no longer loading, user is ' , user)

    // Only require authentication within the (app) group's layout as users
    // need to be able to access the (auth) group and sign in again.
    if (!user || user === 'null') {
        // On web, static rendering will stop here as the user is not authenticated
        // in the headless Node process that the pages are rendered in.
        return <Redirect href="/sign-in" />;
    }

    // This layout can be deferred because it's not the root layout.
    return <Stack />;
}
