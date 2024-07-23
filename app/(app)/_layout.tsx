import ApiInterceptor from "@boneframework/native-components/components/ApiInterceptor";
import OfflineNotice from "@boneframework/native-components/components/OfflineNotice";
import useAuth from '@boneframework/native-components/hooks/useAuth';
import { Redirect, Stack } from 'expo-router';
import {Text} from "react-native";

export default function AppLayout() {
    const { user} = useAuth();

    if (!user || user === 'null') {
        return <Redirect href="/sign-in" />;
    }

    // This layout can be deferred because it's not the root layout.
    return (
        <>
            <OfflineNotice />
            <ApiInterceptor></ApiInterceptor>
            <Stack />
        </>
   );
}
