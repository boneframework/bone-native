import React from 'react';
import {Stack} from 'expo-router';

function AccountLayout(props) {
    return (
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name={'index'} options={{title: 'Account'}} />
            <Stack.Screen name={'edit-profile'} options={{headerShown: true, title: 'Edit Profile'}} />
            <Stack.Screen name={'settings'} options={{headerShown: true, title: 'Settings'}} />
            <Stack.Screen name={'map'} options={{headerShown: true, title: 'Map'}} />
            <Stack.Screen name={'messages'} options={{headerShown: true, title: 'Messages'}} />
        </Stack>
    );
}

export default AccountLayout;
