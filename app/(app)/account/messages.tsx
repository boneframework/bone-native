import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View} from "react-native";
import Constants from 'expo-constants'
import ListItemSwipable from '@boneframework/native-components/components/ListItemSwipable';
import ListItemDeleteAction from '@boneframework/native-components/components/ListItemDeleteAction';
import ListItemSeparator from '@boneframework/native-components/components/ListItemSeparator';
import Screen from '@boneframework/native-components/components/Screen';
import {GestureHandlerRootView} from "react-native-gesture-handler";

const initialMessages = [
    {
        id: 1,
        title: '@delboy1978uk',
        description: 'Derek Stephen McLean',
        image: require('@/assets/delboy.jpg'),
    },
    {
        id: 2,
        title: '@gbeams97',
        description: 'Gretl Michielsen',
        image: require('@/assets/gretl.png'),
    },
    {
        id: 3,
        title: '@teddy',
        description: 'Teddicus Maximus',
        image: require('@/assets/teddy.png'),
    },
    {
        id: 4,
        title: '@django',
        description: 'Teddicus Minimus',
        image: require('@/assets/django.png'),
    },
    {
        id: 5,
        title: '@bonymoo',
        description: 'The Hieland Coo',
        image: require('@/assets/moo.png'),
    },
    {
        id: 6,
        title: '@mosh',
        description: 'Mosh Hamedani',
        image: require('@/assets/mosh.jpg'),
    },
];


function Messages() {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);
    const handleDelete = message => {
        // delete call to server, then upon success:
        setMessages(messages.filter(m => m.id !== message.id));
    }
    const renderItem = ({item}) =>
        <ListItemSwipable title={item.title}
                          subtitle={item.description}
                          image={item.image}
                          onPress={() => alert('do smething!')}
                          renderRightActions={() => (<ListItemDeleteAction onPress={() => handleDelete(item)}/>)}
                          displayCheverons={true}
        />;

    return (
        <Screen>
            <GestureHandlerRootView>
                <FlatList
                    data={messages}
                    keyExtractor={item => item.id.toString()}
                    renderItem={renderItem}
                    ItemSeparatorComponent={() => <ListItemSeparator/>}
                    refreshing={refreshing}
                    onRefresh={() => setMessages(initialMessages)}
                />
            </GestureHandlerRootView>
        </Screen>
    );
}

export default Messages;
