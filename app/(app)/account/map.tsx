import React from 'react';
import { View, Text } from 'react-native';
import MapScreen from '@boneframework/native-components/screens/MapScreen';

function Map(props: any) {
    return (
        <MapScreen {...props}></MapScreen>
    );
}

export default Map;
