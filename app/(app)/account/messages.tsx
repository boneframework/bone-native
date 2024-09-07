import React, {useState} from 'react';
import {FlatList} from "react-native";
import ListItemSwipable from '@boneframework/native-components/components/ListItemSwipable';
import ListItemDeleteAction from '@boneframework/native-components/components/ListItemDeleteAction';
import ListItemSeparator from '@boneframework/native-components/components/ListItemSeparator';
import Screen from '@boneframework/native-components/components/Screen';
import {GestureHandlerRootView} from "react-native-gesture-handler";

const initialMessages = [
    {
        id: 1,
        title: '@liono',
        description: 'Hey! Nice one, I see..',
        image: require('@/assets/images/avatars/lion.png'),
    },
    {
        id: 2,
        title: '@pussicus',
        description: 'Bone Framework rocks!',
        image: require('@/assets/images/avatars/cat.png'),
    },
    {
        id: 3,
        title: '@doggo',
        description: 'Totally 😆👌',
        image: require('@/assets/images/avatars/dog.png'),
    },
    {
        id: 4,
        title: '@fantasticmrfox',
        description: 'You should check it out',
        image: require('@/assets/images/avatars/fox.png'),
    },
    {
        id: 5,
        title: '@sherekhan',
        description: 'I\'m gonna build an app!',
        image: require('@/assets/images/avatars/tiger.png'),
    },
    {
        id: 6,
        title: '@kirra',
        description: 'You know what to do 😉',
        image: require('@/assets/images/avatars/koala.png'),
    },
];


function Messages() {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);
    const handleDelete = message => {
        // do an api delete call to server, then upon success:
        setMessages(messages.filter(m => m.id !== message.id));
    }
    const renderItem = ({item}) =>
        <ListItemSwipable title={item.title}
                          subtitle={item.description}
                          image={item.image}
                          onPress={() => alert('do something!')}
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
