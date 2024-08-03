import { Slot } from 'expo-router';
import SessionProvider from '@boneframework/native-components/components/SessionProvider';

import TestZone from '@/screens/TestZone'

export default function Root() {
    return (
        // <TestZone></TestZone>
        <SessionProvider>
            <Slot/>
        </SessionProvider>
    );
}
