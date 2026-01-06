import {Slot} from 'expo-router';
import SessionProvider from '@boneframework/native-components/components/SessionProvider';
import useNavigationTheme from '@boneframework/native-components/hooks/useNavigationTheme';
import {ThemeProvider} from "@react-navigation/native";

import BoneNativeProvider from "@boneframework/native-components/components/BoneNativeProvider";
import api from '@/config/api';
import colors from '@/config/colors';
import cache from '@/config/cache';
import routes from '@/config/routes';
import settings from '@/config/settings';
import styles from '@/config/styles';

export default function Root() {
    return (
        <BoneNativeProvider api={api} cache={cache} colors={colors} settings={settings} routes={routes} styles={styles}>
            <ThemeProvider value={useNavigationTheme()}>
                <SessionProvider>
                    <Slot/>
                </SessionProvider>
            </ThemeProvider>
        </BoneNativeProvider>
    );
}
