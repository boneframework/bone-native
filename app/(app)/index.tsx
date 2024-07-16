import {Text, View} from 'react-native';

import {useAuth} from '@boneframework/native-components/hooks/useAuth';

export default function Index() {
    const {logOut} = useAuth();
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text onPress={() => {
                // The `app/(app)/_layout.tsx` will redirect to the sign-in screen.
                logOut();
            }}>
                Sign Out
            </Text>
        </View>
    );
}
