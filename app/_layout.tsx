import {Slot} from 'expo-router';
import SessionProvider from '@boneframework/native-components/components/SessionProvider';
import useNavigationTheme from '@boneframework/native-components/hooks/useNavigationTheme';

import {ThemeProvider} from "@react-navigation/native";
import ColorProvider from "@boneframework/native-components/components/ColorProvider";

import colors from '@/config/colors';

export default function Root() {
    return (
        <ColorProvider colors={{colors: colors}}>
            <ThemeProvider value={useNavigationTheme()}>
                <SessionProvider>
                    <Slot/>
                </SessionProvider>
            </ThemeProvider>
        </ColorProvider>
    );
}
