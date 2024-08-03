import React from 'react';
import {Stack} from "expo-router";

// import ListingsScreen from '../screens/ListingsScreen';
// import ListingDetailsScreen from '../screens/ListingDetailsScreen';

export default function ListingLayout() {
    return (
        <Stack screenOptions={{presentation: 'modal', headerShown: false}} >
            <Stack.Screen name={'index'} options={{headerShown: false}} />
            <Stack.Screen name={'details'} options={{headerShown: false}} />
        </Stack>
    );
}
