import ApiInterceptor from "@boneframework/native-components/components/ApiInterceptor";
import OfflineNotice from "@boneframework/native-components/components/OfflineNotice";
import useAuth from '@boneframework/native-components/hooks/useAuth';
import useStyle from "@boneframework/native-components/hooks/useStyle";
import {Redirect, Stack, Tabs} from 'expo-router';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import NewListingButton from "@/components/navigation/NewListingButton";
import React from "react";

export default function AppLayout() {
    const { user} = useAuth();
    const style = useStyle();

    if (!user || user === 'null') {
        return <Redirect href="/sign-in" />;
    }

    return (
        <>
            <OfflineNotice></OfflineNotice>
            <ApiInterceptor></ApiInterceptor>
            <Tabs
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: "tomato",
                    tabBarActiveBackgroundColor: style.backgroundColor,
                    tabBarInactiveBackgroundColor: style.backgroundColor,
                    tabBarInactiveTintColor: "grey",
                    tabBarStyle: [
                        {
                            display: "flex",
                        },
                        null
                    ],
                    tabBarLabelStyle: {
                        fontSize: 12,
                    },
                }}
            >
                <Tabs.Screen
                    name={'(listing)'}
                    options={{
                        tabBarIcon: ({size, color}) => <MaterialCommunityIcons name={'home'} size={size} color={color}/>,
                        title: 'Listings',
                        headerShown: false,
                    }}
                />
                <Tabs.Screen
                    name={'add-listing'}
                    options={ ({ navigation }) => ({
                        tabBarButton: props => (<NewListingButton onPress={ () => navigation.navigate('add-listing') } />)
                    })
                    }
                />
                <Tabs.Screen
                    name={'account'}
                    options={{
                        title: 'Account',
                        tabBarIcon: ({size, color}) => <MaterialCommunityIcons name={'account'} size={size} color={color}/>,
                        headerShown: false
                    }}
                />
            </Tabs>
        </>
   );
}
