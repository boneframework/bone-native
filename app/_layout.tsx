import {Slot} from 'expo-router';
import SessionProvider from '@boneframework/native-components/components/SessionProvider';
import useNavigationTheme from '@boneframework/native-components/hooks/useNavigationTheme';

import TestZone from '@/screens/TestZone'
import {ThemeProvider} from "@react-navigation/native";

export default function Root() {
    return (
        // <TestZone></TestZone>
        <ThemeProvider value={useNavigationTheme()}>
            <SessionProvider>
                <Slot/>
            </SessionProvider>
        </ThemeProvider>
    );
}
