import {Text, View} from 'react-native';

import useAuth from '@boneframework/native-components/hooks/useAuth';
import AppNavigator from "@/components/navigation/AppNavigator";

export default function Index() {
    const {logout} = useAuth();

    return <AppNavigator />
}
