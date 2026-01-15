import {Slot} from 'expo-router';
import SessionProvider from '@boneframework/native-components/components/SessionProvider';
import useNavigationTheme from '@boneframework/native-components/hooks/useNavigationTheme';
import {ThemeProvider} from "@react-navigation/native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import BoneNativeProvider from "@boneframework/native-components/components/BoneNativeProvider";
import api from '@/config/api';
import colors from '@/config/colors';
import cache from '@/config/cache';
import routes from '@/config/routes';
import settings from '@/config/settings';
import styles from '@/config/styles';

function RootLayout() {
    const navTheme = useNavigationTheme();

    return (
        <GestureHandlerRootView>
            <ThemeProvider value={navTheme}>
                <SessionProvider>
                    <Slot/>
                </SessionProvider>
            </ThemeProvider>
        </GestureHandlerRootView>
    );
}

export default function Root() {
    return (
            <BoneNativeProvider api={api} cache={cache} colors={colors} settings={settings} routes={routes} styles={styles}>
                <RootLayout />
            </BoneNativeProvider>
    );
}
