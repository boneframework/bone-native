import ApiInterceptor from "@boneframework/native-components/components/ApiInterceptor";
import OfflineNotice from "@boneframework/native-components/components/OfflineNotice";
import useAuth from '@boneframework/native-components/hooks/useAuth';
import useStyle from "@boneframework/native-components/hooks/useStyle";
import {Redirect, Stack, Tabs} from 'expo-router';
import {Text} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import NewListingButton from "@/components/navigation/NewListingButton";
import AccountNavigator from "@/components/navigation/AccountNavigator";
import React from "react";

export default function AppLayout() {
    const { user} = useAuth();
    const style = useStyle();

    if (!user || user === 'null') {
        return <Redirect href="/sign-in" />;
    }

    // This layout can be deferred because it's not the root layout.
    return (
        <>
            <OfflineNotice></OfflineNotice>
            <ApiInterceptor></ApiInterceptor>
            <Tabs
                screenOptions={{
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
                    name={'listings'}
                    options={{
                        tabBarIcon: ({size, color}) => <MaterialCommunityIcons name={'home'} size={size} color={color}/>,
                        title: 'Listings',
                        headerShown: false,
                    }}
                />
                <Tabs.Screen
                    name={'addListing'}
                    options={ ({ navigation }) => ({
                        tabBarButton: props => (<NewListingButton onPress={ () => navigation.navigate('/listings/edit') } />)
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
