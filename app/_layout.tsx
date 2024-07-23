import { Slot } from 'expo-router';

import SessionProvider from '@boneframework/native-components/components/SessionProvider';
import TestZone from '@/screens/TestZone'

export default function Root() {
    console.log('root layout')
    // Set up the auth context and render our layout inside of it.
    return (
        // <TestZone></TestZone>
        <SessionProvider>
            <Slot/>
        </SessionProvider>
    );
}
