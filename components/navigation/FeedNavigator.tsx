import React from 'react';
import {Stack} from 'expo-router';

import ListingsScreen from '../screens/ListingsScreen';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';

const FeedNavigator = () => (
    <Stack>
        initialRouteName={'Listings'}
        screenOptions={{presentation: 'modal'}}
        options={{headerShown: false}}
    >
        <Stack.Screen name={'/listings'} options={{label: 'Listings'}} />
        <Stack.Screen name={'/listings/details'} options={{ label: 'Listing Details', headerShown: false}} />
    </Stack>
)

export default FeedNavigator;
