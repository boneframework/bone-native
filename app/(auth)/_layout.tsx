import {Slot, Stack} from 'expo-router';
import SessionProvider from '@boneframework/native-components/components/SessionProvider';
import useNavigationTheme from '@boneframework/native-components/hooks/useNavigationTheme';

import TestZone from '@/screens/TestZone'
import {ThemeProvider} from "@react-navigation/native";

export default function Auth() {
    return (
        <Stack>
            <Stack.Screen name={'user/register'} options={{headerShown: false}} />
            <Stack.Screen name={'user/sign-in'} options={{headerShown: false}} />
            <Stack.Screen name={'user/check-your-email'} options={{headerShown: false}} />
            <Stack.Screen name={'user/activate'} options={{headerShown: false}} />
        </Stack>
    );
}
