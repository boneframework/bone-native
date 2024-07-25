import React from 'react';
import {Stack} from 'expo-router';

import AccountScreen from "../screens/AccountScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import MessagesScreen from "../screens/MessagesScreen";
import SampleMapScreen from "../screens/SampleMapScreen";
import SettingsScreen from "../screens/SettingsScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

function AccountNavigator(props) {
    return (
        <Stack>
            <Stack.Screen name={'/account'} options={{label: 'Account'}} />
            {/*<Stack.Screen name={'Settings'} component={SettingsScreen} />*/}
            {/*<Stack.Screen name={'Edit Profile'} component={EditProfileScreen} />*/}
            {/*<Stack.Screen name={'Sample Map'} component={SampleMapScreen} />*/}
            {/*<Stack.Screen name={'Messages'} component={MessagesScreen} />*/}
            {/*<Stack.Screen name={'Log Out'} component={WelcomeScreen} />*/}
        </Stack>
    );
}

export default AccountNavigator;
