import * as Device from 'expo-device';
import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from "react-native";
import { Tabs } from 'expo-router';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import Icon from "@boneframework/native-components/components/Icon";
import ApiInterceptor from "@boneframework/native-components/components/ApiInterceptor";
import useNotifications from "@boneframework/native-components/hooks/useNotifications";
import useStyle from "@boneframework/native-components/hooks/useStyle";

import AccountNavigator from "./AccountNavigator";
import NewListingButton from "./NewListingButton";
import FeedNavigator from "./FeedNavigator";
import routes from "../navigation/routes";
import navigation from "../navigation/rootNavigation";

const Tab = createBottomTabNavigator();

function AppNavigator(props) {
    useNotifications();
    const {token, setToken} = useState(null);
    const style = useStyle();

    return (
        <>
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
                    component={FeedNavigator}
                    options={{
                        tabBarIcon: ({size, color}) => <MaterialCommunityIcons name={'home'} size={size} color={color}/>,
                        headerShown: false,
                    }}
                />
                <Tabs.Screen
                    name={'listings/edit'}
                    options={ ({ navigation }) => ({
                        tabBarButton: props => (<NewListingButton onPress={ () => navigation.navigate('FeedEdit') } />)
                    })
                    }
                />
                <Tabs.Screen
                    name={'Summary'}
                    component={AccountNavigator}
                    options={{
                        tabBarIcon: ({size, color}) => <MaterialCommunityIcons name={'account'} size={size} color={color}/>,
                        headerShown: false
                    }}
                />
            </Tabs>
        </>
    )
}

export default AppNavigator;
