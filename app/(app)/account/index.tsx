import React from 'react';
import {FlatList, StyleSheet, View} from "react-native";
import ListItemSwipable from '@boneframework/native-components/components/ListItemSwipable'
import Icon from '@boneframework/native-components/components/Icon'
import Screen from '@boneframework/native-components/components/Screen'
import ListItemSeparator from "@boneframework/native-components/components/ListItemSeparator";
import useAuth from "@boneframework/native-components/hooks/useAuth";
import useStyle from "@boneframework/native-components/hooks/useStyle";
import {GestureHandlerRootView} from "react-native-gesture-handler";

import colors from '@/config/colors'
import routes from "../../../config/routes";
import {router} from "expo-router";

const menuItems = [
    {
        title: "Settings",
        icon: {
            name: "cog",
            backgroundColor: colors.primary
        },
        targetScreen: '/account/settings'
    },
    {
        title: "Sample Map",
        icon: {
            name: "map-marker",
            backgroundColor: colors.secondary
        },
        targetScreen: '/account/map'
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.primary
        },
        targetScreen: '/account/messages'
    },
];

function Index() {
    const { user, logout } = useAuth();
    const style = useStyle();

    const styles = StyleSheet.create({
        screen: {
            backgroundColor: style.backgroundColor
        },
        container: {
            marginVertical: 20
        }
    });

    return (
        <Screen style={styles.screen}>
            <GestureHandlerRootView>
                <View style={styles.container}>
                    <ListItemSwipable
                        title={user.person?.firstname}
                        subtitle={user.email}
                        image={{ uri: user.person?.image}}
                        onPress={() => router.navigate(routes.USER_EDIT_PROFILE)}
                    />
                </View>
                <View style={styles.container}>
                    <FlatList
                        data={menuItems}
                        ItemSeparatorComponent={() => <ListItemSeparator />}
                        keyExtractor={menuItem => menuItem.title}
                        renderItem={ ({item}) =>
                            <ListItemSwipable
                                title={item.title}
                                IconComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />}
                                onPress={() => router.navigate(item.targetScreen) }
                            />
                        }
                    />
                </View>
                <ListItemSwipable
                    title="Log Out"
                    IconComponent={
                        <Icon name="logout" backgroundColor="#ffe66d" />
                    }
                    onPress={logout}
                />
            </GestureHandlerRootView>
        </Screen>
    );
}

export default Index;
